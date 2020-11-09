import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "50%", height: "50%" }} alt="cover" />
      <div className="my-2">
        <p>
        Organized, problem-solving-oriented individual with more than 5 years experience in the IT field. Firm believer that documentation is key. Specialized in care, speed, and accuracy. Strong written and verbal communication skills in both English and Spanish. 
         </p>
        </div> 
        {/* <Footer></Footer>    */}
      </section>
  );
}

export default About;



