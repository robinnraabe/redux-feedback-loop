import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom'; 
import './App.css';
import Home from '../Home/Home.jsx';
import FeelingForm from '../FeelingForm/FeelingForm.jsx';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm.jsx';
import SupportForm from '../SupportForm/SupportForm.jsx';
import CommentForm from '../CommentForm/CommentForm.jsx';
import Review from '../Review/Review.jsx';


function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/feeling'>
          <FeelingForm />
        </Route>
        <Route exact path='/understanding'>
          <UnderstandingForm />
        </Route>
        <Route exact path='/support'>
          <SupportForm />
        </Route>
        <Route exact path='/comments'>
          <CommentForm />
        </Route>
        <Route exact path='/review'>
          <Review />
        </Route>
      </Router>
    </div>
  );
}

export default App;
