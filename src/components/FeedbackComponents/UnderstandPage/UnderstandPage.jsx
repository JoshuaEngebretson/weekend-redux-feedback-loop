import { useState } from "react";
import RequiredTextField from "../RequiredTextField/RequiredTextField";
import NextButton from "../NextButton/NextButton";

function UnderstandPage() {

  const [understandingInput, setUnderstandingInput] = useState('');
  const [requiredInput, setRequiredInput] = useState(false);

  const label = "Understanding?"
  const type ='SET_UNDERSTANDING_RATING'
  const nextDestination = '/support'

  return (
    <>
      <h1>How well are you understanding the content?</h1>
      <form>
        <RequiredTextField
          feedbackInput={understandingInput}
          setFeedbackInput={setUnderstandingInput}
          label={label}
          requiredInput={requiredInput}
        />
        <NextButton
          feedbackInput={understandingInput}
          setRequiredInput={setRequiredInput}
          type={type}
          nextDestination={nextDestination}
        />
      </form>
    </>
  )
}

export default UnderstandPage;