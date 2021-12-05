import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';



function Feedback () {

    const dispatch = useDispatch();
    const history = useHistory();




    const handleButton = (event) => {
        event.preventDefault();

        dispatch({
            type: 'CLEAR'
          })
   
        history.push('/feeling')


  
};
 

  return(
        <div>
            <h2>Thank you!!</h2>

            <button onClick={handleButton}> LEAVE NEW FEEDBACK </button>
          
              


        </div>
        )

};

export default Feedback;