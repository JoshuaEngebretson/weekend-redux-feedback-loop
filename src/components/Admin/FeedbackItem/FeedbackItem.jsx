import FlagIcon from '@mui/icons-material/Flag';
import axios from 'axios';
import Swal from 'sweetalert2';
import DeleteResult from './DeleteResult/DeleteResult';
import FlagResult from './FlagResult/FlagResult';

function Result ({item, getFeedback}) {

  // For showing the user what they are deleting within the alert
  const resultSwalFooter = `
    <b>Result</b><br>
    Feelings: ${item.feeling}<br>
    Understanding: ${item.understanding}<br>
    Support: ${item.support}<br>
    Comments: ${item.comments}<br>
  `;

  const toggleFlagRowForReview = () => {
    if (item.flagged) {
      removeFlagForReview();
    }
    else {
      flagRowForReview();
    }
  }

  const flagRowForReview = () => {
    console.log('Clicked flagRow button');
    axios({
      method: 'PUT',
      url: `/feedback/flag/${item.id}`,
      data: {addFlag: true}
    }).then(res => {
      getFeedback();
      Swal.fire({
        text: 'This Result has been flagged for further review.',
        footer: resultSwalFooter
      })
    }).catch(err => {
      Swal.fire({
        html: `
          There was an error flagging this Result.<br>
          Please try again later.
        `,
        footer: resultSwalFooter
      })
    })
  }

  const removeFlagForReview = () => {
    console.log('Clicked flagRow button');
    axios({
      method: 'PUT',
      url: `/feedback/flag/${item.id}`,
      data: {removeFlag: true}
    }).then(res => {
      getFeedback();
      Swal.fire({
        text: 'The flag for review has been removed from this Result.',
        footer: resultSwalFooter
      })
    }).catch(err => {
      Swal.fire({
        html: `
          There was an error removing the flag for this Result.<br>
          Please try again later.
        `,
        footer: resultSwalFooter
      })
    })
  }

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
      <td>
        <DeleteResult
          getFeedback={getFeedback}
          resultSwalFooter={resultSwalFooter}
        />
      </td>
      <td>
        <button
            className='flag-btn'
            onClick={toggleFlagRowForReview}>
          <FlagIcon />
        </button>
      </td>
    </tr>
  )
}

export default Result;