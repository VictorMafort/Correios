import 'react-native-gesture-handler';
import React from 'react';
import Precos from './src/pages/Precos'
import Main from './src/pages/Main';
import Header from './src/components/Header';

const App = () => {

  return(
    <React.Fragment>
      <Header />
      <Main />
      </React.Fragment>
  );
};

export default App;