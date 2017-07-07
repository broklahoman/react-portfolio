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
    <section className="main-section">
      <h1>Contact</h1>

      <form id="contact-form">
        <ul>
          <li>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder=" " required="required"/>
          </li>
          <li>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="holla@meplease.com" required="required"/>
          </li>
          <li>
            <label htmlFor="message">Get in touch</label>
            <textarea id="message" name="message" required="required"></textarea>
          </li>
        </ul>
        <input type="submit"/>
      </form>

    </section>

    <section className="sidebar">
      <div id="connect">
        <h2>Connect with Me</h2>

         <a href="#"><img src="assets/images/github-128.png" className="social" alt="GitHub" /></a>
	        <a href="#"><img src="assets/images/linkedin-128.png" className="social" alt="LinkedIn" /></a>
	        <a href="#"><img src="assets/images/stackoverflow-128.png" className="social" alt="Stack Overflow" /></a>
      </div>
    </section>
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
