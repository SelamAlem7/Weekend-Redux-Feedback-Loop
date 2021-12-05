import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import {HashRouter as Router, Route } from 'react-router-dom'



function App() {



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
          <Router>
            <Route path='/feeling'>
              <Feeling />
            </Route>

            <Route path='/Support'>
              <Support />
            </Route>

            <Route path='/Comments'>
              <Comments />
            </Route>

            <Route path='/Review'>
             <Review />
            </Route>
            <Route path='/understanding'>
             <Understanding />
            </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
