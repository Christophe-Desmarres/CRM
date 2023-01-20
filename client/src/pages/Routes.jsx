import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Store from "./Store";
import NavBar from "../components/NavBar";
import Todo from "./Todo";




export default function RouterList() {
    return (
        <Routes>
          <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<Store />} />
          <Route path="todo" element={<Todo />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
    );
  }
