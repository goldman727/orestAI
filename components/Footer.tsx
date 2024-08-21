import React from 'react';
import componentsConstants from './components.Constants';

const Footer: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <hr className='hr-class'></hr>
      <h4>{componentsConstants.footer.title}</h4>
    </div>
  );
}

export default Footer;