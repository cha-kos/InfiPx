import React from 'react';
import Header from './header/header_container';
import SessionForm from './session/session_form_container';
import PhotoShow from './photo/photo_show_container';
import User from './user/user_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer/footer'
import PhotoIndex from './photo/photo_index_container';

const App = () => (
  <div>
        <ProtectedRoute path='/' component={PhotoIndex}/>
        <AuthRoute path="/login" component={SessionForm} />
        <AuthRoute path="/signup" component={SessionForm} />
        <Route exact path='/photos/:id' comonent={PhotoShow} />
        <Route exact path='/users/:id' component={User} />
      <Footer/>
  </div>
);

export default App;
// <Route exact path="/" component={SessionFormContainer} />
