import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios({
      type: 'GET',
      url: '/feedback'
    }).then ((response) => {
      const feedbackArray = response.data;
      dispatch({
        type: 'SET_FEEDBACK_REDUCER',
        payload: feedbackArray
      })
    })
  }

  const getPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then ((response) => {
      const pizzaArray = response.data;
      dispatch({
        type: 'SET_PIZZA_REDUCER',
        payload: pizzaArray
      })
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
