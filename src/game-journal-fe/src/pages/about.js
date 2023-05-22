import React from "react";
  
const About = () => {
  return (
    <div className="aboutPage">
      <h1>About Game Journal</h1>
  		<p>
  			Game Journal is about content creators and gamers to upload and review their favortie video games on online.<br/>
  		</p>
      <br/>
      <p>
        My name is Ryan Setaruddin and am entry-level software developer.
        I graduated and earned Bachlors of Science in Computer systems and information from Farmingdale State College.
        I learned how to be programmer and now am looking for programming job in New York.
        I have done few group projects from Farmingdale State College like e.g: Align web application, collaborative with five other classmates on a mentor web app to connect student mentors and student mentees with each other along with helpful resources.
      </p>
      <button className="linkbtn">
        <a href="https://github.com/coolryan/GameJournal">View Source Code</a>
      </button>
      <button className="linkbtn">
        <a href="https://www.linkedin.com/in/ryan-setaruddin/">View<img src="https://static.vecteezy.com/system/resources/previews/017/339/624/original/linkedin-icon-free-png.png" alt="LinkedIn"/></a>
      </button>
    </div>
  );
};
  
export default About;