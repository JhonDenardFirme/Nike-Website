import { CaretRight } from "@phosphor-icons/react";
import {stats} from "../constants";
import background from "../assets/images/background.svg";
import { bigShoe1 } from "../assets/images";
import { bigShoe2 } from "../assets/images";
import { bigShoe3 } from "../assets/images";
import { useState } from "react";




const Hero = () => {

  const [selectedShoe, setSelectedShoe] = useState(bigShoe1);

  const handlePic = (e) => {
    const shoe = e.currentTarget.getAttribute('data-shoe');

    if(shoe === "bigShoe1"){
      setSelectedShoe(bigShoe1);
    }

    if(shoe === "bigShoe2"){
      setSelectedShoe(bigShoe2);
    }

    if(shoe === "bigShoe3"){
      setSelectedShoe(bigShoe3);
    }

  }

  return (
    <>
    <div className="relative section-container flex flex-col z-10 h-screen w-full justify-center align-middle">

      <h2 classname="flex flex-col w-screen bg-red-100 max-sm:justify-center max-sm:items-center">
        <span className="text-6xl font-semibold whitespace-nowrap 
                        max-sm:text-4xl max-sm:text-center pr-8">The New Arrival </span> <br></br>
        <span className="text-8xl font-black text-orange-500 whitespace-nowrap max-sm:text-6xl max-sm:w-screen max-sm:text-center">Nike</span>
        <span className="text-8xl font-semibold whitespace-nowrap max-sm:text-6xl max-sm:w-screen max-sm:text-center"> Shoes</span>
      </h2>

      <p className="mt-2 text-base max-sm:text-sm text-neutral-700">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

      <div className="flex flex-row justify-center items-center bg-orange-500 h-10 w-40 rounded-lg mt-8 hover:bg-orange-400 transition-all ease-in-out duration-300">
        <p className="text-sm font-semibold mr-2 hover:text-base text-white">Shop Now</p>
        <CaretRight size={16} weight="bold" className="text-orange-500 size-5 p-1 rounded-full bg-white"/>
      </div>

    
      <div className="stats flex flex-row">
        {stats.map(stat => (
          <div key="stat.label" className="flex flex-col mt-24 w-32 justify-center">
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-neutral-700 -my-1">{stat.label}</p>
          </div>
        ))}

      </div>


      

    </div>

    <div className="absolute top-0 right-0 w-1/2 h-screen z-20 flex justify-center items-center">
      <div className="relative w-full h-full">
        <img src={background} className="w-full h-full object-cover" alt="Background" />

        <div className="absolute top-0 left-0 hugePic p-32 flex flex-row w-full justify-center items-center">
          <img src={selectedShoe} className="full h-full"></img>
        </div>
        
        <div className="absolute -mt-40 left-0 z-30 w-full flex flex-row gap-16 justify-center items-center">
          <div data-shoe="bigShoe1" onClick={handlePic} className="group size-20 bg-white hover:border-2 border-2 border-slate-300 hover:border-orange-500 hover:cursor-pointer flex flex-col justify-center items-center rounded-lg">
            <img src={bigShoe1} className="w-14 h-14 group-hover:scale-[115%] transition-scale duration-300 ease-out" alt="Big Shoe" />
          </div>

          <div data-shoe="bigShoe2" onClick={handlePic} className="group size-20 bg-white border-2 border-slate-300 hover:border-2 hover:border-orange-500 hover:cursor-pointer flex flex-col justify-center items-center rounded-lg">
            <img src={bigShoe2} className="w-14 h-14 group-hover:scale-[115%] transition-scale duration-300 ease-out" alt="Big Shoe" />
          </div>

          <div data-shoe="bigShoe3" onClick={handlePic} className="group size-20 bg-white border-2 border-slate-300 hover:border-2 hover:border-orange-500 hover:cursor-pointer flex flex-col justify-center items-center rounded-lg">
            <img src={bigShoe3} className="w-14 h-14 group-hover:scale-[115%] transition-scale duration-300 ease-out" alt="Big Shoe" />
          </div>

        </div>

        
        

      </div>
    </div>
    



    
    </>
  )
}

export default Hero