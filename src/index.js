import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//importing hooks first
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';



const usersFeedback = [{ //
    feeling: '', 
    understanding: '',
    support: '',
    comments: '',
  

}]

const feedbackReducer = (state = usersFeedback, action) => {
    if (action.type === 'SET_FEEDBACK') {
      console.log(action, 'action');
      console.log(action.payload, 'action.payload');
      
      return {...state, [action.payload.property]: action.payload.value}
    } else if( action.type === 'CLEAR'){
        return usersFeedback
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



