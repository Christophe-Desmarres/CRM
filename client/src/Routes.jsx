import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Store from "./pages/Store";
import Todo from "./pages/Todo";
import Profile from "./pages/Profile";




export default function RouterList() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/profil/:id" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
  }
