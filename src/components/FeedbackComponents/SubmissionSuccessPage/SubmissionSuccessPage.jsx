import { useHistory } from "react-router-dom/";

function SubmissionSuccessPage({getFeedback}) {

  const history = useHistory();

  const sendToStart = () => {
    history.push('/')
  }

  return (
    <>
      <h1>Submission Success!</h1>

      <h3>Thank you for your feedback!</h3>
      <button onClick={sendToStart}>Leave New Feedback</button>
    </>
  )
}

export default SubmissionSuccessPage;