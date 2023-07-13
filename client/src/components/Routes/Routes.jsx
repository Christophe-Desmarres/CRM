import React from "react";
import { Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import ErrorPage from "../../pages/ErrorPage";
import Project from "../../pages/Project";
import Todo from "../../pages/Todo";
import Profile from "../../pages/Profile";
import AuthPage from "../../components/Authentification/Auth";
import Admin from "../../pages/Admin";
import Users from "../Admin/Users";
import UserDetail from "../Admin/UserDetail";
import UserUpdate from "../Admin/UserUpdate";
import UserAdd from "../Admin/UserAdd";
import Products from "../Admin/Products";
import Album from "../../pages/Album";


export default function RouterList() {

  const [cookiesUser, setCookieUser] = useCookies(['user']);
  const isAuthenticated = cookiesUser.name ? true : false;

    return (

  <Routes>

            <Route exact path="/" element={<Home />} />
            {/* route for github page home */}
            <Route exact path="/CRM" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projet/*" element={<Project />} />
            <Route path="todo" element={<Todo />} />
            <Route path="album" element={<Album />} />

            <Route path="signin" element={<AuthPage  sign={true} />} />
            <Route path="signup" element={<AuthPage sign={false} />} />

            <Route path="profil" element={<Profile />} >
                <Route path=":id" element={<Profile />} />
            </Route>

            {isAuthenticated ? 
            (<>
            <Route path="admin" element={<Admin />} >
                <Route path="utilisateur" element={<Users />} />
                <Route path="utilisateur/details/:id" element={<UserDetail />} />
                <Route path="utilisateur/modifier/:id" element={<UserUpdate />} />
                <Route path="utilisateur/ajouter" element={<UserAdd />} />

                <Route path="produits" element={<Products />} />
            </Route>
            </> ) : 
            (<Route path="profil" element={<Users />} />)}
            {/* (<Redirect to="/" /> )}  */}

          <Route path="*" element={<ErrorPage error={{'message':'404 cette page n\'existe pas'}}/>} />

        </Routes>

    )
  }
