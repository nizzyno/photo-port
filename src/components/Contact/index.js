import React from 'react';

function ContactForm() {
  return (
    <section>
      <h1>Contact me</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder="Preferred name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" placeholder="Your email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
