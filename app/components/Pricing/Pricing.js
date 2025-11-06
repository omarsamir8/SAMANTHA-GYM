'use client'
import './Pricing.css'
import { useRouter } from "next/navigation";
function Pricing(){
    const router = useRouter();
    return (
        <>
        <div className="pricingContainer">
            <div className='price'>
                <div className='priceHead'>
                    <img src='./Assets/p3.svg'/>
                    <h2>Basic</h2>
                </div>
                <div className='amount'>
                    <h2>$29.99</h2>
                    <h5>/Month</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies.</p>
                <ul>
                    <li>
                        <div className='square2'></div> <h5>Eget egestas purus viverra accumsan</h5>
                    </li>
                    <li>
                        <div className='square2'></div> <h5>Eget egestas purus viverra accumsan</h5>
                    </li>
                    <li>
                        <div className='square2'></div> <h5>Eget egestas purus viverra accumsan</h5>
                    </li>
                </ul>
                <button onClick={()=>{router.push("https://wa.me/201558849371")}}>Get Started</button>
            </div>
            <div className='price'>
                <div className='priceHead'>
                    <img src='./Assets/p4.svg'/>
                    <h2>Advanced</h2>
                </div>
                <div className='amount'>
                    <h2>$99.99</h2>
                    <h5>/Month</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies.</p>
                <ul>
                    <li>
                        <div className='square2'></div> <h5>Eget egestas purus viverra accumsan</h5>
                    </li>
                    <li>
                        <div className='square2'></div> <h5>Eget egestas purus viverra accumsan</h5>
                    </li>
                    <li>
                        <div className='square2'></div> <h5>Eget egestas purus viverra accumsan</h5>
                    </li>
                    <li>
                        <div className='square2'></div> <h5>Vitae proin sagittis nisl rhoncus mattis</h5>
                    </li>
                    <li>
                        <div className='square2'></div> <h5>Fermentum et sollicitudin ac orci phasellus</h5>
                    </li>
                    <li>
                        <div className='square2'></div> <h5>Eget egestas purus viverra accumsan</h5>
                    </li>
                </ul>
                <button onClick={()=>{router.push("https://wa.me/201558849371")}}>Get Started</button>
            </div>
            <div className='price'>
                <div className='priceHead'>
                    <img src='./Assets/p5.svg'/>
                    <h2>pro</h2>
                </div>
                <div className='amount'>
                    <h2>$49.99</h2>
                    <h5>/Month</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies.</p>
                <ul>
                    <li>
                        <div className='square2'></div> <h5>Eget egestas purus viverra accumsan</h5>
                    </li>
                    <li>
                        <div className='square2'></div> <h5>Eget egestas purus viverra accumsan</h5>
                    </li>
                    <li>
                        <div className='square2'></div> <h5>Eget egestas purus viverra accumsan</h5>
                    </li>
                    <li>
                        <div className='square2'></div> <h5>Vitae proin sagittis nisl rhoncus mattis</h5>
                    </li>
                </ul>
                <button onClick={()=>{router.push("https://wa.me/201558849371")}}>Get Started</button>
            </div>
        </div>
        </>
    )
}
export default Pricing;