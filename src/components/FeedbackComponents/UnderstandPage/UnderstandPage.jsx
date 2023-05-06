import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";
import RequiredTextField from "../RequiredTextField/RequiredTextField";

function UnderstandPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [understandingInput, setUnderstandingInput] = useState('');
  const [requiredInput, setRequiredInput] = useState(false);

  const checkRequiredSendToSupport = (event) => {
    event.preventDefault();
    if (understandingInput !== '' && understandingInput >= 1 && understandingInput <= 5) {
      dispatch({
        type: 'SET_UNDERSTANDING_RATING',
        payload: understandingInput
      })
      history.push('/support');
      setRequiredInput(false);
    }
    else {
      Swal.fire({
        icon: 'warning',
        html: `
          <p>Please complete the required field.</p>
          <p>With a number between 1 and 5</p>`
      })
      setRequiredInput(true);
    }
  }

  const label = "Understanding?"

  return (
    <>
      <h1>How well are you understanding the content?</h1>
      <form>
        <RequiredTextField
          feedbackInput={understandingInput}
          setFeedbackInput={setUnderstandingInput}
          label={label}
          requiredInput={requiredInput}
        />
        <button
          className='next-btn'
          onClick={checkRequiredSendToSupport}
        >
          Next
        </button>
      </form>
    </>
  )
}

export default UnderstandPage;