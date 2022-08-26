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
                <div className = "flex-grow h-full p-12  my-auto">
                    <div className = "justify-around flex-grow flex flex-col h-full my-auto">
                        <div>
                            <div className = "font-extrabold" style = {{fontSize:"48px"}}>   
                                CALORIES INTAKE
                            </div>
                            <CaloriesCounter
                                currentCalo = {currentCalo}
                                caloNeeded = {caloNeeded}
                                errorMargin = {errorMargin}
                            ></CaloriesCounter>
                        </div>
                            <MacroText
                                currentCalo = {currentCalo}
                                caloNeeded = {caloNeeded}
                                errorMargin = {errorMargin}
                            ></MacroText>
                    </div>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}