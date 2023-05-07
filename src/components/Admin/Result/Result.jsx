import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import axios from 'axios';

function Result ({result}) {

  const deleteRow = () => {
    console.log(`clicked delete on row with id: ${result.id}`);
  }

  return (
    <tr key={result.id}>
      <td>{result.feeling}</td>
      <td>{result.understanding}</td>
      <td>{result.support}</td>
      <td>{result.comments}</td>
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