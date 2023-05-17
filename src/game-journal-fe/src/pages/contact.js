import React from 'react';
  
const Contact = () => {
  return (
    <div>
     <form id="contact-form" /*onSubmit={this.handleSubmit.bind(this)}*/ method="POST">
       <div className="form-goup">
         <label>Name</label>
         <input type="text" className="form-control" />
       </div>
       <div className="form-goup">
         <label>Email</label>
         <input type="email" className="form-control" aria-describedby=""emailhelp/>
       </div>
       <div className="form-goup">
         <label>Message</label>
         <textarea className="form-control" rows="5"></textarea>
       </div>
       <button type="submit" className="btn btn-primary">Submit</button>
     </form>
    </div>
  );
};
  
export default Contact;