import { useState } from "react";
import RequiredTextField from "../RequiredTextField/RequiredTextField";
import NextButton from "../NextButton/NextButton";

function FeelPage() {

  const [feelingsInput, setFeelingsInput] = useState('');
  const [requiredInput, setRequiredInput] = useState(false);

  const label = 'Feelings?'
  const type = 'SET_FEELINGS_RATING'
  const nextDestination = '/understanding'
  const style = {width: 225, left:120, mt:-1}

  return (
    <>
      <h1>How are you feeling today?</h1>
      <form>
        <RequiredTextField
          feedbackInput={feelingsInput}
          setFeedbackInput={setFeelingsInput}
          label={label}
          requiredInput={requiredInput}
          style={style}
        />
        <NextButton
          feedbackInput={feelingsInput}
          setRequiredInput={setRequiredInput}
          type={type}
          nextDestination={nextDestination}
        />
      </form>
    </>
  )
}

export default FeelPage;