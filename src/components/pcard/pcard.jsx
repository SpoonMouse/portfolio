import './pcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Pcard({imgUrl, projectTitle, projectText, projectLogo}) {
  return (
    <div className='port__pcard'>
      <div className='port__pcard-image'>
        <img src={imgUrl} alt="project" />
      </div>
        <div className='port__pcard-content'>
            <div className='port__card-content_logos'>
                <FontAwesomeIcon icon={projectLogo}/>
                <FontAwesomeIcon icon={projectLogo}/>
                <FontAwesomeIcon icon={projectLogo}/>
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