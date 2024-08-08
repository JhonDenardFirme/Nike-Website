import { customers } from "../constants";
import { Star } from "@phosphor-icons/react";

const CustomerReviews = () => {
  return (
    <div className="flex flex-col  mt-8 justify-center items-center w-full">

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center">

          <h2 className="">
          <span className="text-4xl font-semibold whitespace-nowrap">What Does Our</span>
          <span className="text-4xl font-black whitespace-nowrap text-orange-500"> Customers</span>
          <span className="text-4xl font-semibold whitespace-nowrap"> Say?</span>
          </h2>
        </div>

        <p className="mt-4 text-base max-sm:text-sm text-neutral-700 text-pretty w-3/5 text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

      </div>

      <div className="profile-container grid grid-cols-3 gap-8 my-16">

        {
          customers.map(customer => (
            <div className="flex flex-col justify-center items-center" key={customer.id}>
              <div className="h-36 w-36 rounded-full overflow-hidden">
                <img src={customer.profile} className="h-full w-full object-cover" alt="Profile" />
              </div>
              <p className="text-2xl font-semibold whitespace-nowrap mt-4">{customer.name}</p>
              <div className="flex flex-row justify-center items-center gap-2 mt-4">
                <Star size={18} weight="fill" color="#F97316" className=""/>
                <p className="text-xs text-slate-700">{customer.rating}</p>
              </div>
              <p className="text-sm text-slate-700 w-2/3 text-center mt-2">{customer.comment}</p>

            </div>
          ))
        }
      </div>
      


    </div>
  )
}

export default CustomerReviews