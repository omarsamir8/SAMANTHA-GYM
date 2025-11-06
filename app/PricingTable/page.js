import PriceHero from "../components/PriceHero/PriceHero";
import Pricing from "../components/Pricing/Pricing";

function pricingTable(){
    return (
        <>
        <div className="pricingTable">
            <PriceHero/>
            <Pricing/>
        </div>
        </>
    )
}
export default pricingTable;