import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../components/signcss2.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SignupFrames () {
    return (
      <main>
        <>
  {/*  */}
  {/*  */}
  {/*  */}
  {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" /> */}
  <header></header>
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
