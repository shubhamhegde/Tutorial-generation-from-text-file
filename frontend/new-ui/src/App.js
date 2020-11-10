import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import ppt from './components/pages/ppt';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/tutorial_gen' component={Products} />
          <Route path='/login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/profile' component={Products} />
          <Route path='/assessments' component={Products} />
          <Route path='/student_assessments' component={Products} />
          <Route path='/ppt' component={ppt}/>
          <Route path='/ppt/:tutorial_id' component={ppt}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;