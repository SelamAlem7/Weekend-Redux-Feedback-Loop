import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';





function Review () {

    const history = useHistory();
    const review = useSelector ((store) => store.feedbackReducer);
    console.log('Review is:', review);


    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/feedback',
            data: review
        }).then(() => {
            console.log('Sent POST');
          
        }).catch((error) => {
            console.log('POST error form', error);
            
        })
        
        history.push('/feedback')
  
  }

  

return(
    <div>
        

        <h3> Review your feedback: </h3>
        
        <form onSubmit={handleSubmit}>
            <p> Feeling: {review.feeling} </p>
            <p> Understanding: {review.understanding} </p>
            <p> Support: {review.support} </p>
            <p> Comments: {review.comments} </p>

            <button>Submit</button>

        </form>
    </div>
)


}
export default Review;