import './pcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Pcard({imgUrl, projectTitle, projectText, projectLogo, projectLogo2, projectLogo3}) {
  return (
    <div className='port__pcard'>
      <div className='port__pcard-image'>
      </div>
        <div className='port__pcard-content'>
            <div className='port__pcard-content_logos'>
              <div className='github1'><FontAwesomeIcon style= {{height: '2rem'}} icon={projectLogo}/></div>
              <div className='github2'><FontAwesomeIcon style= {{height: '2rem'}} icon={projectLogo2}/></div>
              <div className='github3'><FontAwesomeIcon style= {{height: '2rem'}} icon={projectLogo3}/></div>
            </div>
            <div className='port__pcard-content_btns'>
              <a href="google.com">visit</a>
              <a href="google.com">code</a>
            </div>
            <div className='port__pcard-content_text'>
              <h3>{projectTitle}</h3>
              <p>{projectText}</p>
            </div>
        </div>     
    </div>
  );
}

export default Pcard;