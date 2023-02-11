import './App.css';
import RouterList from './components/Routes/Routes';
import Footer from './components/template/Footer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react';



function App() {

  const isMobile= window.innerWidth < 768;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/customers")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <BrowserRouter>
    <div className="App" >
      <NavBar isMobile={isMobile}  />
      <RouterList />
      <p>{!data ? "Loading..." : data}</p>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
