import { useState } from "react";
import "./Dark.css";

export default function Dark(){

    let[darkMode,setDarkMode]=useState(false);

    return(
        <div className={ darkMode ? "dark" : "light"}>

            <p>Iron Man</p>

            <p>2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.</p>

            <button onClick={ ()=>setDarkMode(!darkMode) }>Dark Mode</button>
        </div>
    )
}