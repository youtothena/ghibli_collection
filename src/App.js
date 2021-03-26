import React from 'react';
import Films from './Films';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Detail from './Detail';

const App = () => {
  return(
    <>
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Films} />
          <Route path='/detail' component={Detail} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

