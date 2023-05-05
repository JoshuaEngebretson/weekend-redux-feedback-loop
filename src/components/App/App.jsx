import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';

// Import Components
import CommentsPage from '../FeedbackComponents/CommentsPage/CommentsPage';
import FeelPage from '../FeedbackComponents/FeelPage/FeelPage';
import SupportPage from '../FeedbackComponents/SupportPage/SupportPage';
import UnderstandPage from '../FeedbackComponents/UnderstandPage/UnderstandPage';
import ReviewFeedbackPage from '../FeedbackComponents/ReviewFeedbackPage/ReviewFeedbackPage';
import SubmissionSuccessPage from '../FeedbackComponents/SubmissionSuccessPage/SubmissionSuccessPage';
import AdminView from '../Admin/AdminView';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios({
      type: 'GET',
      url: '/feedback'
    }).then ((response) => {
      const feedbackResultsArray = response.data;
      dispatch({
        type: 'SET_FEEDBACK_RESULTS',
        payload: feedbackResultsArray
      })
    }).catch((err) => {
      console.log('Error:', err);
    })
  }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path='/'>
          <FeelPage />
        </Route>
        <Route exact path='/understanding'>
          <UnderstandPage />
        </Route>
        <Route exact path='/support'>
        <SupportPage />
        </Route>
        <Route exact path='/comments'>
          <CommentsPage />
        </Route>
        <Route exact path='/review/feedback'>
          <ReviewFeedbackPage />
        </Route>
        <Route exact path='/success'>
          <SubmissionSuccessPage />
        </Route>
        <Route exact path='/admin'>
          <AdminView getFeedback={getFeedback}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
