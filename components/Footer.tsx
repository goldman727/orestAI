import React from 'react';
import componentConstants from './constants';

const Footer: React.FC = () => {
  return (
    <div>
      <hr></hr>
      <h4>{componentConstants.footer.copyright}</h4>
    </div>
  );
}

export default Footer;