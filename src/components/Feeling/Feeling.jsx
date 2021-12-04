import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


function Feeling() {

    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState(useSelector((store) => store.feedbackReducer.feeling));
//onsole.log(feeling, 'feelingggg')


    const handleNext = (event) => {
        event.preventDefault();
   console.log('feeling is', feeling)
        
   dispatch({
    type: 'SET_FEEDBACK',
    payload: {
        property: 'feeling', //telling what property to grab
        value: feeling
    }
  })
  
};
 

  return(
<div>
    <h2>How are you feeling today? </h2>

    <form onSubmit={handleNext}>
        <input 
        required
        type="number"
        min="1"
        max="5"
     
        value={feeling}
        onChange={(event)=>setFeeling(event.target.value)}>
        </input>

        <button> NEXT</button>
          
    </form>


</div>
  )
}
  export default Feeling;