import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { useState } from "react";

function CommentsPage() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [feedbackComments, setFeedbackComments] = useState('')

  const dispatchSendToReview = () =>{
    history.push('/review/feedback')
  }

  return (
    <>
      <h1>Any comments you want to leave?</h1>
      <textarea placeholder='Optional'></textarea>
    </>
  )
}

export default CommentsPage;