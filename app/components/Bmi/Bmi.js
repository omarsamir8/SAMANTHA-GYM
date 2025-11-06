'use client'
import { useState } from 'react';
import './Bmi.css'
function Bmi(){
    const [gender, setGender] = useState("");
    const[Weight,setweight]=useState("");
    const[Height,setHeight]=useState("");
    const [bmi,setbmi]=useState("")
    return(
        <>
        <div className="bmi">
            <div className='bmiImg'>
                <img src='./Assets/bmi.png' alt='Bmi Image'/>
            </div>
            <div className='bmiForm'>
                <h2>Calculate Your BMI</h2>
                <p>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Morbi tristique senectus et netus et.</p>
                <form>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input className="form-control" type="number" placeholder="Age" aria-label="default input example"/>
                    <input onChange={(e)=>{setHeight(e.target.value)}} className="form-control" type="number" placeholder="Height By meters" aria-label="default input example"/>
                    <input onChange={(e)=>{setweight(e.target.value)}}  className="form-control" type="number" placeholder="Weight By KiloGram" aria-label="default input example"/>
                    <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                        <button>Calculate</button>
                        <h3 className='bmivalue' style={{backgroundColor:"white",padding:"10px",margin:"0"}}>Bmi ={Height != null && Weight != null
                                ? (Weight / (Height * Height)).toFixed(2)
                                : "Enter Your Information"}
                        </h3>
                    </div>     
                </form>
            </div>
        </div>
        </>
    )
}
export default Bmi;