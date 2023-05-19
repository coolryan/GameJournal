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
      <br/>
      <div className="contactForm">
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <br/>
      <div className="contactForm">
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <br/>
      <div className="contactForm">
        <textarea placeholder="Your message" name="message" required />
      </div>
      <br/>
      <div className="contactForm">
        <button className="submitbtn" type="submit">
          Send a message
        </button>
      </div>
    </form>
  );
};
  
export default Contact;