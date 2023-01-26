import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import ErrorPage from "../../pages/ErrorPage";
import Store from "../../pages/Store";
import Todo from "../../pages/Todo";
import Profile from "../../pages/Profile";
import Admin from "../../pages/Admin";
import Users from "../Admin/Users";
import Products from "../Admin/Products";




export default function RouterList() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/profil/:id" element={<Profile />} />
          <Route path="/admin" element={<Admin />} >
          <Route path="/admin/utilisateur" element={<Users />} />
          <Route path="/admin/produits" element={<Products />} />

          </Route>
          <Route path="*" element={<ErrorPage error={{'message':'404 cette page n\'existe pas'}}/>} />
        </Routes>
    );
  }
