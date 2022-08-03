import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CandidateView from "./routes/candidateView"
import EmployerView from "./routes/employerView"
import About from "./routes/about"
import FAQ from "./routes/faq"
import MainPage from "./routes/mainpage"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="candidateView" element={<CandidateView />} />
        <Route path="employerView" element={<EmployerView />} />
        <Route path="about" element={<About/>} />
        <Route path="faq" element={<FAQ />} />
        <Route path="mainpage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
