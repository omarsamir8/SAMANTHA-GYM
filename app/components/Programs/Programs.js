'use client'
import { useRouter } from "next/navigation";
import './Programs.css'

function Programs(){
    const router = useRouter();
    return(
        <>
        <div className="Programs">
            <div className="Programscontainer">
                <div className="programsTitle">
                    <h2>MY PROGRAM</h2>
                    <p>Nulla aliquet enim tortor at auctor urna. Neque sodales ut etiam sit amet nisl purus. Auctor neque vitae tempus quam. At urna condimentum mattis pellentesque.</p>
                    <button onClick={()=>{router.push("/PricingTable");}}>JOIN NOW</button>
                </div>
                <div className='programShape'>
                    <img src='./Assets/cardio.svg' alt=''/>
                    <h3>Cardio</h3>
                    <p>Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices.</p>
                </div>
                <div className='programShape'>
                    <img src='./Assets/abs.svg' alt=''/>
                    <h3>Abdominal</h3>
                    <p>Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices.</p>
                </div>
            </div>
            <div className='img'>
                <img src='./Assets/smiling-pretty.png' alt='dancyimg'/>
            </div>
            <div className="Programscontainer">
                <div className='programShape'>
                    <img src='./Assets/sholder.svg' alt=''/>
                    <h3>Shoulders</h3>
                    <p>Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices.</p>
                </div>
                <div className='programShape'>
                    <img src='./Assets/hand.svg' alt=''/>
                    <h3>Hands</h3>
                    <p>Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices.</p>
                </div>
                <div className='programShape'>
                    <img src='./Assets/time.svg' alt=''/>
                    <h3>Time</h3>
                    <p>Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices.</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Programs;