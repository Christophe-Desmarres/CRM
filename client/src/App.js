import './App.css';
import RouterList from './Routes';
import Footer from './components/template/Footer';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <div className="App">
    <NavBar />
      <RouterList />
      <Footer  className="App-footer"/>
    </div>
  );
}

export default App;
