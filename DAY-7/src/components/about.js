import React from 'react';
import './about.css';
import Nav from './nav';
const About = () => {
  return (
    <div className='home'>
    <Nav />
    <div className="ground">
    <div className="contact-container">
    <div className='content-ffn'>
    <h1>About us</h1>
    <div className='photo'>
    
    </div>
    </div>
    <div className='about-cs'>
     <p>
     
Welcome to our grocery content! At our platform, we aim to provide you with comprehensive 
and informative content related to groceries, shopping tips, meal planning, and everything 
you need to know to make the most of your grocery shopping experience. Whether you're a seasoned 
shopper or a beginner in the world of groceries, our content is designed to help you make smart choices, 
save money, and eat healthily.{"\n"}
     </p>
     <p>{"\n"}
     Our team of experienced writers and researchers are passionate about all things related
      to groceries. We understand that grocery shopping can sometimes be overwhelming with 
      the multitude of options available, changing food trends, and the desire to make
       sustainable and ethical choices. That's why we're here to simplify the process 
       and offer valuable insights that will make your grocery trips more efficient and enjoyable.
     </p>
    </div>
    </div>
    </div>
    </div>
  );
}

export default About;