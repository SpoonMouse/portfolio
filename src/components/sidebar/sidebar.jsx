import './sidebar.css';
import Links from '../links/links.jsx'

function Sidebar() {
  return (
    <div className='port__sidebar'>
      <div className='links'>
        <Links/>
      </div>
      <div className='port__sidebar-container'>
        <div className='port__sidebar-container_content'>
         <a href="#about"><h1 className='about'>about</h1></a>
         <a href="#projects"><h1 className='projects'>projects</h1></a> 
        </div>
      </div>
    </div>
  );
}

export default Sidebar;