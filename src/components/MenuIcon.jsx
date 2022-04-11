import React from "react";

const [open, setOpen] = useState(false);
const handleClick =() => setOpen (!open);
export default function MenuIcon (){

    return(
        <>
        <button className="btn-menu" onClick={handleClick}> 
        <img src="/img/Menubar.svg" className="h-6"/>
         </button>
        </>
    )
}