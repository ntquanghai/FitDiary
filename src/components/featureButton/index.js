import React, {useState, useEffect, Fragment} from "react";
 
export const FeatureButton = (props) => {
    return(
        <div className = "border-2 rounded p-8 flex flex-col hover:bg-gray-50 cursor-pointer" style = {{width:"200px"}}>
            <div className = "font-bold text-base text-center">{props.feature}</div>
            <div className = "mx-auto" style = {{}}>{props.img}</div>
        </div>
    )
}