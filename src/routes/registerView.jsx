import CandidateRegister from "../components/candidateRegister";
import EmployerRegister from "../components/employerRegister";

import Button from "react-bootstrap/Button";

export default function RegisterView () {
    return (
        <main>
            <h1>Register View</h1>
            <div style={{borderStyle: 'solid', borderColor: 'blue'}}>
                <CandidateRegister></CandidateRegister>
            </div>
            <div style={{paddingTop: '20px'}}></div>
            <div style={{borderStyle: 'solid', borderColor: 'blue'}}>
            <EmployerRegister></EmployerRegister>
            </div>
            <Button variant="primary" size="lg">Switch</Button>
        </main>
    )
}