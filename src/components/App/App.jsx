import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home.jsx';
import FeelingForm from '../FeelingForm/FeelingForm.jsx';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm.jsx';
import SupportForm from '../SupportForm/SupportForm.jsx';
import CommentForm from '../CommentForm/CommentForm.jsx';
import Review from '../Review/Review.jsx';
import EndPage from '../EndPage/EndPage.jsx';
import Admin from '../Admin/Admin.jsx';

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback welcome</h1>
          <h4>All submissions are anonymous</h4>
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
        <Route exact path='/endpage'>
          <EndPage />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
