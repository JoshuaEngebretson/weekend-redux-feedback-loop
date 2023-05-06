import { useSelector } from "react-redux";
import { useEffect } from "react";

function AdminView({getFeedback}) {

  useEffect(() => {
    getFeedback();
  }, []);

  const feedbackResultsArray = useSelector(state => state.feedbackResults)

  console.log('feedback Results in AdminView:', feedbackResultsArray);

  return (
    <>
      <h1>Inside Admin View</h1>
    </>
  )
}

export default AdminView;