import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";
import RequiredTextField from "../RequiredTextField/RequiredTextField";

function FeelPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [feelingsInput, setFeelingsInput] = useState('');
  const [requiredInput, setRequiredInput] = useState(false);

  const checkRequiredSendToUnderstand = (event) => {
    event.preventDefault();
    if (feelingsInput !== '' && feelingsInput >= 1 && feelingsInput <= 5) {
      dispatch({
        type: 'SET_FEELINGS_RATING',
        payload: feelingsInput
      })
      history.push('/understanding');
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

  const label = 'Feelings?'

  return (
    <>
      <h1>How are you feeling today?</h1>
      <form>
        <RequiredTextField
          feedbackInput={feelingsInput}
          setFeedbackInput={setFeelingsInput}
          label={label}
          requiredInput={requiredInput}
        />
        <button 
          className='next-btn' 
          onClick={checkRequiredSendToUnderstand}
        >
          Next
        </button>
      </form>
    </>
  )
}

export default FeelPage;