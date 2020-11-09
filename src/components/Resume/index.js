import React from 'react';
import codeImage from '../../assets/cover/made-with-code.png';
// import Footer from '../Footer';

function Resume() {
  return (
    <section className="my-5">
      <img src={codeImage} className="codeImage" style={{ width: "20%", height: "20%" }} alt="cover" />
      <div className="resume">
      <p>
      View my: <a href="https://www.linkedin.com/in/jose-jasso-it/">Linkedin</a>
      <a href="https://github.com/CucciPro/GreatREACTionPortfolio/blob/master/assets/docs/Resume.pdf?raw=true" class="link">Download Resume</a>

      <h2>Proficiencies</h2>
                <p>HTML, CSS (Bootstrap, Foundation, HandleBars), JavaScript, jQuery, React.js, Angular.js, IndexedDB</p>
                <p>Node.js, Express.js, SQL, Sequelize, NoSQL, Python, APIs, Templating</p>
        </p>
      </div>
      {/* <Footer></Footer>  */}
    </section>
  );
}

export default Resume;

