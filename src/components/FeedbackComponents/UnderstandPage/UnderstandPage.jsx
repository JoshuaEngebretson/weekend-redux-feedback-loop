import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";

function UnderstandPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [understandingInput, setUnderstandingInput] = useState('');

  const checkRequiredSendToSupport = () => {
    if (understandingInput !== '') {
      dispatch({
        type: 'SET_UNDERSTANDING_RATING',
        payload: understandingInput
      })
      history.push('/support')
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
      <h1>How well are you understanding the content?</h1>
      <p>On a scale from 1-5</p>
      <input 
        type='number'
        placeholder='Required'
        value={understandingInput}
        onChange={event => setUnderstandingInput(event.target.value)}
      />
      <button onClick={checkRequiredSendToSupport}>Next</button>
    </>
  )
}

export default UnderstandPage;