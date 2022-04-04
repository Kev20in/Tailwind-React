import React from "react";
import Destination from "./components/Destination";
import Header from "./components/Header";
import Started from "./components/Started";
export default function App() {
  return (
   <div>
     <Header/>
    <div className="bg-gray-100 lg:grid grid-cols-2 2xl:grid-cols-5">

    <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full 2xl:col-span-2">
      <div className="xl:max-w-xl">
        <img className="mb-5 h-10 sm:h-14 sm:pl-24 lg:h-16 lg:pl-0 xl:h-20" src="/img/logo.svg" alt="Workstation"/>
        
        <img 
        className=" rounded-lg shadow-lg sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
        src="/img/beach-work.jpg" 
        alt="work girl"/>
        
        <h1 className="mt-4 font-extrabold text-2xl sm:mt-8 sm:text-4xl lg:text-2xl lg:inline-block xl:text-4xl">You can work from anywhere. 
          <br className=""/> <span class="text-indigo-500"> Take advantage of it.</span></h1>
          <p className="mt-2  text-gray-600 sm:mt-4 sm:text-lg text-justify lg:text-lg">Workcation helps you find work-friendly rentals
            in beautiful locations so you can enjoy some
            nice weather even when you're not on vacation.</p>
            <div className="mt-4 space-x-4 sm:mt-6">
              <a className="btn-primary" href="###">Book your escape</a>
              <a className="btn-secundary" href="###">Learn More</a>
            </div> 
            </div>
          </div>
          
          <div className="hidden relative lg:block 2xl:col-span-3" >
            <img className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
            src="/img/beach-work.jpg" 
            alt="work girl"/>
          </div>
          <div className="bg-gray-100 col-span-2 xl:col-span-5 p-2"></div>
          <div className="bg-indigo-500 col-span-2 xl:col-span-5 p-4 lg:p-8"></div>
        </div>  
         <Destination/>
         <Started/> 
         <footer className="bg-gray-300 hidden lg:block">
           @CopyRight 2022 Hecho como practica por Kevin Agramonte Cruz
         </footer>
    </div>
  );
}
