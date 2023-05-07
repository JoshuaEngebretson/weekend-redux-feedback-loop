import FlagIcon from '@mui/icons-material/Flag';
import axios from 'axios';
import Swal from 'sweetalert2';

function FlagResultButton({item, getFeedback, resultSwalFooter}) {

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

  return (
    <td>
      <button
          className='flag-btn'
          onClick={toggleFlagRowForReview}>
        <FlagIcon />
      </button>
    </td>
  )

}

export default FlagResultButton;