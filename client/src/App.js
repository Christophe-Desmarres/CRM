import { Routes } from 'react-router-dom';
import './App.css';
import routes from './components/Routes/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <routes />
        <p>
          Hello de App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
