export const MacroException = (props) => { 
    if(props.currentValue > props.neededValue+props.margin) {
        return(
            <div className = "font-normal text-lg text-red-500">
                You are exceeding your recommended {props.valueName} intake! 
            </div>
        )
    }
    else if(props.currentValue < props.neededValue-props.margin) {
        return(
            <div className = "font-normal text-lg text-red-500">
                You are not reaching your recommended {props.valueName} intake! 
            </div>
        )
    }
    else {
        return(
            <div className = "font-normal text-lg text-green-500">
                You are consuming the recommended {props.valueName} intake! 
            </div>
        )
    }
}