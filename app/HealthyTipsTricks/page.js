import Blog from "../components/Blog/Blog";
import HealthyHero from "../components/Healthy/Health";
export const metadata = {
  title: "Healthy Tips & Tricks",
  description: "Discover simple and effective healthy tips and tricks to improve your lifestyle. From nutrition advice and workout ideas to daily habits that boost your energy — find everything you need to stay fit, strong, and motivated.",
};
function HealthyTipsTricks(){
    return (
        <>
        <div className="HealthyTipsTricks">
            <HealthyHero desc="Discover simple and effective healthy tips and tricks to improve your lifestyle. From nutrition advice and workout ideas to daily habits that boost your energy — find everything you need to stay fit, strong, and motivated." name="Healthy Tips & Tricks" title="Tricks"/>
            <Blog img="./Assets/b1.jpg" Date="31/10/2025" Author="By Doctor VigaBank" name="How diet influences flexibility" details="Diet plays a significant but often overlooked role in flexibility. While stretching, mobility work, and exercise are the most direct ways to improve flexibility, the foods you eat can greatly influence how supple and responsive your muscles, tendons, and joints are."/>
            <Blog img="./Assets/b2.jpg" Date="31/10/2025" Author="By Doctor VigaBank" name="7 Tips for Effective Practice" details="🧘‍♀️ 1. Set Clear, Specific Goals ⏰ 2. Be Consistent, Not Extreme 🧠 3. Focus on Quality Over Quantity 🔄 4. Warm Up and Cool Down 📈 5. Track Your Progress 💪 6. Rest and Recover 🎯 7. Stay Positive and Patient"/>
            <Blog img="./Assets/b3.jpg" Date="31/10/2025" Author="By Doctor VigaBank" name="Traning at home: how to maintain the tone" details="💪 1. Use Bodyweight Effectively ⏱️ 2. Train Regularly — Even 20–30 Minutes Works 🔄 3. Add Progression 🍎 4. Eat for Lean Muscle Maintenance 🧘 5. Stretch and Stay Flexible 💤 6. Get Enough Sleep and Recovery 🔥 7. Stay Consistent and Motivated"/>
            <Blog img="./Assets/b4.jpg" Date="31/10/2025" Author="By Doctor VigaBank" name="5 reasons to start playing sports" details="🧠 1. Boosts Mental Health 💪 2. Improves Physical Fitness ❤️ 3. Builds Discipline and Self-Motivation 👥 4. Encourages Teamwork and Communication 😄 5. Promotes a Healthy Lifestyle and Fun"/>
        </div>
        </>
    )
}
export default HealthyTipsTricks;