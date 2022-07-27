import jeff_winner from '../components/jeff_winner.jpg';
import blank_profile from '../components/blank_profile.jpg';
import '../components/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Candidate_frames () {
    return (
	    <main>
			
	<Container>
	    <Row>
	        <Col>
	            <div class="card user-card">

	                <div class="card-block">
	                    <div class="user-image">
	                        <img src={jeff_winner} class="img-radius" alt="User-Profile-Image"/>
	                    </div>
	                    <h3 class="f-w-600 m-t-25 m-b-10">Jeffrey Bezoos</h3>	                    
			<p class="text-muted">Age? | Gender?</p>
	                    <hr/>
	                    <h4>Contact</h4>
	                    <Row>
	                    
	                    	<Col>
	                    		<h5><b>Call:</b></h5>
	                    		<a href="tel:+1234567890">123-456-7890</a>
	                    	</Col>
	                    	<Col>
	                    		<h5><b>Location:</b></h5>
	                    		<a href="">Link this to google maps</a>
	                    	</Col>
	                	</Row>

	                    <hr/>

	                    <p class="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
	                    <hr/>
                    	<div class="skills">
				<h5>Skills</h5>
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
	        </Col>
	   
	        <Col>
	            <div class="card user-card">

	                <div class="card-block">
	                    <div class="user-image">
	                    	<img src={blank_profile} class="img-radius" alt="User-Profile-Image"/>
	                    </div>
	                    <h3 class="f-w-600 m-t-25 m-b-10">Yo Mama</h3>
			<p class="text-muted">Age? | Gender?</p>
	                    <hr/>
	                    <h4>Contact</h4>
	                    <Row>
	                    
	                    	<Col>
	                    		<h5><b>Call:</b></h5>
	                    		<a href="tel:+1234567890">123-456-7890</a>
	                    	</Col>
	                    	<Col>
	                    		<h5><b>Location:</b></h5>
	                    		<a href="">Link this to google maps</a>
	                    	</Col>
	                	</Row>

	                    <hr/>

	                    <p class="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
	                    <hr/>
                    	<div class="skills">
				<h5>Skills</h5>
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
	        </Col>
	        
	        <Col>
	            <div class="card user-card">

	                <div class="card-block">
	                    <div class="user-image">
	                        <img src={blank_profile} class="img-radius" alt="User-Profile-Image"/>
	                    </div>
	                    <h3 class="f-w-600 m-t-25 m-b-10">John Doe</h3>
			<p class="text-muted">Age? | Gender?</p>
	                    <hr/>
	                    <h4>Contact</h4>
	                    <Row>
	                    
	                    	<Col>
	                    		<h5><b>Call:</b></h5>
	                    		<a href="tel:+1234567890">123-456-7890</a>
	                    	</Col>
	                    	<Col>
	                    		<h5><b>Location:</b></h5>
	                    		<a href="">Link this to google maps</a>
	                    	</Col>
	                	</Row>

	                    <hr/>

	                    <p class="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
	                    <hr/>
                    	<div class="skills">
				<h5>Skills</h5>
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
	        </Col>
		</Row>
	</Container>
	    </main>
	)
}
