
import { services } from '../constants';

const Services = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-8">

      {
      services.map(service => (

      <div className="grid-cell w-100 " key={service.label}>
        <div className='size-16'>
          <img src={service.image} className='p-4 bg-orange-500 rounded-full'></img>
        </div>
        
        <p className='text-2xl font-semibold whitespace-nowrap mt-4'>{service.label}</p>
        <p className='text-sm text-center mt-2 w-3/4 text-pretty'>{service.text}</p>
      </div>
      ))

      }


    </div>
  )
}

export default Services