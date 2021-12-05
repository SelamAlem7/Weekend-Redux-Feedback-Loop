import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';



function Understanding () {

    
    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState(useSelector((store) => store.feedbackReducer.understanding));



    const handleNext = (event) => {
        event.preventDefault();
   console.log('understanding is', understanding)
        
   dispatch({
    type: 'SET_FEEDBACK',
    payload: {
        property: 'understanding', //telling what property to grab
        value: understanding
    }
  })

  history.push('/support')
  
};
 

  return(
        <div>
            <h2>How are you understanding today? </h2>

                <form onSubmit={handleNext}>
                    <input 
                        required
                        type="number"
                        min="1"
                        max="5"
                    
                        value={understanding}
                        onChange={(event)=>setUnderstanding(event.target.value)}>
                    </input>
                    
                        <button> NEXT</button>
          
                </form>


        </div>
        )

};

export default Understanding;