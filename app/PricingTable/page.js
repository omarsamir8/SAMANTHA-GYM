import PriceHero from "../components/PriceHero/PriceHero";
import Pricing from "../components/Pricing/Pricing";
export const metadata = {
  title: "Pricing Table",
  description: "Start Your Body Goal from Choosing Our Package.",
};

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