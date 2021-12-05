import {useSelector} from 'react-redux';




function Review () {

    const review = useSelector ((store) => store.feedbackReducer);
    console.log('Review is:', review);

    

  

return(
    <div>

        <h3> Review your feedback: </h3>
            <p> Feeling: {review.feeling} </p>
            <p> Understanding: {review.understanding} </p>
            <p> Support: {review.support} </p>
            <p> Comments: {review.comments} </p>

    </div>
)


}
export default Review;