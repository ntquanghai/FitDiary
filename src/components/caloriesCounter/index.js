export const CaloriesCounter = (props) => {
    {/*1. At calories (Around 100 calories) 2. Exceeding calories 3. Not reaching calories 4. Calories goal not defined */}

    const currentCalo = props.currentCalo
    const caloNeeded = props.caloNeeded
    const errorMargin = props.errorMargin
    const dayMeal = props.dayMeal



    if(dayMeal) {
        if(dayMeal.cal > props.caloNeeded + props.errorMargin) {
            return(
                <div className = "flex flex-col">
                    <div className = "text-3xl font-extrabold">   
                                    CALORIES INTAKE
                                </div>
                    <div className = "text-red-500 font-bold text-xl">
                        {dayMeal.cal}/{caloNeeded.value}
                    </div>
                    <div className = "text-red-500 font-semibold text-lg">
                        You are exceeding your calories intake!
                    </div>
                </div>
            )
        }
        else if(dayMeal.cal < props.caloNeeded - props.errorMargin) {
            return(
                
                <div className = "flex flex-col">
                    <div className = "text-3xl font-extrabold">   
                                    CALORIES INTAKE
                                </div>
                    <div className = "text-red-500 font-bold text-xl">
                        {dayMeal.cal}/{caloNeeded.value}
                    </div>
                    <div className = "text-red-500 font-semibold text-lg">
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
                <div className = " flex flex-col">
                        <div className = "text-3xl font-extrabold">   
                                        CALORIES INTAKE
                                    </div>
                        <div className = "text-green-500 font-bold text-2xl">
                            {dayMeal.cal}/{caloNeeded.value}
                        </div>
                        <div className = "text-green-500 text-xl">
                            You are around your calories goal!
                        </div>
                </div>
            )
        }
    }
}