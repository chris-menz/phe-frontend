import CandidateFrame from './candidateFrame.jsx'
import '../components/candidateFramesStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Candidate_frames() {
	return (
		<main>

			<Container>
				<Row>
					<Col>
						<CandidateFrame></CandidateFrame>
					</Col>

					<Col>
						<CandidateFrame></CandidateFrame>
					</Col>


					<Col>
						<CandidateFrame></CandidateFrame>
					</Col>
				</Row>

				<Row>
					<Col>
						<CandidateFrame></CandidateFrame>
					</Col>

					<Col>
						<CandidateFrame></CandidateFrame>
					</Col>


					<Col>
						<CandidateFrame></CandidateFrame>
					</Col>
				</Row>

			</Container>


		</main>
	)
}
