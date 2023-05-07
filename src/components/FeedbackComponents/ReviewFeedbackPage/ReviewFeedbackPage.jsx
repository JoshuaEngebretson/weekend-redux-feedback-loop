import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/";
import axios from "axios";
import Swal from "sweetalert2";

function ReviewFeedbackPage() {

  const history = useHistory();
  const currentFeedback = useSelector(state => state.currentFeedback);

  const submitSendSuccess = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: {
        feeling: currentFeedback.feelings,
        understanding: currentFeedback.understanding,
        support: currentFeedback.supported,
        comments: currentFeedback.comments
      }
    })
    .then((response) => {
      // If submission to database successful
      // Send user to SuccessPage
      history.push('/success')
    })
    .catch((err) => {
      // Else alert user there was an error
      Swal.fire({
        icon: 'error',
        text: 'There was an error submitting your feedback, please try again later.'
      })
      console.log('Error:', err);
    })
  }

  const goToEditPage = () => history.push('/edit/feedback')

  return (
    <>
      <h1>Review Your Feedback</h1>
      <p>Feelings: {currentFeedback.feelings}</p>
      <p>Understanding: {currentFeedback.understanding}</p>
      <p>Support: {currentFeedback.supported}</p>
      <p>Comments: {currentFeedback.comments}</p>
      <div>
        <button 
            className='submit-btn'
            onClick={submitSendSuccess}>
          Submit
        </button>
      </div>
      <div>
        <button 
            className='smaller-btn'
            onClick={goToEditPage}>
          Edit Responses
        </button>
      </div>
    </>
  )
}

export default ReviewFeedbackPage;