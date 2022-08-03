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
      <nav>
            <a href = "index.html">Project Homeless Employment</a>
            <a href = "about.html">About</a>
            <a href ="explore.html">Explore</a>
        </nav>
        <div> <!--- main content --->
            <h1> PROJECT HOMELESS EMPLOYMENT</h1>
            <p> This is the main page of Project Homeless Employment. </p>

            <h1>Your Mom</h1>
            <p id="msg">Tasks????</p>
            <ul>
                <li class="list">Check admin</li>
                <li class="list">Fix O2</li>
                <li> Do your mom</li>
            </ul>
            <div>
                <button class="btn">Dark</button>
            </div>
            <script src="app.js"></script>
            <noscript>You need to enable JavaScript to view the full site.</noscript>

            <p>THIS PAGE IS UNDER CONSTRUCTION!!!</p>
        </div>
    </div>
  );
}

export default App;
