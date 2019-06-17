import React from 'react';

import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import ErrorModal from './components/UI/ErrorModal/ErrorModal';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <ErrorModal />
    </>
  )
}

export default App;
