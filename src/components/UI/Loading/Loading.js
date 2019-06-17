import React from 'react';

import './Loading.scss';

import Logo from '../../../assets/logo.svg';

const Loading = () => {
  return (
    <img src={Logo} alt="Loading..." className="loading" />
  )
}

export default Loading;
