import React from "react";
import {useNavigate} from "react-router-dom";

const About = () => {

  const navigate = useNavigate();

  return (
    <div className="aboutPage">
      <button className="linkbtn">
        <a href="https://github.com/coolryan/GameJournal">View Source Code
          <img src="https://cdn.icon-icons.com/icons2/2157/PNG/512/github_git_hub_logo_icon_132878.png" alt="GitHub"/>
        </a>
      </button>
      <button className="linkbtn">
        <a href="https://www.linkedin.com/in/ryan-setaruddin/">View
          <img src="https://static.vecteezy.com/system/resources/previews/017/339/624/original/linkedin-icon-free-png.png" alt="LinkedIn"/>
        </a>
      </button>
      <button className="linkbtn" onClick={()=>navigate(-1)}>Go Back Home</button>
      <h1>About Game Journal</h1>
  		<p>
  			Game Journal is about content creators and gamers to upload and review their favortie video games on online.<br/>
  		</p>
      <br/>
      <p>
        <span className="emphasized">
          My name is Ryan Setaruddin and am entry-level software developer.
          I graduated and earned Bachlors of Science in Computer systems and information from Farmingdale State College.
          I learned how to be programmer and now am looking for programming job in New York.
          I have done few group projects from Farmingdale State College like
          e.g: Align web application, collaborative with five other classmates on a mentor web app to connect student mentors
          and student mentees with each other along with helpful resources.
        </span>
      </p>
    </div>
  );
};
  
export default About