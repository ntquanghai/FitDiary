import React, {useState, useEffect, Fragment} from "react";
import { HeaderComponent } from "../../../layouts/header";
import { FooterComponent } from "../../../layouts/footer";
import { Outlet } from "react-router-dom";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { FeatureButton } from "../../../components/featureButton";
import { SideAccordion } from "../../../components/sideAccordion";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Calendar from 'react-calendar';
import '../../../components/calendar/Calendar.css';
import { CaloriesCounter } from "../../../components/caloriesCounter";
import { MacroText } from "../../../components/macroText";
import { FoodTable } from "../../../components/foodTable";



export const HomePage = (props) => {

    const [value, onChange] = useState(new Date());

    const [errorMargin, setErrorMargin] = useState(100);
    const [caloNeeded, setCaloNeeded] = useState(
    {
        value: 1800,
        macro: {
            protein: {
                percent: 30,
                grams: 160,
            },
            fats: {
                percent: 35,
                grams: 83,
            },
            carbs: {
                percent: 35,
                grams: 186
            }
        }
    });
    const [currentCalo, setCurrentCalo] = useState( {
        value: 1800,
        macro: {
            protein: {
                percent: 30,
                grams: 180,
            },
            fats: {
                percent: 35,
                grams: 63,
            },
            carbs: {
                percent: 35,
                grams: 186
            }
        }
    });
    const foodData = [
        {
          id: 1,
          name: "beef",
          scale: {
            value: 100,
            type: "g"
          },
          cal: 200,
          pro: 35,
          fat: 10,
          carb: 6
        },
        {
          id: 2,
          name: "chicken",
          scale: {
            value: 100,
            type: "g"
          },
          cal: 180,
          pro: 30,
          fat: 6,
          carb: 6
        },
        {
          id: 3,
          name: "pork",
          scale: {
            value: 100,
            type: "g"
          },
          cal: 210,
          pro: 39,
          fat: 12,
          carb: 4
        },
        {
          id: 3,
          name: "pork",
          scale: {
            value: 100,
            type: "g"
          },
          cal: 210,
          pro: 39,
          fat: 12,
          carb: 4
        },
        {
          id: 3,
          name: "pork",
          scale: {
            value: 100,
            type: "g"
          },
          cal: 210,
          pro: 39,
          fat: 12,
          carb: 4
        },
        {
          id: 3,
          name: "pork",
          scale: {
            value: 100,
            type: "g"
          },
          cal: 210,
          pro: 39,
          fat: 12,
          carb: 4
        },
        {
          id: 3,
          name: "pork",
          scale: {
            value: 100,
            type: "g"
          },
          cal: 210,
          pro: 39,
          fat: 12,
          carb: 4
        },
        {
          id: 3,
          name: "pork",
          scale: {
            value: 100,
            type: "g"
          },
          cal: 210,
          pro: 39,
          fat: 12,
          carb: 4
        },
        {
          id: 3,
          name: "pork",
          scale: {
            value: 100,
            type: "g"
          },
          cal: 210,
          pro: 39,
          fat: 12,
          carb: 4
        },
      ]

    const [dayMeal, setDayMeal] = useState()

    useEffect(()=> {
        const returnedList = {
            cal: 0,
            pro: 0,
            fat: 0,
            carb: 0
        }
        for(let i = 0; i < foodData.length; i++) {
            returnedList.cal += foodData[i].cal;
            returnedList.pro += foodData[i].pro;
            returnedList.fat += foodData[i].fat;
            returnedList.carb += foodData[i].carb;
        }
        setDayMeal(returnedList)
    },[])

    const calTotalNutrition = (foodData) => {
    const returnedList = {
        cal: 0,
        pro: 0,
        fat: 0,
        carb: 0
    }
    for(let i = 0; i < foodData.length; i++) {
        returnedList.cal += foodData[i].cal;
        returnedList.pro += foodData[i].pro;
        returnedList.fat += foodData[i].fat;
        returnedList.carb += foodData[i].carb;
    }
    return returnedList
    }

    const categories = [
        {
            name: "Fitness Calendar",
            subCategories: ["Calories tracker","Fitness tracker"]
        },
        {
            name: "Nutrtions",
            subCategories: ["Nutritional values","Calories calculator", "Meals planning"]
        },
        {
            name: "Fitness",
            subCategories: ["Exercises","Workout routines"]
        }
    ] 

    const features = [
        {
            name: "Find nutritional values",
            img: <HealthAndSafetyIcon sx ={{width:"80px", height:"80px"}}></HealthAndSafetyIcon>,
            destination: "",
        },
        {
            name: "Calories Tracker & Calculator",
            img: <ElectricBoltIcon sx ={{width:"80px", height:"80px"}}></ElectricBoltIcon>,
            destination: "",
        },
        {
            name: "Workout routines",
            img: <FitnessCenterIcon sx ={{width:"80px", height:"80px"}}></FitnessCenterIcon>,
            destination: "",
        },
    ]
    return(
        <div className = "flex flex-col flex-grow">
            <HeaderComponent></HeaderComponent>
            <div className = "flex flex-row flex-grow h-full">
                <div className = "flex flex-col border-r">
                    {
                        categories.map((data, index) => {
                            return(
                                <SideAccordion 
                                    key = {index}
                                    categoryName = {data.name}
                                    subCategories = {data.subCategories}
                                ></SideAccordion>
                            )
                        })
                    }
                </div>
                <div className = "flex flex-col w-2/5 border-r">
                    {/* <div className = " py-4 font-extrabold" style = {{fontSize:"48px"}}>Welcome, username.</div> */}
                    <div className = "flex justify-between flex-grow">
                        <div className = "w-full h-full ">
                            <Calendar 
                            className = ""
                            onChange={onChange} value={value} />
                        </div>
                       
                    </div>
                </div>
                <div className = "flex-grow h-full flex flex-col  my-auto">
                    <div className = "">
                        <FoodTable 
                        foodData = {foodData}
                        calTotalNutrition = {calTotalNutrition}
                        dayMeal = {dayMeal}
                        ></FoodTable>
                    </div>
                    <div className = "justify-around flex-grow flex h-full my-auto mt-12">
                        <div className = "">
                            <CaloriesCounter
                                currentCalo = {currentCalo}
                                caloNeeded = {caloNeeded}
                                errorMargin = {errorMargin}
                                foodData  = {foodData}
                                calTotalNutrition = {calTotalNutrition}
                                dayMeal = {dayMeal}
                            ></CaloriesCounter>
                        </div>
                            <MacroText
                                currentCalo = {currentCalo}
                                caloNeeded = {caloNeeded}
                                errorMargin = {errorMargin}
                                foodData = {foodData}
                                calTotalNutrition = {calTotalNutrition}
                                dayMeal = {dayMeal}
                            ></MacroText>
                    </div>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}