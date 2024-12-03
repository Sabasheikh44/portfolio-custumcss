'use client'
 
import Image from "next/image";
import "../style/hero.css";
import Typewriter from 'typewriter-effect';

function Hero (){
   return(
       <div className="hero-container">
           <div className="hero-boxex-con">
               {/* {left} */}
               <div>
               
           <Image
                 src={"/images/dp-img.jpg"}
                width={200}
                height={200}
                className="hero-img"
                alt="Profile"/>
               
               </div>
               {/* {right} */}
               <div className="hero-right-div">
                   <h1 className="title-hero">I m Areeba Wasi<span className="hero-span"> Front-end Developer. </span> 
                   </h1>
                   <h3 className="des-hero">
                       {/* {"Typewriter"} */}
                       <Typewriter
                     options={{
                     strings: [' I m Areeba, a commerce background student turned IT enthusiant,passionate about coding and growth in tech.'],
                     autoStart: true,
                    loop: true,
                      }}
                         />

           </h3>
                        <button className="hero-button">HIRE ME</button>
               </div>
           </div>

       </div>
   )
}
export default Hero;