import CandidateRegister from "../components/candidateRegister";
import EmployerRegister from "../components/employerRegister";

import Button from "react-bootstrap/Button";
import React, {useState} from 'react';

export default function RegisterView () {

    const [isEmployerView, switchView] = useState(false)


    return (
        <main>
            <h1>Register View</h1>
            <div style={{borderStyle: 'solid', borderColor: isEmployerView ? 'black' : 'red'}}>
                <CandidateRegister></CandidateRegister>
            </div>
            <div style={{paddingTop: '20px'}}></div>
            <div style={{borderStyle: 'solid', borderColor: isEmployerView? 'red' : 'black'}}>
            <EmployerRegister></EmployerRegister>
            </div>
            <div>
            <Button variant="primary" size="lg" onClick={() => switchView(!isEmployerView)}>Switch to {isEmployerView ? 'Candidate' : 'Employer'}</Button>
            </div>
        </main>
    )
}