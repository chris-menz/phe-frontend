import React from 'react';

export default MainPage(){
    return (
       <nav>
            <a href = "index.html">Project Homeless Employment</a>
            <a href = "about.html">About</a>
            <a href ="explore.html">Explore</a>
        </nav>
        <div> <!--- main content --->
            <h1> PROJECT HOMELESS EMPLOYMENT</h1>
            <p> This is the main page of Project Homeless Employment. </p>
            <p> We are using software to help give homeless people jobs. </p>

            <h1>Your Mom</h1>
            <p id="msg">Tasks????</p>
            <ul>
                <li class="list">Check admin</li>
                <li class="list">Fix O2</li>
                <li> Do your mom</li>
            </ul>

            <div>
                <button class="btn">Dark</button>
            </div>
            <script src="app.js"></script>
            <noscript>You need to enable JavaScript to view the full site.</noscript>

            <p>THIS PAGE IS UNDER CONSTRUCTION!!!</p>
        </div>
	);
};