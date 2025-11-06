import './Result.css'
function Result(){
    return(
        <>
        <div className="Result">
            <h2>Real people. Real Results</h2>
            <p>Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet nisl purus. Massa tempor nec feugiat nisl pretium.</p>
            <div className="reviewContainer">
                <div className="review">
                    <img src="./Assets/review.jpg" alt="ReviewImage"/>
                    <div className="reviewDetails">
                        <p>Suspendisse in est ante in nibh mauris cursus mattis molestie. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Feugiat in fermentum posuere urna nec tincidunt praesent semper.</p>
                        <hr></hr>
                        <div className='information'>
                            <img src='./Assets/review2.jpg' alt='personal photo'/>
                            <div>
                                <h3>Mirna Tomas</h3>
                                <p>Weeks Workouts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <img src="./Assets/review.jpg" alt="ReviewImage"/>
                    <div className="reviewDetails">
                        <p>Suspendisse in est ante in nibh mauris cursus mattis molestie. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Feugiat in fermentum posuere urna nec tincidunt praesent semper.</p>
                        <hr></hr>
                        <div className='information'>
                            <img src='./Assets/review2.jpg' alt='personal photo'/>
                            <div>
                                <h3>Mirna Tomas</h3>
                                <p>Weeks Workouts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Result;