import React from 'react';
import "../styles/General.css"

const Home = () => {
  return (
    <div className='home-container '>
      <div className='container '>
        <header>
          <div className='logo'>
            <img src='logo.png' alt='Logo' />
          </div>
          <nav>
            <ul>
              <li><a href='mailto:ian@example.com'>M</a></li>
              <li><a href='https://github.com/ian'>G</a></li>
              <li><a href='portfolio.html'>P</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section className='welcome-section'>
            <h1>Welcome.</h1>
            <p>My name is Ian Dunkerley, I'm a front-end developer based in Torquay, Devon, UK. I have developed many types of front-ends from well know DJ applications to Ecommerce booking platforms.</p>
            <p>I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.</p>
          </section>
          <section className='projects-section'>
            <h2>Projects</h2>
            <ul>
              <li><a href='/'>Domposer</a></li>
              <li><a href='/'>Bay.js</a></li>
              <li><a href='/'>Cookiemunch</a></li>
              <li><a href='/'>Screen time converter</a></li>
              <li><a href='/'>inline.svg</a></li>
            </ul>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 dunks1980.com</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
