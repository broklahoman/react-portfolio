import React from 'react';

export default () => {
  return (
    <div>
    <div>

  <header id="masthead">
    <div className="container">
      <a href="/" id="logo">Jonathan</a>
      <nav>
        <a href="index">About</a>
        <a href="portfolio">Portfolio</a>
        <a href="contact">Contact</a>
      </nav>
    </div>
  </header>

  <div id="main-container" className="container">
    <section className="main-section">
      <h1>Portfolio</h1>

      <div className="work">
        <img src="assets/images/technics-q-c-640-480-1.jpg" alt="hangman"/>

        <h3>Hangman</h3>
      </div>
      <div className="work">
        <img src="assets/images/technics-q-c-640-480-2.jpg" alt="RPG Game"/>

        <h3>RPG Game</h3>
      </div>
      <div className="work">
        <img src="assets/images/technics-q-c-640-480-5.jpg" alt="Trivia Game"/>

        <h3>Trivia Game</h3>
      </div>
      <div className="work">
        <img src="assets/images/technics-q-c-640-480-7.jpg" alt="Rutgers Info Widget"/>

        <h3>Rutgers Info Widget</h3>
      </div>
      <div className="work">
        <img src="assets/images/technics-q-c-640-480-9.jpg" alt="Rock Paper Scissors"/>

        <h3>Rock Paper Scissors</h3>
      </div>

    </section>

    <section className="sidebar">
      <div id="connect">
        <h2>Connect with Me</h2>

      <a href="https://github.com/broklahoman"><img src="assets/images/github-128.png" className="social" alt="GitHub" /></a>
	        <a href="https://www.linkedin.com/in/jonathan-harris-3b431535/"><img src="assets/images/linkedin-128.png" className="social" alt="LinkedIn" /></a>
	        <a href="https://stackoverflow.com/users/8261209/jonathan-harris"><img src="assets/images/stackoverflow-128.png" className="social" alt="Stack Overflow" /></a>
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
