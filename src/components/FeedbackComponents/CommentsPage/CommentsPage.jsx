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
        placeholder='Optional'
        value={feedbackComments}
        onChange={event => setFeedbackComments(event.target.value)}
      >
        {/* This is where the user will type their comments. */}
      </textarea>
      <button onClick={dispatchSendToReview}>Next</button>
    </>
  )
}

export default CommentsPage;