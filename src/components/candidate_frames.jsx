import jeff_winner from '../components/jeff_winner.jpg';
import blank_profile from '../components/blank_profile.jpg';
import '../components/styles.css';
// import '../components/bootstrap.css';

export default function Candidate_frames () {
    return (
	    <main>
			
	   <div class="container">
	    <div class="row">
	        <div class="col-md-4">
	            <div class="card user-card">

	                <div class="card-block">
	                    <div class="user-image">
	                        <img src={jeff_winner}/>
	                    </div>
	                    <h3 class="f-w-600 m-t-25 m-b-10">Jeffrey Bezoos</h3>
	                    <p class="text-muted">Tag1 | Tag2 | Tag3</p>
			<hr/>


	                    <p class="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
	                </div>
	            </div>
	        </div>
	   
	        <div class="col-md-4">
	            <div class="card user-card">

	                <div class="card-block">
	                    <div class="user-image">
	                    	<img src={blank_profile} class="img-radius" alt="User-Profile-Image"/>
	                    </div>
	                    <h3 class="f-w-600 m-t-25 m-b-10">Yo Mama</h3>
	                    <p class="text-muted">Tag1 | Tag2 | Tag3</p>
	                    <hr/>


	                    <p class="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
	                </div>
	            </div>
	        </div>
	        
	        <div class="col-md-4">
	            <div class="card user-card">

	                <div class="card-block">
	                    <div class="user-image">
	                        <img src={blank_profile} class="img-radius" alt="User-Profile-Image"/>
	                    </div>
	                    <h3 class="f-w-600 m-t-25 m-b-10">John Doe</h3>
	                    <p class="text-muted">Tag1 | Tag2 | Tag3</p>
	                    <hr/>


	                    <p class="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
	                </div>
	            </div>
	        </div>
		</div>
	</div>
	    </main>
	)
}
