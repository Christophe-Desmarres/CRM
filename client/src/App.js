import './App.css';
import RouterList from './components/Routes/Routes';
import Footer from './components/template/Footer';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <div className="App" id="outer-container">
    <NavBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}  />
    <div id="page-wrap" className='landing'>
      <RouterList />
          </div>
      <Footer  className="App-footer"/>
    </div>
  );
}

export default App;
