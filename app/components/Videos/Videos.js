'use client'
import { useEffect, useState } from 'react';
import './Videos.css'
import { useRouter } from "next/navigation";
function Videos(){
    const [user, setUser] = useState(null);
    const router = useRouter();
    const [workouts, setWorkouts] = useState([]);
    // featch Videos
    const fetchWorkouts = async () => {
    const res = await fetch("/api/workouts");
    const data = await res.json();
    console.log(data.workouts)
    setWorkouts(data.workouts || []);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
    }, []);
      console.log(user)
      console.log(workouts);
    return (
        <>
        {user!=null && user.allowedToSeeVideos===true ?<div className="VideosContainer">
            {workouts.length > 0 ? workouts.map((w, i) => (
               <div key={i} className="video">
                <video src={w.video} controls/>
                <h2>{w.name}</h2>
                <p>{w.description}</p>
            </div> 
            )):null}
        </div> :
        <div className='please'>
            <h2>Please subscribe to our offers first to unlock and watch the exclusive workout videos.</h2>
            <button onClick={()=>{router.push("/PricingTable");}}>Join Now</button>
        </div>
        }
        
        </>
    )
}
export default Videos;