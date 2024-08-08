import { CaretRight } from "@phosphor-icons/react";
import './App.css'
import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer } from './sections'
import { Nav } from './components';

function App() {


  return (
    <>
      <main className="relative">
        <Nav/>

        <section className=""> 
          <Hero/>
        </section>

        <section className="section-container mt-8"> 
          <PopularProducts/>
        </section>

        <section className="section-container"> 
          <SuperQuality/>
        </section>

        <section className="section-container"> 
          <Services/>
        </section>
        
        <section className="section-container"> 
          <SpecialOffer/>
        </section>

        <section className="section-container bg-slate-200 mt-8"> 
          <CustomerReviews/>
        </section>
        <section className="section-container"> 
          <Subscribe/>
        </section>
        <section className=""> 
          <Footer/>
        </section>



      </main>
    </>
  )
}

export default App
