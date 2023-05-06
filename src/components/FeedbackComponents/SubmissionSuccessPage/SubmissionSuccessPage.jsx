import { useHistory } from "react-router-dom/";
import { useDispatch } from "react-redux";

function SubmissionSuccessPage({getFeedback}) {

  const history = useHistory();
  const dispatch = useDispatch();

  const resetSendToStart = () => {
    history.push('/')
    dispatch({
      type: 'RESET_CURRENT_FEEDBACK'
    })
  }

  return (
    <>
      <h1>Submission Success!</h1>
      <h2>Thank you for your feedback!</h2>
      <button onClick={resetSendToStart}>Leave New Feedback</button>
    </>
  )
}

export default SubmissionSuccessPage;