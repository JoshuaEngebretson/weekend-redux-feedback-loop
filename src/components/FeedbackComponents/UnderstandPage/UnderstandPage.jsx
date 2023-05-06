import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";
import { TextField } from "@mui/material";

function UnderstandPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [understandingInput, setUnderstandingInput] = useState('');
  const [requiredInput, setRequiredInput] = useState(false);

  const checkRequiredSendToSupport = () => {
    if (understandingInput !== '' && understandingInput >= 1 && understandingInput <= 5) {
      dispatch({
        type: 'SET_UNDERSTANDING_RATING',
        payload: understandingInput
      })
      history.push('/support')
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

  const requiredUnderstandingInput = () => {
    if (requiredInput) {
      // return 'required'
      return (
        <TextField
          type='number'
          label='Understanding?'
          error
          value={understandingInput}
          onChange={event => setUnderstandingInput(event.target.value)}
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
          label='Understanding?'
          value={understandingInput}
          onChange={event => setUnderstandingInput(event.target.value)}
          variant='standard'
          helperText='Scale of 1-5'
          sx = {{width: 225, left:120, mt:-1}}
        />
      )
    }
  }


  return (
    <>
      <h1>How well are you understanding the content?</h1>
      {requiredUnderstandingInput()}
      <button className='next-btn' onClick={checkRequiredSendToSupport}>Next</button>
    </>
  )
}

export default UnderstandPage;