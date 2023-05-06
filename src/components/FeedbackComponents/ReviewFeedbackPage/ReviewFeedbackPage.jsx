import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/";
import axios from "axios";
import Swal from "sweetalert2";

function ReviewFeedbackPage({getFeedback}) {

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
      history.push('/success')
      getFeedback();
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        text: 'There was an error submitting your feedback, please try again later.'
      })
      console.log('Error:', err);
    })
  }
  

  return (
    <>
      <h1>Review Your Feedback</h1>
      <p>Feelings: {currentFeedback.feelings}</p>
      <p>Understanding: {currentFeedback.understanding}</p>
      <p>Support: {currentFeedback.supported}</p>
      <p>Comments: {currentFeedback.comments}</p>
      <div>
        <button onClick={submitSendSuccess}>Submit</button>
      </div>
    </>
  )
}

export default ReviewFeedbackPage;