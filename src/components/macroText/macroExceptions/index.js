export const MacroException = (props) => { 
    if(props.currentValue > props.neededValue+props.margin) {
        return(
            <div className = "font-semibold text-xl text-red-500">
                You are exceeding your recommended {props.valueName} intake! 
            </div>
        )
    }
    else if(props.currentValue < props.neededValue-props.margin) {
        return(
            <div className = "font-semibold text-xl text-red-500">
                You are not reaching your recommended {props.valueName} intake! 
            </div>
        )
    }
    else {
        return(
            <div className = "font-semibold text-xl text-green-500">
                You are consuming the recommended {props.valueName} intake! 
            </div>
        )
    }
}