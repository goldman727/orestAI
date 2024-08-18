import React from 'react';
import componentConstants from './constants';

const Footer: React.FC = () => {
  return (
    <div style={{textAlign: 'center', margin:'50px'}}>
        <hr className='hr-class'></hr>
        <h4>{componentConstants.footer.copyright}</h4>
    </div>
  );
}

export default Footer;