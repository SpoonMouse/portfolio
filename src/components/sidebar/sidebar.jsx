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
          <h1 className='about'>about</h1>
          <h1>projects</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;