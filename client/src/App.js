// import RouterList from './components/Routes/Routes';
import Footer from './components/template/Footer';
import NavBar from './components/NavBar/NavBar';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes/Routes';



function App() {

  const isMobile= window.innerWidth < 768;
  const [data, setData] = useState(null);
  const isAuthenticated = false;

  // useEffect(() => {
  //   fetch("https://crm-back.vercel.app/customers")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.length));
  // }, []);

  return (
    <Router>
      <div className="App">
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
