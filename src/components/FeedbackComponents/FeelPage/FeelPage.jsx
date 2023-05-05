import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory as history } from "react-router-dom/";
import { useState } from "react";

function FeelPage() {

  const dispatch = useDispatch();
  const [feelingsInput, setFeelingsInput] = useState('')

  const checkRequiredSendToUnderstand = () => {
    if (feelingsInput != '') {
      console.log('Next Button clicked');
      console.log(feelingsInput);
      dispatch({
        type: 'SET_FEELINGS_RATING',
        payload: feelingsInput
      })
    }
    else {
      Swal.fire({
        icon: 'warning',
        text: 'Please fill out the required field'
      })
    }
  }

  return (
    <>
      <h1>How are you feeling today?</h1>
      <p>On a scale from 1-5</p>
      <input 
        type='number'
        placeholder='Required'
        value={feelingsInput}
        onChange={event => setFeelingsInput(event.target.value)}
      />
      <button onClick={checkRequiredSendToUnderstand}>Next</button>
    </>
  )
}

export default FeelPage;