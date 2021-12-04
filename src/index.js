import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//importing hooks first
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';



const usersFeedback = [{ 
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
    support: '',

}]

const feedbackReducer = (state = usersFeedback, action) => {
    if (action.type === 'SET_FEEDBACK') {
      console.log(action);
      return action.payload;
    }
    return state;
  }




  const reduxStore = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
  );



ReactDOM.render
(<Provider store={reduxStore}>
    <App />
    </Provider>,
     document.getElementById('root'));

registerServiceWorker();



