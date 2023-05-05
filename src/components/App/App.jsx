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
    })
  }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <FeelPage />
      <UnderstandPage />
      <SupportPage />
      <CommentsPage />
      <ReviewFeedbackPage />
      <SubmissionSuccessPage />
      <AdminView getFeedback={getFeedback}/>
    </div>
  );
}

export default App;
