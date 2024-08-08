
import { products } from "../constants";
import {Star} from "@phosphor-icons/react";


const PopularProducts = () => {
  return (
    <div className="w-full h-[70vh]">
      <h2> 
        <span className="text-4xl font-semibold whitespace-nowrap">Our </span>
        <span className="text-4xl font-black whitespace-nowrap text-orange-500"> Popular</span>
        <span className="text-4xl font-semibold whitespace-nowrap"> Products</span>
      </h2>

      <p className="mt-4">
        <span className="mt-4 text-base max-sm:text-sm text-neutral-700 whitespace-nowrap"> Experience top-notch quality and style with our sought-after selections.</span>
        <br></br>
        <span className="mt-2 text-base max-sm:text-sm text-neutral-700 whitespace-nowrap"> Discover a world of comfort, design, and value</span>
      </p>

      <div className="container">
        {
          products.map(product => (
            <div className="cell" key={product.id}>
            <img className="rounded-lg" src={product.image} alt={product.title} />
            <div className="head-container flex flex-row w-full justify-between mt-4">
              <div className="rating flex flex-row w-full items-center gap-2">
                <Star size={18} weight="fill" color="#F97316" className=""/>
                <p className="text-sm text-slate-700">{product.rating}</p>
              </div>
              <div className="product-price text-sm font-bold text-orange-500">{ `$${product.price}`}</div>
            </div>



            <div className="product-title">
              <p className="text-2xl text-slate-700 font-semibold mt-2">{product.title}</p>
            </div>
            
          </div>
          ))
        }





      </div>

    </div>
  )
}

export default PopularProducts