import './OHIFLogo.css';

import { Icon } from '@ohif/ui';
import React from 'react';

function EspressoLogo() {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="header-brand"
      href="https://www.espressomedical.com"
    >
      <Icon name="ohif-logo" className="header-logo-image" />
      <div className="header-logo-text">Espresso Medical</div>
    </a>
  );
}

export default EspressoLogo;
