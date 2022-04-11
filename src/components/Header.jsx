import React from "react"
import Menusito from "./Menusito"
import { useState } from "react";


export default function Header() {

   
    const [open, setOpen] = useState(false);
    const handleClick =() => setOpen (!open);

    return (
        <div>

        <div className="bg-indigo-500 h-12 rounded-sm mb-3"> 
        <button className="btn-menu" onClick={handleClick}> 
                <img src="/img/Menubar.svg" className="h-6"/>
            </button>
          {open && <Menusito>
              <button className="btn-menu" onClick={handleClick}> 
                <img src="/img/CloseMenu.svg" className="h-6"/>
            </button></Menusito>}
        </div>
        </div>
        
    );
  }
  