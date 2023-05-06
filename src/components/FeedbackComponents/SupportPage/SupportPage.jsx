import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";
import { TextField } from "@mui/material";

function SupportPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [supportedInput, setSupportedInput] = useState('');
    const [requiredInput, setRequiredInput] = useState(false);

  const checkRequiredSendToComments = () => {
    if (supportedInput !== '' && supportedInput >= 1 && supportedInput <= 5) {
      dispatch({
        type: 'SET_SUPPORTED_RATING',
        payload: supportedInput
      })
      history.push('/comments')
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

  const requiredSupportInput = () => {
    if (requiredInput) {
      // return 'required'
      return (
        <TextField
          type='number'
          label='Support?'
          error
          value={supportedInput}
          onChange={event => setSupportedInput(event.target.value)}
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
          label='Support?'
          value={supportedInput}
          onChange={event => setSupportedInput(event.target.value)}
          variant='standard'
          helperText='Scale of 1-5'
          sx = {{width: 225, left:120, mt:-1}}
        />
      )
    }
  }


  return (
    <>
      <h1>How well are you being supported?</h1>
      {requiredSupportInput()}
      <button className='next-btn' onClick={checkRequiredSendToComments}>Next</button>
    </>
  )
}

export default SupportPage;