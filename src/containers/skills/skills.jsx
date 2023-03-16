import './skills.css';
import { nodeLogo, reactLogo, typescriptLogo } from './imports';
function Skills() {
  return (
    <div className='port__skills'>
       <div>
        <img className='node' src={nodeLogo} alt="" />
        <h1 className='port__skills-text'>Node.js</h1>
        </div>
        <div>
        <img className='react' src={reactLogo} alt="" />
        <h1 className='port__skills-text'>React.js</h1>
        </div>
        <div>
        <img className='ts' src={typescriptLogo} alt="" />
        <h1 className='port__skills-text'>Typescript</h1>
        </div>
   </div>
      
  );
}

export default Skills