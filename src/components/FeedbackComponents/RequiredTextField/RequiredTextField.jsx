import { TextField } from "@mui/material";

function RequiredTextField({label, feedbackInput, setFeedbackInput, requiredInput, style}) {

  if (requiredInput) {
    // Adjust styling to show bottom border
    //  change label to show as red
    //  Add (Required) to the subtext below the input
    return (
      <TextField
        type='number'
        label={label}
        error
        value={feedbackInput}
        onChange={event => setFeedbackInput(event.target.value)}
        variant='standard'
        helperText='Scale of 1-5 (Required)'
        sx = {style}
      />
    )
  }
  else {
    // Style as normal, blue bottom border when selected
    return (
      <TextField
        type='number'
        label={label}
        value={feedbackInput}
        onChange={event => setFeedbackInput(event.target.value)}
        variant='standard'
        helperText='Scale of 1-5'
        sx = {style}
      />
    )
  }
}

export default RequiredTextField;