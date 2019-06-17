import React from 'react';

import './Button.scss';

const Button = (props) => {
  const { text, additionalClasses, click } = props;

  return (
    <button className={`button ${additionalClasses ? additionalClasses : ''}`} onClick={click}>
      {text}
    </button>
  )
}

export default Button;
