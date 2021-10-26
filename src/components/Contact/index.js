import React, { useState } from 'react'
import './contact.css'
// const nodemailer = require("nodemailer");
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };

    return (
          <form id="contact-form" onSubmit={handleSubmit}>
  <div className="flex flex-wrap -mx-3 mb-15">
    <div className="w-full px-3">
            <br/>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" 
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        E-mail
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"             
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"             
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}>
            </textarea>
    </div>
  </div>
  <button className="py-2" type="submit">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-300 mr-3"><i class="far fa-paper-plane"></i></span>
            </div>
          </div>
        </button>
</form>   
    )
}

export default Contact;