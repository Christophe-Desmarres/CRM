import './App.css';
import RouterList from './pages/Routes';
import Footer from './components/template/Footer';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <RouterList  className="App-body"/>
      <Footer  className="App-footer"/>
      </header>
    </div>
  );
}

export default App;
