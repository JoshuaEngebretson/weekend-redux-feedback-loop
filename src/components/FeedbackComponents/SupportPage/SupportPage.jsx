import { useState } from "react";
import RequiredTextField from "../RequiredTextField/RequiredTextField";
import NextButton from "../NextButton/NextButton";

function SupportPage() {

  const [supportedInput, setSupportedInput] = useState('');
  const [requiredInput, setRequiredInput] = useState(false);

  const label = 'Support?'
  const type = 'SET_SUPPORTED_RATING'
  const nextDestination = '/comments'

  return (
    <>
      <h1>How well are you being supported?</h1>
      <form>
        <RequiredTextField
          feedbackInput={supportedInput}
          setFeedbackInput={setSupportedInput}
          label={label}
          requiredInput={requiredInput}
        />
        <NextButton
          feedbackInput={supportedInput}
          setRequiredInput={setRequiredInput}
          type={type}
          nextDestination={nextDestination}
        />
      </form>
    </>
  )
}

export default SupportPage;