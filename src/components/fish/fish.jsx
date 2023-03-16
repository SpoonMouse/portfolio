import './fish.css';
import fishImage from './fish.png';
import 'animate.css';

function Fish() {
  return (
    <div>
      <img className='fishA animate__animated animate__fadeInRight' src={fishImage} alt='fish'/>
      <img className='fishB animate__animated animate__fadeInRight' src={fishImage} alt='fish'/>
      <img className='fishC animate__animated animate__fadeInRight' src={fishImage} alt='fish'/>
      <img className='fishD animate__animated animate__fadeInRight' src={fishImage} alt='fish'/>
      <img className='fishE animate__animated animate__fadeInRight' src={fishImage} alt='fish'/>
      <img className='fishF animate__animated animate__fadeInRight' src={fishImage} alt='fish'/>
    </div>
  );
}

export default Fish;