import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import RequiredTextField from "../RequiredTextField/RequiredTextField";
import { TextField } from "@mui/material";

function ReviewFeedbackPage({getFeedback}) {

  const history = useHistory();
  const dispatch = useDispatch();
  const currentFeedback = useSelector(state => state.currentFeedback);

  const [editStatus, setEditStatus] = useState(false);

  const [feelingsInput, setFeelingsInput] = useState(currentFeedback.feelings);
  const [requiredFeelings, setRequiredFeelings] = useState(false);
  const feelingsLabel = 'Feelings?'

  const [understandingInput, setUnderstandingInput] = useState(currentFeedback.understanding);
  const [requiredUnderstanding, setRequiredUnderstanding] = useState(false);
  const understandingLabel = 'Understanding?'

  const [supportedInput, setSupportedInput] = useState(currentFeedback.supported);
  const [requiredSupported, setRequiredSupported] = useState(false);
  const supportLabel = 'Support?'

  const [commentsInput, setCommentsInput] = useState(currentFeedback.comments);

  const submitSendSuccess = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: {
        feeling: currentFeedback.feelings,
        understanding: currentFeedback.understanding,
        support: currentFeedback.supported,
        comments: currentFeedback.comments
      }
    })
    .then((response) => {
      history.push('/success')
      getFeedback();
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        text: 'There was an error submitting your feedback, please try again later.'
      })
      console.log('Error:', err);
    })
  }
  
  const toggleEdit = () => {
    if (editStatus){
      setEditStatus(false)
      setRequiredFalse();
    }
    else {
      setEditStatus(true)
      setFeelingsInput(currentFeedback.feelings)
      setUnderstandingInput(currentFeedback.understanding)
      setSupportedInput(currentFeedback.supported)
      setCommentsInput(currentFeedback.comments)
    }
  }

  const saveEdit = () => {
    console.log('Clicked save edit button');
    // if ALL required fields are filled with a number between 1 and 5
    if (feelingsInput >= 1 && feelingsInput <= 5
        && understandingInput >= 1 && understandingInput <= 5
        && supportedInput >= 1 && supportedInput <= 5) {
      // Update currentFeedback.feelings
      dispatch({
        type: 'SET_FEELINGS_RATING',
        payload: feelingsInput
      })
      // Update currentFeedback.understanding
      dispatch({
        type: 'SET_UNDERSTANDING_RATING',
        payload: understandingInput
      })
      // Update currentFeedback.supported
      dispatch({
        type: 'SET_SUPPORTED_RATING',
        payload: supportedInput
      })
      // Update currentFeedback.comments
      dispatch({
        type: 'SET_FEEDBACK_COMMENTS',
        payload: commentsInput
      })
      toggleEdit();
      setRequiredFalse();
    }
    else {
      Swal.fire({
        icon: 'warning',
        html: `
          <p>Complete the required fields</p>
          <p>with a number from 1 - 5.</p>`
      })
      setRequiredTrue();
    }
  }

  const setRequiredTrue = () => {
    if (feelingsInput > 5 || feelingsInput < 1) {
      setRequiredFeelings(true)
    }
    if (understandingInput > 5 || understandingInput < 1) {
      setRequiredUnderstanding(true)
    }
    if (supportedInput > 5 || supportedInput < 1) {
      setRequiredSupported(true)
    }
  }

  const setRequiredFalse = () => {
    setRequiredFeelings(false)
    setRequiredUnderstanding(false)
    setRequiredSupported(false)
  }

  const style = {width: 225, mt:2}

  if (editStatus) {
    return (
      <>
        <h1>Edit Your Feedback</h1>

        {/* Edit field for: Feelings response */}
        <div>
          <RequiredTextField
            feedbackInput={feelingsInput}
            setFeedbackInput={setFeelingsInput}
            label={feelingsLabel}
            requiredInput={requiredFeelings}
            style={style}
          />
        </div>

        {/* Edit field for: Understanding response */}
        <div>
          <RequiredTextField
            feedbackInput={understandingInput}
            setFeedbackInput={setUnderstandingInput}
            label={understandingLabel}
            requiredInput={requiredUnderstanding}
            style={style}
          />
        </div>

        {/* Edit field for: Support response */}
        <div>
          <RequiredTextField
            feedbackInput={supportedInput}
            setFeedbackInput={setSupportedInput}
            label={supportLabel}
            requiredInput={requiredSupported}
            style={style}
          />
        </div>

        {/* Edit field for: Comments response */}
        <div>
          <TextField
            label='Enter Comments Here'
            helperText='(Optional)'
            value={commentsInput}
            onChange={event => setCommentsInput(event.target.value)}
            variant='standard'
            sx = {style}
            multiline
            maxRows={5}
          />
        </div>

        <div>
          <button 
              className='submit-btn'
              onClick={saveEdit}>
            Save Edit
          </button>
        </div>

        <div>
          <button 
              className='smaller-btn'
              onClick={toggleEdit}>
            Cancel Edit
          </button>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <h1>Review Your Feedback</h1>
        <p>Feelings: {currentFeedback.feelings}</p>
        <p>Understanding: {currentFeedback.understanding}</p>
        <p>Support: {currentFeedback.supported}</p>
        <p>Comments: {currentFeedback.comments}</p>
        <div>
          <button className='submit-btn' onClick={submitSendSuccess}>Submit</button>
        </div>
        <div>
          <button className='smaller-btn' onClick={toggleEdit}>Edit Responses</button>
        </div>
      </>
    )
  }
}

export default ReviewFeedbackPage;