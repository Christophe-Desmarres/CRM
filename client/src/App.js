// import RouterList from './components/Routes/Routes';
import Footer from './components/template/Footer';
import NavBar from './components/NavBar/NavBar';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes/Routes';
import Loader from './components/template/Loader'



function App() {

  const isMobile= window.innerWidth < 768;
  const [data, setData] = useState(null);
  const isAuthenticated = false;

  const [loading, setLoading] = useState(false);


  // to set when loading is finish and view home page
  if (document.readyState === "complete" && !loading) {
    console.log(document.readyState)
    setLoading(true);
  } else {  
  window.addEventListener("load", function () {
    setLoading(true);
  }, false);
  }
  

  // useEffect(() => {
  //   fetch("https://crm-back.vercel.app/customers")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.length));
  // }, []);

  return (
    <Router>
      <div id='app' className="App">
      <Loader load={loading}/>
        <NavBar isMobile={isMobile}/>
        <main>


        <Routes />
        {/* <p>{!data ? "Loading..." : `there are ${data} users register`}</p> */}
        </main>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
