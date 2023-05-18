import React, {useState} from 'react';

const FORM_ENDPOINT = "";
  
const Contact = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {

    return (
      <div>
        <div className="thankYouText">Thank You!</div>
        <div className="keepIntouchSoonText">We'll be in touch soon.</div>
      </div>
    );
  }

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank">
      <div className="contactForm">
        <input type="text" placeholder="Your name" name="name" className="inputName" required />
      </div>
      <div className="contactForm">
        <input type="email" placeholder="Email" name="email" className="inputEmail" required />
      </div>
      <div className="contactForm">
        <textarea placeholder="Your message" name="message" className="inputMessage" required />
      </div>
      <div className="contactForm">
        <button className="submitbtn" type="submit">
          Send a message
        </button>
      </div>
    </form>
  );
};
  
export default Contact;