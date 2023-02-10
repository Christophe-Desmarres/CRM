import './App.css';
import RouterList from './components/Routes/Routes';
import Footer from './components/template/Footer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from "react-router-dom";



function App() {

  return (
    <BrowserRouter id="outer-container">
    <div  id="page-wrap" className="App" >
      <NavBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}  />
      <div className='landing'>
      <RouterList />
      </div>
    </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
