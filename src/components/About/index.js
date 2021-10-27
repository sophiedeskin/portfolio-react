import React from 'react';
import './about.css'
import profileImage from '../../assets/profile/profileImage.png';


function About() {
  return (
    <section className="relative pt-12">
    <div className="items-center flex flex-wrap">
      <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
      <img src={profileImage} alt="profile pic"></img>
      </div>
      <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
        <div className="md:pr-12">
          <h3 className="text-3xl font-semibol text-gray-700">About Me</h3>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Hello, my name is Sophie and welcome to my profile page!
          </p>
          <br/>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
           I'm a web developer based out of Scottsdale, AZ.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;