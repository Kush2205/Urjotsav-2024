import Header from './components/Header';
import Layer1 from "./images/Layer1.jpg";
import '../src/App.css';
import About from '../src/components/About';
import planet from "../src/images/planet.png";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from './components/Contact';

function App() {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  
  


  useGSAP(() => {
    gsap.to("#image", {
     y:50,
      scale: 3.5,
      scrollTrigger: {
        trigger: "#image",
        start: "top %",
        end: "bottom",
        scrub: true,
        fastScrollEnd: true,
        markers:true
      }
    });
 
    gsap.to("#name", {
      y: -200,
      scrollTrigger: {
        trigger: "#name",
        start: "top 1%",
        end: "bottom",
        scrub: true,
        fastScrollEnd: true,
      }
    });
   
   
  });

  return (
    <>
      <div style={{ backgroundImage: `url(${Layer1})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full h-[200vh] overflow-hidden z-4'>

        <div className='w-full h-screen'>
          <Header />

          <div id='name' className='flex items-center justify-center h-screen w-full absolute'>
            <h1 id='title' className='text-9xl text-white font-Megrim'>URJOTSAV</h1>
          </div>

          <div id='image' className='h-screen flex p-16 justify-center items-end mt-4'>
            <img  src={planet} className='relative z-10 w-[75%]' alt="Planet" />
          </div>
        </div>
        <About/>
        <Contact/>

      </div>
    </>
  );
}

export default App;
