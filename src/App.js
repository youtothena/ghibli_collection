import React from 'react';
import Films from './Films';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './Detail';

const App = () => {
  return(
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path='/' exact={true} component={Films} />
            <Route path='/detail' component={Detail} />
          </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

