import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Import Components
import CommentsPage from '../FeedbackComponents/CommentsPage/CommentsPage';
import FeelPage from '../FeedbackComponents/FeelPage/FeelPage';
import SupportPage from '../FeedbackComponents/SupportPage/SupportPage';
import UnderstandPage from '../FeedbackComponents/UnderstandPage/UnderstandPage';
import ReviewFeedbackPage from '../FeedbackComponents/ReviewFeedbackPage/ReviewFeedbackPage';
import EditFeedbackPage from '../FeedbackComponents/EditFeedbackPage/EditFeedbackPage';
import SubmissionSuccessPage from '../FeedbackComponents/SubmissionSuccessPage/SubmissionSuccessPage';
import AdminView from '../Admin/AdminView';


function App() {

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
        <Route exact path='/edit/feedback'>
          <EditFeedbackPage />
        </Route>
        <Route exact path='/success'>
          <SubmissionSuccessPage />
        </Route>
        <Route exact path='/admin'>
          <AdminView />
        </Route>
      </Router>
    </div>
  );
}

export default App;
