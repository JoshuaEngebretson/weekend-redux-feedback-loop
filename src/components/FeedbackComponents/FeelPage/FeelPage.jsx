import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";

function FeelPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [feelingsInput, setFeelingsInput] = useState('');
  const [requiredInput, setRequiredInput] = useState(false);

  const checkRequiredSendToUnderstand = () => {
    if (feelingsInput !== '' && feelingsInput >= 1 && feelingsInput <= 5) {
      dispatch({
        type: 'SET_FEELINGS_RATING',
        payload: feelingsInput
      })
      history.push('/understanding')
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

  const required = () => {
    if (requiredInput) {
      return 'required'
    }
    else {
      return 'bottom-border'
    }
  }

  return (
    <>
      <h1>How are you feeling today?</h1>
      <p>On a scale from 1-5</p>
      <input 
        className={required()}
        type='number'
        placeholder='Required'
        value={feelingsInput}
        onChange={event => setFeelingsInput(event.target.value)}
      />
      <button className='next-btn' onClick={checkRequiredSendToUnderstand}>Next</button>
    </>
  )
}

export default FeelPage;