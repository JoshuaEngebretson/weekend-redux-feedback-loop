import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";
import Swal from "sweetalert2";
import RequiredTextField from "../RequiredTextField/RequiredTextField";
import { TextField } from "@mui/material";

function EditFeedbackPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const currentFeedback = useSelector(state => state.currentFeedback);
  // Set up feelings state
  const [feelingsInput, setFeelingsInput] = useState(currentFeedback.feelings);
  const [requiredFeelings, setRequiredFeelings] = useState(false);
  const feelingsLabel = 'Feelings?'
  // Set up understanding state
  const [understandingInput, setUnderstandingInput] = useState(currentFeedback.understanding);
  const [requiredUnderstanding, setRequiredUnderstanding] = useState(false);
  const understandingLabel = 'Understanding?'
  // Set up supported state
  const [supportedInput, setSupportedInput] = useState(currentFeedback.supported);
  const [requiredSupported, setRequiredSupported] = useState(false);
  const supportLabel = 'Support?'
  // Set up comments state
  const [commentsInput, setCommentsInput] = useState(currentFeedback.comments);

  const saveEdit = () => {
    console.log('Clicked save edit button');
    // if ALL required fields are filled with a number between 1 and 5
    if (feelingsInput >= 1 && feelingsInput <= 5
        && understandingInput >= 1 && understandingInput <= 5
        && supportedInput >= 1 && supportedInput <= 5) {
      sendUpdatedFeedbackToRedux('SET_FEELINGS_RATING', feelingsInput);
      sendUpdatedFeedbackToRedux('SET_UNDERSTANDING_RATING', understandingInput);
      sendUpdatedFeedbackToRedux('SET_SUPPORTED_RATING', supportedInput);
      sendUpdatedFeedbackToRedux('SET_FEEDBACK_COMMENTS', commentsInput);
      goToReviewPage();
    }
    else {
      // Alert user why unable to save their edits
      Swal.fire({
        icon: 'warning',
        html: `
          <p>Complete the required fields</p>
          <p>with a number from 1 - 5.</p>`
      })
      // If any of the required inputs are not filled in correctly
      //  outline the textField in red and add (Required) to the helperText
      setRequiredTrue(feelingsInput, setRequiredFeelings);
      setRequiredTrue(understandingInput, setRequiredUnderstanding);
      setRequiredTrue(supportedInput, setRequiredSupported);
    }
  }

  const sendUpdatedFeedbackToRedux = (type, payload) => {
    dispatch({
      type: type,
      payload: payload
    })
  }

  const setRequiredTrue = (feedbackInput, setRequiredInput) => {
    // If fields are not filled out correctly with a number from 1-5
    if (feedbackInput < 1 || feedbackInput > 5) {
      setRequiredInput(true)
    }
    // Else no longer needs to be marked Required
    else if (feedbackInput >= 1 && feedbackInput <= 5) {
      setRequiredInput(false)
    }
  }

  const style = {width: 225, mt:2}

  const goToReviewPage = () => history.push('/review/feedback')

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
            onClick={goToReviewPage}>
          Cancel Edit
        </button>
      </div>
    </>
  )
}

export default EditFeedbackPage;