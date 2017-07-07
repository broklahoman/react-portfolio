import React from 'react';

export default () => {
  return (
  	<div>
	    <div className = "wrapper">
		  <header id="masthead">
		    <div className="container">
		      <a href="/" id="logo">Jonathan Harris</a>
		      <nav>
		        <a href="/">About</a>
		        <a href="portfolio">Portfolio</a>
		        <a href="contact">Contact</a>
		      </nav>
		    </div>
		  </header>

		  <div id="main-container" className="container">
		    <div className="main-section">
		      <h1>About Me</h1>

	      <img src="assets/images/cat.jpg" className="auth-image" alt="Your Name" />

	      <p>I am a web developer looking to put my new  skills to use building and contributing to exciting e-commerce projects.</p>

	      

	    </div>

	    <div className="sidebar">
	      <div id="connect">
	        <h2>Connect with Me</h2>

	        <a href="https://github.com/broklahoman"><img src="assets/images/github-128.png" className="social" alt="GitHub" /></a>
	        <a href="#"><img src="assets/images/linkedin-128.png" className="social" alt="LinkedIn" /></a>
	        <a href="#"><img src="assets/images/stackoverflow-128.png" className="social" alt="Stack Overflow" /></a>
	      </div>
	    </div>
	  </div>

	  <footer>
	    <div className="container">
	      Copyright &copy; 2017 Jonathan Harris
	    </div>
	  </footer>
	</div>  
	</div>
  )
}
