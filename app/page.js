import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Certificate from "./components/Certificate/Certificate";
import Benefits from "./components/Benefits/Benefits";
import Programs from "./components/Programs/Programs";
import Bmi from "./components/Bmi/Bmi";
import Started from "./components/Started/Started";
import Footer from "./components/Footer/Footer";
import Result from "./components/Result/Result";

export default function Home() {
  return (
   <>
   <div className="App">
    <Hero/>
    <Certificate/>
    <Programs/>
    <Result/>
    <Bmi/>
    <Benefits/>
    <Started/>
   </div>
   </>
  );
}
