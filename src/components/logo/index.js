import React, {useState, useEffect, Fragment} from "react";

export const Logo = (props) => {
    return(
        <div className = "">
            <div className = {"flex flex-row "+props.customClass}>
                <div className = "font-extrabold text-red-400 select-none" style = {{fontSize:props.fSize}}>Fit</div>
                <div className = "font-extrabold select-none" style = {{fontSize:props.fSize}}>Diary</div>
            </div>
        </div>
    )
}