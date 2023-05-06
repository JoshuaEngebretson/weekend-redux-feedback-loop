import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";

function NextButton({feedbackInput, setRequiredInput, nextDestination, type}) {
  
  const history = useHistory();
  const dispatch = useDispatch();

  const checkRequiredSendToNextPage = (event) => {
    event.preventDefault();
    if (feedbackInput !== '' && feedbackInput >= 1 && feedbackInput <= 5) {
      dispatch({
        type: type,
        payload: feedbackInput
      })
      history.push(nextDestination);
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

  return (
    <button
        className='next-btn'
        onClick={checkRequiredSendToNextPage}>
      Next
    </button>

  )
}

export default NextButton;