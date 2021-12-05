import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';



function Support () {

    
    const dispatch = useDispatch();
    const history = useHistory();

    const [support, setSupport] = useState(useSelector((store) => store.feedbackReducer.support));



    const handleNext = (event) => {
        event.preventDefault();
   console.log('support is', support)
        
   dispatch({
    type: 'SET_FEEDBACK',
    payload: {
        property: 'support', //telling what property to grab
        value: support
    }
  })

  history.push('/comments')
  
};
 

  return(
        <div>
            <h2>How well are you being supported ? </h2>

                <form onSubmit={handleNext}>
                    <input 
                        required
                        type="number"
                        min="1"
                        max="5"
                    
                        value={support}
                        onChange={(event)=>setSupport(event.target.value)}>
                    </input>
                    
                        <button> NEXT</button>
          
                </form>


        </div>
        )

};

export default Support;