import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";

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
      <h1>How well are you being supported?</h1>
      <p>On a scale from 1-5</p>
      <input 
        className={required()}
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