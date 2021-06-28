import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  // hook to handle error state
  const [errorMessage, setErrorMessage] = useState('');
  // destructure formState object into it's name properties
  const { name, email, message } = formState;

  const handleChange = (evt) => {
    if (evt.target.name === 'email') {
      const isValid = validateEmail(evt.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!evt.target.value.length) {
        setErrorMessage(`${evt.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!errorMessage) {
      setFormState({ [evt.target.name]: evt.target.value });
      console.log(formState);
    }
  };

  //   function handleChange(evt) {
  //     SetFormState({ ...formState, [evt.target.name]: evt.target.value });
  //     console.log(formState);
  //   }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Preferred name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
