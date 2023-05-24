import React, {useState} from 'react';

const FORM_ENDPOINT = "";
  
const Contact = () => {

  const [status, setStatus] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      console.log(response.json());
      return response.json();

    }).then(() => setStatus("We'll be in touch soon.")).catch((err) => setStatus(err.toString()));
  };

  if (status) {

    return (
      <div>
        <div className="contactForm">Thank You!</div>
        <div className="contactForm">{status}</div>
      </div>
    );
  }

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
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