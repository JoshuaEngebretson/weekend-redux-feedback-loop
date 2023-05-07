import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import axios from 'axios';
import Swal from 'sweetalert2';

function Result ({item, getFeedback}) {

  // For showing the user what they are deleting within the alert
  const deleteResultSwalFooter = `
    <b>Result</b><br>
    Feelings: ${item.feeling}<br>
    Understanding: ${item.understanding}<br>
    Support: ${item.support}<br>
    Comments: ${item.comments}
  `;

  const deleteRow = () => {
    // Pop up alert to confirm if the user wants to delete the result
    Swal.fire({
      icon: 'warning',
      title: 'Delete Confirmation',
      text: `Are you sure you want to remove this result from the database?`,
      footer: deleteResultSwalFooter,
      showCancelButton: true,
      confirmButtonText: `Yes, Delete this result.`,
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
            text: `This result has been deleted from the database.`,
            footer: deleteResultSwalFooter
          })
          // and pull the feedback table from the database again
          getFeedback();
        }).catch(err => {
          // If unsuccessful, alert the user there was an error
          Swal.fire({
            icon: 'error',
            text: `An error occured while deleting this result, please try again later.`,
            footer: deleteResultSwalFooter
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

  return (
    <tr key={item.id}>
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
    </tr>
  )
}

export default Result;