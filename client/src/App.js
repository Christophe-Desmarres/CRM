// import RouterList from './components/Routes/Routes';
import Header from './components/template/Header';
import Footer from './components/template/Footer';
import NavBar from './components/NavBar/NavBar';
// import { BrowserRouter, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate ,
  Routes,
} from 'react-router-dom'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Project from "./pages/Project";
import Todo from "./pages/Todo";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Users from "./components/Admin/Users";
import Products from "./components/Admin/Products";




function App() {

  const isMobile= window.innerWidth < 768;
  const [data, setData] = useState(null);
  const isAuthenticated = false;

  useEffect(() => {
    fetch("http://localhost:5500/customers")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
        <div className="App">
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="projet/*" element={<Project />} />
              <Route path="todo" element={<Todo />} />
              <Route path="profil" element={<Profile />} />
              {/* <Route path="profil/:id" element={<Profile />} /> */}
              <Route path="admin" element={<Admin />} />
              <Route path="*" element={<ErrorPage error={{'message':'404 cette page n\'existe pas'}}/>} />
            </Routes>
          <Footer />

        </div>
    {/* <div> */}
    {/* <BrowserRouter> */}
    {/* <h1>App</h1>
    <div className="App" >
      <NavBar isMobile={isMobile}  />
      <RouterList />
      <p>{!data ? "Loading..." : data}</p>
      <Footer />
    </div> */}
    {/* </BrowserRouter> */}
    {/* </div> */}

    </Router >
  );
}

export default App;
