import DeleteResultButton from './DeleteResultButton/DeleteResultButton';
import FlagResultButton from './FlagResultButton/FlagResultButton';

function Result ({item, getFeedback}) {

  // For showing the user what they are deleting within the alert
  const resultSwalFooter = `
    <b>Result</b><br>
    Feelings: ${item.feeling}<br>
    Understanding: ${item.understanding}<br>
    Support: ${item.support}<br>
    Comments: ${item.comments}<br>
  `;

  const flagged = () => {
    if (item.flagged) {
      return 'flagged'
    }
    return ''
  }

  return (
    <tr key={item.id}
        className={flagged()}
    >
      <td>{item.feeling}</td>
      <td>{item.understanding}</td>
      <td>{item.support}</td>
      <td>{item.comments}</td>
      <DeleteResultButton
        getFeedback={getFeedback}
        resultSwalFooter={resultSwalFooter}
        item={item}
      />
      <FlagResultButton
        getFeedback={getFeedback}
        resultSwalFooter={resultSwalFooter}
        item={item}
      />
    </tr>
  )
}

export default Result;