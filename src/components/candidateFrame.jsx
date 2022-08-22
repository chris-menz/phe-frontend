import jeff_winner from '../assets/jeff_winner.jpg';
import '../components/candidateFramesStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function requestData(userId) {
    //pull data here

    //random sample json
    const jsonData = '{\"firstName\":\"a\",\"lastName\":\"b\",\"dateOfBirth\":\"c\",\"phoneNumber\":\"d\",\"phoneNumberRelationToCandidate\":\"e\",\"email\":\"f\",\"emailRelationToCandidate\":\"g\",\"streetAddress\":\"h\",\"city\":\"i\",\"stateAbrv\":\"j\",\"zipCode\":\"k\",\"skills\":\"l\",\"bio\":\"123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 \"}';
    const obj = JSON.parse(jsonData);
    console.log(obj);

    return obj;

}

export default function Candidate_frame() {

    let candidateObj = requestData('Passed In User ID');

    const age = 69; //TODO: needs to be extrapolated from dob
    const gender = 'urmom' //not in the model right now
    const address = "The White House" //TODO: needs to be extrapolated from the obj and linked to google maps
    const skills = []; //array for skills, generate html procedurally 

    return (
        <main>
            <div class="card user-card" style={{ backgroundColor: 'white' }}>

                <div class="card-block">
                    <Row>
                        <Col md="7" class="user-image">
                            <img src={jeff_winner} width='100px' class="img-radius" alt="User-Profile-Image" />
                        </Col>
                        <Col md="5">
                            <h3 class="f-w-600 m-t-25 m-b-10 h5_black" style={{ color: '#000', marginTop: '0px' }}>{candidateObj.firstName} {candidateObj.lastName}</h3>
                            <p class="text-muted">Age: {age} | Gender: {gender}</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h5 class="h5_black"><b>Location</b></h5>
                            <a href="" style={{ color: 'black' }}>Link this to google maps</a>
                        </Col>
                        <Col>
                            <h5 class="h5_black"><b>Bio</b></h5>
                            <p class="m-t-15 text-muted">{candidateObj.bio}</p>
                        </Col>
                    </Row>


                    <hr />
                    <div class="skills" >
                        <h5 style={{ color: 'black' }}><b>Skills</b></h5>
                        <ul>
                            <li>UI / UX</li>
                            <li>Front End Development</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}