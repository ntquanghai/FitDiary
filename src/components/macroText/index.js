import { MacroException } from "./macroExceptions"

export const MacroText = (props) => {

    const foodData = props.foodData
    const currentCalo = props.currentCalo
    const caloNeeded = props.caloNeeded
    const errorMargin = props.errorMargin
    const dayMeal = props.dayMeal

    if(dayMeal) {
        return(
            <div className = "flex  font-extrabold flex-col text-3xl">
                MACRONUTRIENTS
                <div className = "mt-2 flex flex-col">
                    <div className = "flex-row flex">
                        <div className = " text-lg font-semibold">
                            Protein ({caloNeeded.macro.protein.percent}%): 
                        </div>
                        <div className = "ml-2 text-lg font-normal">
                            {dayMeal.pro}g/{caloNeeded.macro.protein.grams}g
                        </div>
                    </div>
                    <div className = "">
                        <MacroException
                            currentValue = {dayMeal.pro}
                            neededValue = {caloNeeded.macro.protein.grams}
                            margin = {10}
                        ></MacroException>
                    </div>
                </div>
                <div className = "mt-2 flex flex-col">
                    <div className = "flex-row flex">
                        <div className = " text-lg font-semibold">
                            Fats ({caloNeeded.macro.fats.percent}%): 
                        </div>
                        <div className = "ml-2 text-lg font-normal">
                            {dayMeal.fat}g/{caloNeeded.macro.fats.grams}g
                        </div>
                    </div>
                    <div>
                        <MacroException
                            currentValue = {dayMeal.fat}
                            neededValue = {caloNeeded.macro.fats.grams}
                            margin = {10}
                        ></MacroException>
                    </div>
                </div>
                <div className = "mt-2 flex flex-col">
                    <div className = "flex-row flex">
                        <div className = " text-lg font-semibold">
                            Carbohydrates ({caloNeeded.macro.carbs.percent}%): 
                        </div>
                        <div className = "ml-2 text-lg font-normal">
                            {dayMeal.carb}g/{caloNeeded.macro.carbs.grams}g
                        </div>
                    </div>
                    <div>
                        <MacroException
                            currentValue = {dayMeal.carb}
                            neededValue = {caloNeeded.macro.carbs.grams}
                            margin = {10}
                        ></MacroException>
                    </div>
                </div>
            </div>
        )
    }
}