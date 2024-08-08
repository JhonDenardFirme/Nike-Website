import { CaretRight } from "@phosphor-icons/react";
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <div className="grid grid-cols-2 mt-4">

      <div className="flex flex-col justify-center items-start">
          <h2>
            <span className="text-4xl font-semibold whitespace-nowrap"> We Provide You</span> <br></br>
            <span className="text-4xl font-black whitespace-nowrap text-orange-500"> Super Quality</span>
            <span className="text-4xl font-semibold whitespace-nowrap"> Shoes</span>
          </h2>

          <p className="mt-4 text-base max-sm:text-sm text-neutral-700 text-pretty w-4/5">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>

          <p className="mt-4 text-base max-sm:text-sm text-neutral-700 text-pretty w-4/5">Our dedication to detail and excellence ensures your satisfaction</p>
      
          <div className="flex flex-row justify-center items-center bg-orange-500 h-10 w-40 rounded-lg mt-8 hover:bg-orange-400 transition-all ease-in-out duration-300">
            <p className="text-sm font-semibold mr-2 hover:text-base text-white">Shop Now</p>
            <CaretRight size={16} weight="bold" className="text-orange-500 size-5 p-1 rounded-full bg-white"/>
          </div>

      </div>
      
      
      <div className="flex flex-col justify-center items-center">
          <img src={shoe8} className="w-9/10 h-9/10"></img>
      </div>

    </div>


  )
}

export default SuperQuality