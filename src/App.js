import React from 'react';
import Films from './Films';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Detail from './Detail';

const App = () => {
  return(
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path='/' exact={true} component={Films} />
            <Route path='/detail' component={Detail} />
          </Switch>
      </HashRouter>
    </>
  );
};

export default App;

