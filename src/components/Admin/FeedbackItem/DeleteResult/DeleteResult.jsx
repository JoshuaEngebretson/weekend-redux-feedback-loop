import Swal from "sweetalert2";
import axios from "axios";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

function DeleteResult({item, resultSwalFooter}){
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
          footer: resultSwalFooter
        })
      }
    })
  }

  return (
    <button 
        className='delete-btn'
        onClick={deleteRow}>
      <DeleteSweepIcon />
    </button>
  )
}

export default DeleteResult;