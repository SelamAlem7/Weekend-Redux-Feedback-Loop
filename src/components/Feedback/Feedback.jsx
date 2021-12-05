import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';



function Feedback () {

    
    const dispatch = useDispatch();
    const history = useHistory();




    const handleNext = (event) => {
        event.preventDefault();
   console.log('comments is', comments)
        

  history.push('/feeling')
  
};
 

  return(
        <div>
            <h2>Thank you!!</h2>

            <button> LEAVE NEW FEEDBACK </button>
          
              


        </div>
        )

};

export default Feedback;