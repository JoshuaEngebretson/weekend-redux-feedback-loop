import './AdminView.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Result from './Result/Result';

function AdminView() {

  const dispatch = useDispatch();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios({
      type: 'GET',
      url: '/feedback'
    }).then ((response) => {
      const feedbackResultsArray = response.data;
      dispatch({
        type: 'SET_FEEDBACK_RESULTS',
        payload: feedbackResultsArray
      })
    }).catch((err) => {
      console.log('Error:', err);
    })
  }

  const feedbackResultsArray = useSelector(state => state.feedbackResults)

  return (
    <>
      <h1>Inside Admin View</h1>
      <table>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            // Loop through the feedbackResults Array
            //  For each result, render a new row to the table
            feedbackResultsArray.map((result) => {
              return (
                <Result 
                  key={result.id}
                  result={result}
                />
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default AdminView;