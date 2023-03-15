import React from "react";
import { Routes, Route, createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import ErrorPage from "../../pages/ErrorPage";
import Project from "../../pages/Project";
import Todo from "../../pages/Todo";
import Profile from "../../pages/Profile";
import Admin from "../../pages/Admin";
import Users from "../Admin/Users";
import UserDetail from "../Admin/UserDetail";
import UserDetail from "../Admin/UserDetail";
import Products from "../Admin/Products";
import Album from "../../pages/Album";


export default function RouterList() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "contact",
  //       element: <Contact />,
  //     },
  //     {
  //       path: "projet",
  //       element: <Project />,
  //     },
  //     {
  //       path: "todo",
  //       element: <Todo />,
  //     },
  //     {
  //       path: "profil",
  //       element: <Profile />,
  //     },
  //     {
  //       path: "admin",
  //       element: <Admin />,
  //     },
  //   ],

  //   },
  // ]);


  const isAuthenticated = true


    return (

      // <RouterProvider router={router} />

       
  <Routes>

            <Route exact path="/" element={<Home />} />
            {/* route for github page home */}
            <Route exact path="/CRM" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projet/*" element={<Project />} />
            <Route path="todo" element={<Todo />} />
            <Route path="album" element={<Album />} />

            <Route path="profil" element={<Profile />} >
                <Route path="profil/:id" element={<Profile />} />
            </Route>

            <Route path="admin" element={<Admin />} >
            {isAuthenticated ? 
            (<>
                <Route path="utilisateur" element={<Users />} />
                <Route path="utilisateur/details/:id" element={<UserDetail />} />

                <Route path="produits" element={<Products />} />
            </> ) : 
            (<Route path="profil" element={<Users />} />)}
            {/* (<Redirect to="/" /> )}  */}
            </Route>

          <Route path="*" element={<ErrorPage error={{'message':'404 cette page n\'existe pas'}}/>} />

        </Routes>

    )
  }
