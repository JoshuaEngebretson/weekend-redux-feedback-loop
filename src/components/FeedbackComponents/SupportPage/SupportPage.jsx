import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";
import RequiredTextField from "../RequiredTextField/RequiredTextField";

function SupportPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [supportedInput, setSupportedInput] = useState('');
    const [requiredInput, setRequiredInput] = useState(false);

  const checkRequiredSendToComments = (event) => {
    event.preventDefault();
    if (supportedInput !== '' && supportedInput >= 1 && supportedInput <= 5) {
      dispatch({
        type: 'SET_SUPPORTED_RATING',
        payload: supportedInput
      })
      history.push('/comments');
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

  const label = 'Support?'

  return (
    <>
      <h1>How well are you being supported?</h1>
      <form>
        <RequiredTextField
          feedbackInput={supportedInput}
          setFeedbackInput={setSupportedInput}
          label={label}
          requiredInput={requiredInput}
        />
        <button
          className='next-btn'
          onClick={checkRequiredSendToComments}
        >
          Next
        </button>
      </form>
    </>
  )
}

export default SupportPage;