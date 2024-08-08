import { productList } from "../constants";
import { footerLogo } from "../assets/images";
import { facebook} from "../assets/icons";
import { twitter } from "../assets/icons";
import { instagram } from "../assets/icons";
import { helpList } from "../constants";


const Footer = () => {
  return (
    <div className="bg-zinc-950 grid grid-cols-4 h-96 w-screen px-16 py-16">
      
      <div className="col-span-2 flex flex-col justify-start items-start">
        <img src={footerLogo} className="w-48 h-auto"></img>
        <p className="text-sm text-white w-2/3 text-pretty font-light mt-8">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
        <div className="flex flex-row gap-4 w-full h-auto mt-4">
          <div className="size-8 bg-white flex flex-col justify-center items-center rounded-full">
            <img src={facebook} className="p-1 object-cover rounded-full overflow-hidden"></img>
          </div>

          <div className="size-8 bg-white flex flex-col justify-center items-center rounded-full">
          <img src={instagram} className="p-1  object-cover rounded-full overflow-hidden"></img>
          </div>

          <div className="size-8 bg-white flex flex-col justify-center items-center rounded-full">
          <img src={twitter} className="p-1 object-cover rounded-full overflow-hidden"></img>
          </div>
          
          
          
          
        </div>
      
      </div>


      <div className="flex flex-col justify-start items-start">
        <p className="mb-4 text-white text-2xl font-semibold">Products</p>
          {
            productList.map(product => (
              <p className="text-sm text-white font-light mt-2 hover:cursor-pointer hover:font-semibold hover:text-orange-500 transition-all duration-300 ease-out">{product.list}</p>
            ))
          }
      </div>


      <div className="flex flex-col justify-start items-start">
        <p className="mb-4 text-white text-2xl font-semibold">Help</p>
          {
            helpList.map(help => (
              <p className="text-sm text-white font-light mt-2 hover:cursor-pointer hover:font-semibold hover:text-orange-500 transition-all duration-300 ease-out">{help.list}</p>
            ))
          }
      </div>





    </div>
  );
}

export default Footer