import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';



function Comments () {

    
    const dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState(useSelector((store) => store.feedbackReducer.comments));



    const handleNext = (event) => {
        event.preventDefault();
   console.log('comments is', comments)
        
   dispatch({
    type: 'SET_FEEDBACK',
    payload: {
        property: 'comments', //telling what property to grab
        value: comments
    }
  })

  history.push('/review')
  
};
 

  return(
        <div>
            <h2>Any comments you want to leave ? </h2>

                <form onSubmit={handleNext}>
                    <input 
                        type="text"
                        value={comments}
                        onChange={(event)=>setComments(event.target.value)}>
                    </input>
                    
                        <button> NEXT</button>
          
                </form>


        </div>
        )

};

export default Comments;