import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer/footer';

const App = () => (
  <div>
    <header>
    </header>
        <ProtectedRoute path='/' component={GreetingContainer}/>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      <Footer/>
  </div>
);

export default App;
// <Route exact path="/" component={SessionFormContainer} />
