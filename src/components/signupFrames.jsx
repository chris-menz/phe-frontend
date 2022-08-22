import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../components/signcss2.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useRef, useEffect} from 'react';


export default function SignupFrames () {
useEffect(() => {
var counter = 0
let textArea = document.getElementById("textbox");
let characterCounter = document.getElementById("char_count");
const maxNumOfChars = 100;
const countCharacters = () => {
    let numOfEnteredChars = textArea.value.length;
    var counter = numOfEnteredChars;
    if (counter < 100){
    	characterCounter.style.color = "orange";
    	characterCounter.textContent = counter + "/100";
    } else{
    	characterCounter.style.color = "green";
    	characterCounter.textContent = "Feel free to write more!";
    }
};

textArea.addEventListener("input", countCharacters);



var child = 1
$( document ).ready(function() {
var base_color = "rgb(230,230,230)";
var active_color = "#022658";



// var child = 1;
var length = $("section").length - 1;
$("#prev").addClass("disabled");
$("#submit").addClass("disabled");

$("section").not("section:nth-of-type(1)").hide();
$("section").not("section:nth-of-type(1)").css('transform','translateX(100px)');

var svgWidth = length * 200 + 24;
$("#svg_wrap").html(
  '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
    svgWidth +
    ' 24" xml:space="preserve"></svg>'
);

function makeSVG(tag, attrs) {
  var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (var k in attrs) el.setAttribute(k, attrs[k]);
  return el;
}

for (i = 0; i < length; i++) {
  var positionX = 12 + i * 200;
  var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
  document.getElementById("svg_form_time").appendChild(rect);
  // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
  var circle = makeSVG("circle", {
    cx: positionX,
    cy: 12,
    r: 12,
    width: positionX,
    height: 6
  });
  document.getElementById("svg_form_time").appendChild(circle);
}

var circle = makeSVG("circle", {
  cx: positionX + 200,
  cy: 12,
  r: 12,
  width: positionX,
  height: 6
});
document.getElementById("svg_form_time").appendChild(circle);

$('#svg_form_time rect').css('fill',base_color);
$('#svg_form_time circle').css('fill',base_color);
$("circle:nth-of-type(1)").css({fill: active_color, transition: "5.0s"});

 
$(".button").click(function () {
  $("#svg_form_time rect").css({fill: active_color, transition: "all 1.0s ease-out"});
  $("#svg_form_time circle").css({fill: active_color, transition: "1.0s"});
  var id = $(this).attr("id");
  if (id == "next") {



  	console.log()
	// function functiona() {
	  let allAreFilled = true;
	  var x = 1;
	  document.getElementById(`myForm${child}`).querySelectorAll("[required]").forEach(function(i) {
	    if (!allAreFilled) return;
	//     if (i.type === "radio") {
	//       let radioValueCheck = false;
	// document.getElementById("myForm").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
	//         if (r.checked) radioValueCheck = true;
	//       })
	//       allAreFilled = radioValueCheck;
	//       return;
	//     }
	    if (!i.value) { 
	    	console.log(!i.value)
	    	// console.log(document.getElementById("myForm").querySelectorAll("[required]").value())
	    	allAreFilled = false;  return; 
	    }
	  })
	  if (!allAreFilled) {
	  	let length_form = document.getElementById(`myForm${child}`).querySelectorAll("[required]").length
	  	for (let i = 0; i < length_form; i++){
	  		if (document.getElementById(`myForm${child}`).querySelectorAll("[required]")[i].value == ""){
  				document.getElementById(`myForm${child}`).querySelectorAll("[required]")[i].style.borderColor = "red"
	  		}
	  	}
	  	// console.log(length_form)
	    alert('Please fill in all required fields');
	    // document.getElementById("input-container").style.borderColor = "red";
	  } else if (allAreFilled && child != 3 && child != 4){
	  	    $("#prev").removeClass("disabled");
      		x += 1;

    if (child >= length) {
      $(this).addClass("disabled");
      $('#submit').removeClass("disabled");
    }
    if (child <= length) {
      child++;
      console.log(child);

    }
	  }
	  else if (child == 3){

		var email_input = document.getElementById('email_input').value;

		const regex = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
		let email_regex = new RegExp(`[a-z0-9]+@[a-z]+\.[a-z]{2,3}`);
		// let all_regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}\/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
		console.log(email_regex.test(email_input))
		if (regex.test(email_input) == true || email_regex.test(email_input) == true){
				$("#prev").removeClass("disabled");
		      		x += 1;

		    if (child >= length) {
		      $(this).addClass("disabled");
		      $('#submit').removeClass("disabled");
		    }
		    if (child <= length) {
		      child++;
		      console.log(child);
		}

		console.log(regex.test(email_input));
	}else{
		alert(`Please fill in a valid phone number or email \r\n'123-456-7890' or 'example@gmail.com'.\r\n If both, write 'example@gmail.com/123-456-7890'`)
	  }
	
	} else if (child == 4){
		if (characterCounter.style.color == "green"){
			$("#prev").removeClass("disabled");
		      		x += 1;

		    if (child >= length) {
		      $(this).addClass("disabled");
		      $('#submit').removeClass("disabled");
		    }
		    if (child <= length) {
		      child++;
		      console.log(child);
		}

	} else{
		alert('Please write at least 100 characters for your bio')
	}
}

	// };








  } else if (id == "prev") {
    $("#next").removeClass("disabled");
    $('#submit').addClass("disabled");
    if (child <= 2) {
      $(this).addClass("disabled");
    }
    if (child > 1) {
      child--;
      console.log(child);
    }
  }
  var circle_child = child + 1;
  $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
    "fill",
    base_color
  );
  $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
    "fill",
    base_color
  );
  var currentSection = $("section:nth-of-type(" + child + ")");
  currentSection.fadeIn();
  currentSection.css('transform','translateX(0)');
 currentSection.prevAll('section').css('transform','translateX(-100px)');
  currentSection.nextAll('section').css('transform','translateX(100px)');
  $('section').not(currentSection).hide();
});

});


document.getElementById("submit").disabled = true;
$('#checkbox').on('change', function(){
   this.value = this.checked ? 1 : 0;
   if (this.value == 0){
   	document.getElementById("submit").disabled = true;
   }
   if (this.value == 1){
   	document.getElementById("submit").disabled = false;
   }
   console.log(this.value)
});




const input_click = document.getElementsByClassName("input-container");

for (let i = 0; i < document.getElementsByClassName("input-container").length; i++){
	input_click[i].addEventListener('click', function handleClick() {
		console.log(child)
		console.log(document.getElementById(`myForm${child}`).querySelectorAll("[required]")[i])
  		document.getElementById(`myForm${child}`).querySelectorAll("[required]")[i].style.borderColor = "rgba(0, 0, 0, 0.2)"
	});
}
}, []);
    return (
      <main>
        <>
  {/*  */}
  {/*  */}
  {/*  */}
  {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" /> */}
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

  <div id="svg_wrap" />
  <h1>Join as a Candidate!</h1>
  <section>
    <p>Personal information</p>
    <form id="myForm1">
      {/*   <label for="hi">First Name<span class="required"></span>: </label>
<input type="text" name="hi" class="required" placeholder="First Name" required/> */}
      <div className="input-container input-required">
        <label className="" htmlFor="input_label">
          First Name<font color="red">*</font>
        </label>
        <input
          type="text"
          className="full-width"
          id="input_label"
          placeholder="Jeffrey"
          required=""
        />
      </div>
      <div className="input-container input-required">
        <label htmlFor="input_label">
          Surname<font color="red">*</font>
        </label>
        <input
          type="text"
          className="full-width"
          id="input_label"
          placeholder="Bezoos"
          required=""
        />
      </div>
      <div className="input-container input-required">
        <label htmlFor="input_label">
          Gender<font color="red">*</font>
        </label>
        <input
          type="text"
          className="full-width"
          id="input_label"
          placeholder="This will be radio input"
        />
      </div>
      <div className="input-container input-required">
        <label htmlFor="input_label">
          Birthdate<font color="red">*</font>
        </label>
        <input
          type="date"
          className="full-width"
          id="input_label"
          placeholder="Birthdate"
        />
      </div>
      {/* <input type="text" name="hi" placeholder="First name" required/> */}
      {/*   <input type="text" placeholder="Surname" required />
  <input type="date" placeholder="Birthdate" required />
  <input type="text" placeholder="Insurance number" /> */}
    </form>
  </section>
  <section>
    <p>Location</p>
    <form id="myForm2">
      <div className="input-container input-required">
        <label className="" htmlFor="input_label">
          Address<font color="red">*</font>
        </label>
        <input
          type="text"
          className="full-width"
          id="input_label"
          placeholder="123 Sesame St"
          required=""
        />
      </div>
      {/*   	<label class="" for="input_label">Address<font color=red>*</font></label>

  <div class="input-container">
<div class="autocomplete-containerr" id="autocomplete-containerr"></div>
</div> */}
      <div className="input-container input-required">
        <label htmlFor="input_label">
          Describe this address<font color="red">*</font>
        </label>
        <input
          type="text"
          className="full-width"
          id="input_label"
          placeholder="Homeless shelter you can find me at"
          required=""
        />
      </div>
      {/*   <input type="text" placeholder="Street" />
  <input type="text" placeholder="City" />
  <input type="text" placeholder="Postcode" /> */}
    </form>
  </section>
  <section>
    <form id="myForm3">
      <p>Contact information</p>
      <div className="input-container input-required">
        <label htmlFor="input_label">
          Email or Phone<font color="red">*</font>
        </label>
        <input
          type="text"
          className="full-width"
          id="email_input"
          placeholder="example@gmail.com/123-456-7890"
          required=""
        />
      </div>
    </form>
  </section>
  <section>
    <p>Application</p>
    <form id="myForm4">
      <div className="input-container input-required">
        <label htmlFor="input_label">
          Bio<font color="red">*</font>
        </label>
        <textarea
          name="tweet"
          className="full-width"
          id="textbox"
          rows={10}
          cols={60}
          placeholder="The more you write about yourself here the better! Write about your interests, previous jobs, and anything else that you think is important."
          required=""
          defaultValue={""}
        />
        {/* <textarea id="input_label" minlength="100" ></textarea> */}
        <span id="char_count" style={{ float: "right" }}>
          0/100
        </span>
      </div>
      <br />
      <div className="input-container input-required">
        <label htmlFor="input_label">Resume</label>
        <input
          type="file"
          title=" "
          className="full-width"
          id="input_label"
          style={{}}
        />
      </div>
    </form>
  </section>
  <section>
    <form id="myForm5">
      <p>General condtitions</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <br />
      <div className="input-container input-required">
        <input defaultValue={0} id="checkbox" type="checkbox" />
        <label htmlFor="checkbox" style={{ float: "right", marginRight: 75 }}>
          By checking this box
          <br /> you agree to the above
        </label>
      </div>
    </form>
  </section>
  <button className="button" id="prev">
    ← Previous
  </button>
  <button className="button" id="next">
    Next →
  </button>
  <button className="button" id="submit">
    Agree and send application
  </button>
</>

      </main>
     )
}
