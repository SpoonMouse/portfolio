import './home.css';
import Fish from '../../components/fish/fish.jsx';
import { Links } from '../../components';
function Home() {
  return (
    
    <div className='port__home'>   
      <div className='port__home-name'>
            <h2>Dominic Tracy</h2>
      </div>
        <div className='port__home-container'>
          <h1>a react <span>developer</span></h1>
          <h4>adaptability is my specialty</h4>
        </div>
     
    </div>
  );
}

export default Home