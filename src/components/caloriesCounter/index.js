export const CaloriesCounter = (props) => {
    {/*1. At calories (Around 100 calories) 2. Exceeding calories 3. Not reaching calories 4. Calories goal not defined */}

    const currentCalo = props.currentCalo
    const caloNeeded = props.caloNeeded
    const errorMargin = props.errorMargin



    if(props.currentCalo > props.caloNeeded + props.errorMargin) {
        return(
            <div className = "flex flex-col">
                <div className = "text-red-500 font-bold" style = {{fontSize:"42px"}}>
                    {currentCalo}/{caloNeeded.value}
                </div>
                <div className = "text-red-500 font-semibold text-3xl">
                    You are exceeding your calories intake!
                </div>
            </div>
        )
    }
    else if(props.currentCalo < props.caloNeeded - props.errorMargin) {
        return(
            <div className = "flex flex-col">
                <div className = "text-red-500 font-bold" style = {{fontSize:"42px"}}>
                    {currentCalo}/{caloNeeded.value}
                </div>
                <div className = "text-red-500 font-semibold text-3xl">
                    You are not reaching your calories intake!
                </div>
            </div>
        )
    }
    else if(!props.caloNeeded) {
        return(
            <div className = "flex flex-col justify-center ">
                <div className = "font-semibold text-3xl text-gray-500">
                    You have not set up your calories goal. 
                </div>
                <div className = "font-semibold text-red-400 text-3xl hover:text-red-500 cursor-pointer">
                    Click here to start!
                </div>
            </div>
        )
    }
    else {
        return(
            <div className = "flex flex-col">
                <div className = "text-green-500 font-bold" style = {{fontSize:"42px"}}>
                    {currentCalo.value}/{caloNeeded.value}
                </div>
                <div className = "text-green-500 text-2xl">
                    You are around your calories goal!
                </div>
            </div>
        )
    }
}