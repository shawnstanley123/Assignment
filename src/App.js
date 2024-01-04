import {data1} from "./data.js"
import './App.css';
import {useState} from 'react'
function App() {
 
  return (
    <div className="App">
      <section className='banner'>
         <img src="https://live.staticflickr.com/8856/28393192301_dcbece8118_b.jpg" width="100%" height="460px" classname="image-container"/>
         <div className="overlay-text">
          <h3>{data1[0].instructor.name}</h3>
          <h1>{data1[0].course.title}</h1>
         </div>
      </section>
      <section className='main'>
        <div className="category-bar">
          <ul className='ct'>
            <li>ABOUT</li>
            <li>INSTRUCTOR</li>
            <li>REVIEWS</li>
          </ul>
        </div>
        <div className="content-section">
          <h1>About the course</h1>
          <p>{data1[0].about_instructor.html_content}
          </p>
          <h1>What to expect from the course</h1>
          <ul className='wte'>
          <li>Learn to mange your relationships</li>
          <li>Better communication</li>
          <li>Time management</li>
          <li>Forgiveness</li>
          </ul>
          <h1>Key topics covered</h1>
          <p></p>
          <ul className='wte'>
            <li><span><strong>10 written and audio sessions</strong> ,guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</span></li>
          <li><strong>Intuitive exercises and homework</strong> walk you through the energies and values of numbers and number sequences so you can become your own authority.</li>
          <li><strong>Handy reference</strong> to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.</li>
          <li><strong>Expert techniques</strong> for manifestation offer simple ways to use numbers to co-create with the universe.</li>
          </ul>
        </div>
        <div className="ct2">
        <h1>About the Instructor</h1>
        <div className="box">
          <img src="https://live.staticflickr.com/8856/28393192301_dcbece8118_b.jpg" className='img2' width="250px" height="250px"/>
          <p>Lorem ipsum text about managing relationships, communication, time management, and forgiveness.Lorem ipsum text about managing relationships, communication, time management, and forgiveness.Lorem ipsum text about managing relationships, communication, time management, and forgiveness.</p>
          <p>Lorem ipsum text about managing relationships, communication, time management, and forgiveness.Lorem ipsum text about managing relationships, communication, time management, and forgiveness.Lorem ipsum text about managing relationships, communication, time management, and forgiveness.</p>
        </div>
        <div className="socials">
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
            <li>Instagram</li>
            </ul>
        
        </div>
        </div>
        </section>
        <section className='footer'>
          <h1>{data1[0].testimonial.text}</h1>
        <div className='f1'>
        <img src="https://live.staticflickr.com/8856/28393192301_dcbece8118_b.jpg" className='img2' width="50px" height="50px"/>
        <div className="a1">
          <p className='name'>{data1[0].testimonial.reviewer_name}</p>
          <p>{data1[0].testimonial.reviewer_designation}</p>
        </div>
        </div>
        </section>
        <section className='side'>
          <h3>Course fees</h3>
          <h1>₹{data1[0].course.fee.amount}</h1>
          <h3>What's included</h3>
          
    <ul className='courselisting'>
      <li>5 on-demand videos</li>
      <li>2 livestream sessions</li>
      <li>Live Q&A sessions with Nityanand Charan Das</li>
      <li>An active Whatsapp community</li>
    </ul>
    <button><span>Register today</span></button>
        </section>
    </div>
  );
}

export default App;
