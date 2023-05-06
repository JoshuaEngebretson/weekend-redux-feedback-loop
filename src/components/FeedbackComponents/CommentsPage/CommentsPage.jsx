import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";
import { TextField } from "@mui/material";


function CommentsPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [feedbackComments, setFeedbackComments] = useState('')

  const dispatchSendToReview = (event) =>{
    event.preventDefault();
    dispatch({
      type: 'SET_FEEDBACK_COMMENTS',
      payload: feedbackComments
    })
    history.push('/review/feedback')
  }

  return (
    <>
      <h1>Any comments you want to leave?</h1>
      <form>
        <TextField
          label='Enter Comments Here'
          helperText='(Optional)'
          value={feedbackComments}
          onChange={event => setFeedbackComments(event.target.value)}
          variant='standard'
          sx = {{width: 225, left:120, mt:-1}}
          multiline
          maxRows={Infinity}
        />
        <button
          className='next-btn'
          onClick={dispatchSendToReview}
        >
          Next
        </button>
      </form>
    </>
  )
}

export default CommentsPage;