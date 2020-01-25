import React, { useState } from "react";

export default function Button() {

  const [buttonText, setButtonText] = useState("Click me, please");
  
  function handleClick() {
    return setButtonText("Thanks, been clicked!");
  }
    return <button
        // className="light"
        onClick={handleClick}>{buttonText}</button>
}




//useState
//useRef
//useContext
//useEffect
//useReducer
//useFetch
//.....