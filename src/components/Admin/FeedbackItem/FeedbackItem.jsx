import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import FlagIcon from '@mui/icons-material/Flag';
import axios from 'axios';
import Swal from 'sweetalert2';

function Result ({item, getFeedback}) {

  // For showing the user what they are deleting within the alert
  const resultSwalFooter = `
    <b>Result</b><br>
    Feelings: ${item.feeling}<br>
    Understanding: ${item.understanding}<br>
    Support: ${item.support}<br>
    Comments: ${item.comments}<br>
  `;

  const deleteRow = () => {
    // Pop up alert to confirm if the user wants to delete the result
    Swal.fire({
      icon: 'warning',
      title: 'Delete Confirmation',
      text: `Are you sure you want to remove this Result from the database?`,
      footer: resultSwalFooter,
      showCancelButton: true,
      confirmButtonText: `Yes, Delete this Result.`,
      cancelButtonText: 'No, I want to cancel!',
      reverseButtons: true
    }).then((result) => {
      // If confirmed, delete the result and alert the user about success or failure
      if(result.isConfirmed){
        axios({
          method: 'DELETE',
          url: `/feedback/${item.id}`
        }).then(res => {
          // If successful, alert the user
          Swal.fire({
            icon: 'success',
            title: 'Delete Complete',
            text: `This Result has been deleted from the database.`,
            footer: resultSwalFooter
          })
          // and pull the feedback table from the database again
          getFeedback();
        }).catch(err => {
          // If unsuccessful, alert the user there was an error
          Swal.fire({
            icon: 'error',
            html: `
              An error occured while deleting this Result.<br>
              Please try again later.
            `,
            footer: resultSwalFooter
          })
          // and log the error
          console.log('Delete Error:', err);
        })
      }
      else if (result.dismiss === Swal.DismissReason.cancel){
        // If cancelled, alert the user that result item was not deleted
        Swal.fire({
          icon: 'error',
          title: 'Phew!',
          text: `That was close, this result is still in the database`,
          footer: `
            <b>Result</b><br>
            Feelings: ${item.feeling}<br>
            Understanding: ${item.understanding}<br>
            Support: ${item.support}<br>
            Comments: ${item.comments}
          `
        })
      }
    })
  }

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
        <button 
            className='delete-btn'
            onClick={deleteRow}>
          <DeleteSweepIcon />
        </button>
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