import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import candidateView from "./routes/candidateView"
import employeeView from "./routes/employerView"
import about from "./routes/about"
import faq from "./routes/faq"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          PHE React Frontend
        </a>
        <a>
          <Link to="/candidateView">Candidate View</Link>
          <Link to="/employerView">Employer View</Link>
	        <Link to="/about">About</Link>
	        <Link to="/FAQ">FAQ</Link>
        </a>
      </header>
    </div>
  );
}

export default App;
