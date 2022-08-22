import { MacroException } from "./macroExceptions"

export const MacroText = (props) => {

    const currentCalo = props.currentCalo
    const caloNeeded = props.caloNeeded
    const errorMargin = props.errorMargin


    return(
        <div className = "flex mt-12 font-extrabold flex-col" style = {{fontSize: "48px"}}>
            MACRONUTRIENTS
            <div className = "mt-2 flex flex-col">
                <div className = "flex-row flex">
                    <div className = " text-xl font-semibold">
                        Protein ({caloNeeded.macro.protein.percent}%): 
                    </div>
                    <div className = "ml-2 text-xl font-normal">
                        {currentCalo.macro.protein.grams}g/{caloNeeded.macro.protein.grams}g
                    </div>
                </div>
                <div className = "">
                    <MacroException
                        currentValue = {currentCalo.macro.protein.grams}
                        neededValue = {caloNeeded.macro.protein.grams}
                        margin = {10}
                    ></MacroException>
                </div>
            </div>
            <div className = "mt-2 flex flex-col">
                <div className = "flex-row flex">
                    <div className = " text-xl font-semibold">
                        Fats ({caloNeeded.macro.fats.percent}%): 
                    </div>
                    <div className = "ml-2 text-xl font-normal">
                        {currentCalo.macro.fats.grams}g/{caloNeeded.macro.fats.grams}g
                    </div>
                </div>
                <div>
                    <MacroException
                        currentValue = {currentCalo.macro.fats.grams}
                        neededValue = {caloNeeded.macro.fats.grams}
                        margin = {10}
                    ></MacroException>
                </div>
            </div>
            <div className = "mt-2 flex flex-col">
                <div className = "flex-row flex">
                    <div className = " text-xl font-semibold">
                        Carbohydrates ({caloNeeded.macro.carbs.percent}%): 
                    </div>
                    <div className = "ml-2 text-xl font-normal">
                        {currentCalo.macro.carbs.grams}g/{caloNeeded.macro.carbs.grams}g
                    </div>
                </div>
                <div>
                    <MacroException
                        currentValue = {currentCalo.macro.carbs.grams}
                        neededValue = {caloNeeded.macro.carbs.grams}
                        margin = {10}
                    ></MacroException>
                </div>
            </div>
        </div>
    )
}