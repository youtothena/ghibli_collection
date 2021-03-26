import React from 'react';
import Films from './Films';
import { HashRouter, Route } from 'react-router-dom';
import Detail from './Detail';

const App = () => {
  return(
    <>
      <HashRouter>
          <Route path='/' exact={true} component={Films} />
          <Route path='/detail' component={Detail} />
      </HashRouter>
    </>
  );
};

export default App;

