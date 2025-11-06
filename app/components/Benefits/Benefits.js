import './Benefits.css'
function Benefits(){
    return (
        <>
        <div className="Benefits">
            <h2>Benefits of Personal Training</h2>
            <div className="benfitsContainer">
                <div className='benfitBox'>
                    <h3>Nutrition Strategies</h3>
                    <div className='benfitDetails'>
                        Discover effective nutrition strategies to fuel your workouts, enhance recovery, and achieve your fitness goals faster.
                    </div>
                </div>
                <div className='benfitBox'>
                    <h3>Workout Routiens</h3>
                    <div className='benfitDetails'>
                        Explore personalized workout routines designed to help you build strength, improve endurance, and stay motivated every day.
                    </div>
                </div>
                <div className='benfitBox'>
                    <h3>Nutrition Strategies</h3>
                    <div className='benfitDetails'>
                        Fuel your body the right way. Discover nutrition strategies that support muscle growth, boost energy, and improve overall health.
                    </div>
                </div>
                <div className='benfitBox'>
                    <h3>Boosts Mental Health</h3>
                    <div className='benfitDetails'>
                        Working out releases endorphins — the “happy hormones” — that reduce stress, anxiety, and depression.
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Benefits;