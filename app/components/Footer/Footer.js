import './Footer.css'
function Footer(){
    return(
        <>
        <div className='Foooter'>
            <div className="Footer">
                        <div className="footertitle">
                            <h2>SAMANTHA</h2>
                            <p>Elementum facilisis leo vel fringilla est ullamcorper. Ac tortor vitae purus faucibus ornare suspendisse.</p>
                        </div>
                        <div className="footerMenue">
                            <h2 style={{color:"gray",fontSize:"20px"}}>MENU</h2>
                            <ul>
                                <li>
                                    Home
                                </li>
                                <li>
                                    About
                                </li>
                                <li>
                                    Exercieses
                                </li>
                                <li>
                                    Contact
                                </li>
                                <li>
                                    Schedule
                                </li>
                                <li>
                                    Profile
                                </li>
                            </ul>
                        </div>
                        <div className="footerContact">
                            <h2 style={{color:"gray",fontSize:"20px"}}>CONTACTS</h2>
                            <ul>
                                <li>
                                <div className="square"></div> El Ahram Street ,Banha,Egypt
                                </li>
                                <li>
                                <div className="square"></div> +201558849371
                                </li>
                                <li>
                                    <div className="square"></div> Omarsamir@gmail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='footercopyright'>
                        <p>© 2025 Monkey.D.Luffy . All rights reserved</p>
                        <ul>
                            <li>
                                Privcy Policy
                            </li>
                            <li>
                                Term of service
                            </li>
                            <li>
                                Legal info
                            </li>
                        </ul>
                    </div>
        </div>
        
        </>
    )
}
export default Footer;