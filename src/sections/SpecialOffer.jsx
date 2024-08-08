import { offer } from "../assets/images"
import { CaretRight } from "@phosphor-icons/react";

const SpecialOffer = () => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-start items-center mt-8">
      <div>
        <img src={offer}></img>
      </div>    
      
      <div>
          <h2>
            <span className="text-4xl font-semibold whitespace-nowrap"> Our</span>
            <span className="text-4xl font-black whitespace-nowrap text-orange-500"> Special</span>
            <span className="text-4xl font-semibold whitespace-nowrap"> Offers</span>
          </h2>

          <p className="mt-4 text-base max-sm:text-sm text-neutral-700 text-pretty w-4/5">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>

          <p className="mt-4 text-base max-sm:text-sm text-neutral-700 text-pretty w-4/5">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
      
          <div className="flex flex-row gap-8">
            <div className="flex flex-row justify-center items-center bg-orange-500 h-10 w-40 rounded-lg mt-8 hover:bg-orange-400 transition-all ease-in-out duration-300">
              <p className="text-sm font-semibold mr-2 hover:text-base text-white">View Details</p>
              <CaretRight size={16} weight="bold" className="text-orange-500 size-5 p-1 rounded-full bg-white"/>
            </div>

            <div className="flex flex-row justify-center items-center bg-white border-2 border-slate-700 h-10 w-40 rounded-lg mt-8 hover:bg-orange-400 transition-all ease-in-out duration-300">
            <p className="text-sm font-semibold mr-2 hover:text-base text-slate-700">Learn More</p>
            
            </div>
          </div>

      </div>

    </div>


  )
}

export default SpecialOffer