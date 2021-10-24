import React from 'react';
import './about.css'
import profileImage from '../../assets/profile/profileImage.png';


function About() {
  return (
    <section class="relative pt-12">
    <div class="items-center flex flex-wrap">
      <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
      <img src={profileImage} alt="profile pic"></img>
      </div>
      <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
        <div class="md:pr-12">
          <h3 class="text-3xl font-semibol text-gray-700">About Me</h3>
          <p class="mt-4 text-lg leading-relaxed text-gray-700">
            The extension comes with three pre-built pages to help you get
            started faster. You can change the text and images and you're
            good to go.
          </p>
          <br/>
          <p class="mt-4 text-lg leading-relaxed text-gray-700">
            The extension comes with three pre-built pages to help you get
            started faster. You can change the text and images and you're
            good to go.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;