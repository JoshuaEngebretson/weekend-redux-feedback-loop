import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";
import { TextField } from "@mui/material";

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

  const requiredFeelingsInput = () => {
    if (requiredInput) {
      // return 'required'
      return (
        <TextField
          type='number'
          label='Feelings?'
          error
          value={feelingsInput}
          onChange={event => setFeelingsInput(event.target.value)}
          variant='standard'
          helperText='Scale of 1-5 (Required)'
          sx = {{width: 225, left:120, mt:-1}}
        />
      )
    }
    else {
      return (
        <TextField
          type='number'
          label='Feelings?'
          value={feelingsInput}
          onChange={event => setFeelingsInput(event.target.value)}
          variant='standard'
          helperText='Scale of 1-5'
          sx = {{width: 225, left:120, mt:-1}}
        />
      )
    }
  }


  return (
    <>
      <h1>How are you feeling today?</h1>
      {requiredFeelingsInput()}
      <button className='next-btn' onClick={checkRequiredSendToUnderstand}>Next</button>
    </>
  )
}

export default FeelPage;