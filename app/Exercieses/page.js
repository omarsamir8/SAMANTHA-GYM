import HealthyHero from "../components/Healthy/Health";
import Videos from "../components/Videos/Videos";

function Excercises(){
    return (
        <>
        <div className="Excercises">
            <HealthyHero desc="Explore the amazing benefits of regular exercise through our detailed videos. Learn how each workout improves your strength, flexibility, and overall health. Our exercise videos guide you step by step to help you train safely and effectively while staying motivated." name="Benefits of exercises & videos" title="Exercises"/>
            <Videos/>
        </div>
        </>
    )
}
export default Excercises;