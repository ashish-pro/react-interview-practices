import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css'
function StarRating({ noOfStars = 5 }) {
    const [rating, setRatiing]  = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRatiing(getCurrentIndex);
    }

    function handleMouseHover(getCurrentIndex){
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(getCurrentIndex){
        setHover(rating);
    }
  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1
        return <FaStar 
        key={index}
        className={index <= (hover || rating) ? 'active' : 'inactive'}
        onClick={()=> handleClick(index)}
        onMouseMove={()=>handleMouseHover(index)}
        onMouseLeave={()=>handleMouseLeave}
        size={40}
        />;
      })}
    </div>
  );
}

export default StarRating;
