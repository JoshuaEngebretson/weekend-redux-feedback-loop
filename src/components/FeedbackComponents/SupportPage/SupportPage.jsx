import { useState } from "react";
import RequiredTextField from "../RequiredTextField/RequiredTextField";
import NextButton from "../NextButton/NextButton";

function SupportPage() {

  const [supportedInput, setSupportedInput] = useState('');
  const [requiredInput, setRequiredInput] = useState(false);

  const label = 'Support?'
  const type = 'SET_SUPPORTED_RATING'
  const nextDestination = '/comments'
  const style = {width: 225, left:120, mt:-1}

  return (
    <>
      <h1>How well are you being supported?</h1>
      <form>
        <RequiredTextField
          feedbackInput={supportedInput}
          setFeedbackInput={setSupportedInput}
          label={label}
          requiredInput={requiredInput}
          style={style}
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