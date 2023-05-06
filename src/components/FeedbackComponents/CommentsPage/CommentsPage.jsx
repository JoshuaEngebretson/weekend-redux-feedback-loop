import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";

function CommentsPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [feedbackComments, setFeedbackComments] = useState('')

  const dispatchSendToReview = () =>{
    dispatch({
      type: 'SET_FEEDBACK_COMMENTS',
      payload: feedbackComments
    })
    history.push('/review/feedback')
  }

  return (
    <>
      <h1>Any comments you want to leave?</h1>
      <textarea 
        rows='4'
        cols='60'
        placeholder='Optional'
        value={feedbackComments}
        onChange={event => setFeedbackComments(event.target.value)}
      >
        {/* This is where the user will type their comments. */}
      </textarea>
      <div>
        <button className='next-btn' onClick={dispatchSendToReview}>Next</button>
      </div>
    </>
  )
}

export default CommentsPage;