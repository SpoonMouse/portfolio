import './projects.css';
import Pcard from "../../components/pcard/pcard.jsx";
import { gptProject} from './imports'
import { faGithub, faReact, faJs} from '@fortawesome/free-brands-svg-icons'


function Projects() {
  return (
    <div className='port__projects' id='projects'>
      <div className='port__projects-header'>
        <h1>projects</h1>
      </div>
      <div className='port__projects-pcard'>
          <Pcard className="pcard" imgUrl={gptProject} projectTitle='GPT3 Figma Design' projectText="" projectLogo={faGithub} projectLogo2={faJs} projectLogo3={faReact}/>
          <Pcard className="pcard" imgUrl={gptProject} projectTitle='GPT3 Figma Design' projectText="" projectLogo={faGithub} projectLogo2={faJs} projectLogo3={faReact}/>
          <Pcard className="pcard" imgUrl={gptProject} projectTitle='GPT3 Figma Design' projectText="" projectLogo={faGithub} projectLogo2={faJs} projectLogo3={faReact}/>
          <Pcard className="pcard" imgUrl={gptProject} projectTitle='GPT3 Figma Design' projectText="" projectLogo={faGithub} projectLogo2={faJs} projectLogo3={faReact}/>
      </div>
    </div>
  );
}

export default Projects