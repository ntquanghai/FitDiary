import React, {useState, useEffect, Fragment} from "react";
import { Link } from "react-router-dom";

export const Category = (props) => {
    return(
        <Link to = {props.location}>
            <div className = "hover:text-red-300">
                {props.categoryName}
            </div>
        </Link>
    )
}