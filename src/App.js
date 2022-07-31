import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Members from './pages/Members';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Marketing from './pages/Marketing';
import Consulting from './pages/Consulting';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/members' component={Members} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
