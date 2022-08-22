import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import candidateView from "./routes/candidateView"
import employeeView from "./routes/employerView"
import about from "./routes/about"
import faq from "./routes/faq"


function App() {
  return (
	<div className = "App">
        <div className = "App-header">
            	<h1> PROJECT HOMELESS EMPLOYMENT</h1>
            	<p> We use software to give homeless people jobs! </p>
	</div>
	<div>
            <h2>Explore</h2>
            <p> explore our websiteeeeeeee</p>
	    <ul>
          	<li><Link to="/registerView">Register View</Link></li>
          	<li><Link to="/candidateView">Candidate View</Link></li>
          	<li><Link to="/employerView">Employer View</Link></li>
	        <li><Link to="/about">About</Link></li>
	        <li><Link to="/FAQ">FAQ</Link></li>
	    </ul>
            <div>
                <button class="btn">Dark</button>
            </div>
            <script src="app.js"></script>
            <noscript>You need to enable JavaScript to view the full site.</noscript>
	</div>
	<div>
            <p>THIS PAGE IS UNDER CONSTRUCTION!!!</p>
        </div>
    </div>
  );
}

export default App;
