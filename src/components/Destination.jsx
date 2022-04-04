import React from "react";
import popularDestinations from "../data/popularDestinations";
import DestinationCard from "./DestinationCard";

export default function Destination() {
  return (
    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 pt-4 grid lg:grid-cols-2">
    <div className="grid lg:col-span-2">
      <h2 className="mb-2 text-xl font-bold text-gray-900 lg:text-4xl">Popular destination</h2>
      <p cłassName=" text-gray-600 lg:text-xl">A selection of great work-friendly cities with lots to see and explore.</p>
    </div>
    
      <div className="hidden lg:block lg:col-start-1 mr-8 mt-6"> <img className="mr-10 inset-0 h-full object-cover object-center rounded-sm"
      src="/img/beach-work.jpg" 
      alt="work girl"/> </div>
  <div cłassName="mt-6 grid gap-6">

  {popularDestinations.map((Ubicacion)=> (
      <DestinationCard destination={Ubicacion} key={Ubicacion.city}/>
      ))}
   </div>
      <div className="p-5">
      </div>
 
</div>
  );
}
