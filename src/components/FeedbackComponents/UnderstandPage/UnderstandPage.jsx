import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";

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
      <h1>How well are you understanding the content?</h1>
      <p>On a scale from 1-5</p>
      <input 
        className={required()}
        type='number'
        placeholder='Required'
        value={understandingInput}
        onChange={event => setUnderstandingInput(event.target.value)}
      />
      <button className='next-btn' onClick={checkRequiredSendToSupport}>Next</button>
    </>
  )
}

export default UnderstandPage;