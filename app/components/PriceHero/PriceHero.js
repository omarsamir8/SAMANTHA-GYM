import './PriceHero.css'
function PriceHero(){
    return (
        <div className="PriceHero">
            <div className='PriceTitle'>
                <div className='h-1'>
                    <h5>Home</h5>
                    <p>Pricing Table</p>
                </div>
                <h2>
                    Start Your Body Goal from Choosing Our Package.
                </h2>
                <p>Metus aliquam eleifend mi in nulla. Scelerisque purus semper eget duis at tellus at urna.</p>
            </div>
            <div className='h-right'>
                <div className='img1'>
                <img  src='./Assets/p1.svg'/>
                </div>
                <img className='img2' src='./Assets/p2.svg'/>
            </div>
        </div>
    )
}
export default PriceHero;