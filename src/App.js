import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import candidateView from "./routes/candidateView"
import employeeView from "./routes/employerView"
import signupView from "./routes/signupView"
import about from "./routes/about"
import faq from "./routes/faq"
import MainPage from "./routes/mainpage"


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <a>
          <Link to="/candidateView">Candidate View</Link>
          <Link to="/employerView">Employer View</Link>
	        <Link to="/about">About</Link>
	        <Link to="/FAQ">FAQ</Link>
	        <Link to="/MainPage">Our (intended) main page</Link>
	<Link to="/signupView">Sign Up</Link>
        </a>
      </header>
    </div>
  );
}

export default App;
