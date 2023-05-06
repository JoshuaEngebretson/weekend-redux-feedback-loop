import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";
import { TextField, Input } from "@mui/material";

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
      // return 'required'
      return (
        <TextField
          label='Feelings'
          error
          value={feelingsInput}
          onChange={event => setFeelingsInput(event.target.value)}
          variant='standard'
          helperText='Required Number 1-5'
        />
      )
    }
    else {
      return (
        <TextField
          label='Feelings'
          value={feelingsInput}
          onChange={event => setFeelingsInput(event.target.value)}
          variant='standard'
          helperText='Number 1-5'
        />
      )
      // return 'bottom-border'
    }
  }


  return (
    <>
      <h1>How are you feeling today?</h1>
      <p>On a scale from 1-5</p>
      {required()}
      <button className='next-btn' onClick={checkRequiredSendToUnderstand}>Next</button>
    </>
  )
}

export default FeelPage;