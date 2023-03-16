import './links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Links() {

  return (
    <div className='port__links-container'>
      <div className='port__links-content'>
        <div className='port__links-content_cv'>
       <a href="https://drive.google.com/file/d/1M-OPxJEnRE8k6663U9vRKqLgT2uwnA-3/view?usp=share_link">resume</a>
        </div>
        <div className='port__links-content_socialbtns'>
        <a href="https://github.com"><FontAwesomeIcon className='github' icon={faGithub} /></a>
        <a href="https://linkedin.com"><FontAwesomeIcon className='linkedin' icon={faLinkedin} /></a>
        </div>
      </div>
    </div>
  );
}

export default Links;