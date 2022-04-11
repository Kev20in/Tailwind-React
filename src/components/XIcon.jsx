import React from "react";

export default function MenuIcon (){
    const [open, setOpen] = useState(false);
    const handleClick =() => setOpen (!open);
    return(

        <button className="btn-menu hidden" onClick={handleClick}> 
        <img src="/img/CloseMenu.svg" className="h-6"/>
         </button>
    );
}