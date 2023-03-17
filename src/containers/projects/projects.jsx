import './projects.css';
import Pcard from "../../components/pcard/pcard.jsx";
import { gptProject, typescriptLogo} from './imports'



function Projects() {
  return (
    <div className='port__projects'>
      <div className='port__projects-header'>
        <h1>projects</h1>
      </div>
      <div className='port__projects-pcard'>
          <Pcard className="pcard" imgUrl={gptProject} projectTitle='GPT3 Figma Design' projectText="" projectLogo={typescriptLogo}/>
          <Pcard className="pcard" imgUrl={gptProject} projectTitle='GPT3 Figma Design' projectText="" projectLogo={typescriptLogo}/>
          <Pcard className="pcard" imgUrl={gptProject} projectTitle='GPT3 Figma Design' projectText="" projectLogo={typescriptLogo}/>
          <Pcard className="pcard" imgUrl={gptProject} projectTitle='GPT3 Figma Design' projectText="" projectLogo={typescriptLogo}/>
      </div>
    </div>
  );
}

export default Projects