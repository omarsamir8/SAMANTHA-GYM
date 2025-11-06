'use client'
import { useRouter } from "next/navigation";
import './Hero.css'
function Hero(){
    const router = useRouter();
    return(
        <>
        <div className="hero">
            <h2>BUILD A PERFECT HEALTH GROWTH</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            <button onClick={()=>{router.push("/PricingTable");}} className='herobutton'>JOIN NOW</button>
            <img src='./Assets/Photo-1.png' alt='heroPhoto'/>
        </div>
        </>
    )
}
export default Hero;