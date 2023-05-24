import React, {useState} from 'react';

const FORM_ENDPOINT = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox";
  
const Contact = () => {

  const [status, setStatus] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    };

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
    // It's likely a spam/bot request, so bypass it to validate via captcha
      if (response.status === 422) {
        Object.keys(injectedData).forEach((key) => {
          const el = document.createElement("input");
          el.type = "hidden";
          el.name = key;
          el.value = injectedData[key];

          e.target.appendChild(el);
        });

        e.target.submit();
        throw new Error("Please finish the captcha challenge");
      }

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

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