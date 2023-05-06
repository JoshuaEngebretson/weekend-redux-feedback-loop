import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";

function SupportPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [supportedInput, setSupportedInput] = useState('');

  const checkRequiredSendToComments = () => {
    if (supportedInput !== '') {
      dispatch({
        type: 'SET_SUPPORTED_RATING',
        payload: supportedInput
      })
      history.push('/comments')
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
      <h1>How well are you being supported?</h1>
      <p>On a scale from 1-5</p>
      <input 
        type='number'
        placeholder='Required'
        value={supportedInput}
        onChange={event => setSupportedInput(event.target.value)}
      />
      <button className='next-btn' onClick={checkRequiredSendToComments}>Next</button>
    </>
  )
}

export default SupportPage;