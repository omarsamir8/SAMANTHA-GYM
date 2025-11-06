'use client'
import { useRouter } from "next/navigation";
import './Started.css'
function Started(){
    const router = useRouter();
    return (
        <>
        <div className="Started">
            <div style={{height:"60vh"}} className='bmiImg'>
                <img style={{left:"30%",height:"80vh",top:"-15%"}} src='./Assets/start.png' alt='Bmi Image'/>
            </div>
            <div className='startDetails'>
                <h2>ready to get started</h2>
                <p>Ready to get started? Our expert trainers, modern equipment, and motivating environment are here to help you reach your goals.</p>
                <h5>Never be bored by your fitness program again!</h5>
                <p>Membership is only $29.99/mo, that’s less than $1 a day!</p>
                <button onClick={()=>{router.push("/PricingTable");}}>JOIN NOW</button>
            </div>
        </div>
        </>
    )
}
export default Started;