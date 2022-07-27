import jeff_winner from '../components/jeff_winner.jpg';

export default function Candidate_frames () {
    return (
	    <main>
			
	    
	        <div class="col-md-4">
	            <div class="card user-card">

	                <div class="card-block">
	                    <div class="user-image">
	                        <img src={jeff_winner}/>
	                    </div>
	                    <h3 class="f-w-600 m-t-25 m-b-10">Jeffrey Bezoos</h3>
	                    <p class="text-muted">Tag1 | Tag2 | Tag3</p>



	                    <p class="m-t-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
	                </div>
	            </div>
	        </div>
	   
	    </main>
	)
}
