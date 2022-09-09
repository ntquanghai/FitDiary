import { HeaderComponent } from "../../../layouts/header"
import { FooterComponent } from "../../../layouts/footer"
import { TextField } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from "react";
import { SideAccordion } from "../../../components/sideAccordion";
import {BasicTabs} from "../../../components/macroTabs";



export const CalculatorPage = (props) => {
    const [activity, setActivity] = useState(1.2);
    const [age, setAge] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [gender, setGender] = useState(1);
    const [tdee, setTdee] = useState();
    const [caloList, setCaloList] = useState();
    const [invalid, setInvalid] = useState(false);
    
    const [macroRate, setMacroRate] = useState(
        [
            {
                id: 0,
                name: "Moderate carb (30/30/35)",
                protein: {
                    title: "Protein (g)",
                    cal: 1/4,
                    rate: 0.3,
                },
                carb: {
                    title: "Carbohydrates (g)",
                    cal: 1/4,
                    rate: 0.35
                },
                fats: {
                    title: "Fats (g)",
                    cal: 1/9,
                    rate: 0.35
                }
            },
            {
                id: 1,
                name: "Lower carb  (40/40/20)",
                protein: {
                    title: "Protein (g)",
                    cal: 1/4,
                    rate: 0.4,
                },
                carb: {
                    title: "Carbohydrates (g)",
                    cal: 1/4,
                    rate: 0.4
                },
                fats: {
                    title: "Fats (g)",
                    cal: 1/9,
                    rate: 0.2
                }
            },
            {
                id: 2,
                name: "Higher carb (30/20/50)",
                protein: {
                    title: "Protein (g)",
                    cal: 1/4,
                    rate: 0.3,
                },
                carb: {
                    title: "Carbohydrates (g)",
                    cal: 1/4,
                    rate: 0.2
                },
                fats: {
                    title: "Fats (g)",
                    cal: 1/9,
                    rate: 0.5
                }
            }
        ]
    )

    const handleChange = (e) => {
        setActivity(e.target.value)
    }

    const handleAge = (e) => {
        setAge(e.target.value)
    }

    const handleWeight = (e) => {
        setWeight(e.target.value)
    }

    const handleHeight = (e) => {
        setHeight(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const findActivity = (list, activity) => {
        return (list.find(data => data.value === activity))
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

    const tdeeCalculator = () => {
        if(!Number.isInteger(Number(age)) || !(Number.isInteger(Number(weight))) || !(Number.isInteger(Number(weight)))) {
           setInvalid(true)
            return(
            <div></div>
           )     
        }
        else {
            if(gender === 1) {
                const bmr = ((88 + (13.4*weight) + (4.8*height) -(5.7*age)))
                const bmrList = [
                    {
                        type: "Sedentary (little or no exercise, desk job)",
                        value: 1.2,
                        cal: 1.2*bmr,
                        chosen: 1.2===activity
                    },
                    {
                        type: "Lightly active (light exercise/ sports 1-3 days/week)",
                        value: 1.375,
                        cal: 1.375*bmr,
                        chosen: 1.375===activity
                    },
                    {
                        type: "Moderately active (moderate exercise/ sports 6-7 days/week)",
                        value: 1.55,
                        cal: 1.55*bmr,
                        chosen: 1.55===activity
                    },
                    {
                        type: "Very active (hard exercise every day, or exercising 2 xs/day)",
                        value: 1.725,
                        cal: 1.725*bmr,
                        chosen: 1.725===activity
                    },
                    {
                        type: "Extra active (hard exercise 2 or more times per day, or training for marathon, or triathlon, etc.)",
                        value: 1.9,
                        cal: 1.9*bmr,
                        chosen: 1.9===activity
                    },
                ]
                setTdee(bmrList)
                setCaloList(
                    {
                        caloMain: Math.floor(findActivity(bmrList,activity).cal),
                        caloBulk:  Math.floor(findActivity(bmrList,activity).cal) +500,
                        caloCut: Math.floor(findActivity(bmrList,activity).cal) -500,        
                    }
                )
                setInvalid(false)
                
            }
            else {
                console.log(activity*(665 + (9.6*weight) + (1.8*height) -(4.7*age)))
                setTdee(activity*(665 + (9.6*weight) + (1.8*height) -(4.7*age)))
            }
        }
    }
    

    return(
        <div className = "flex flex-col flex-grow" style = {{minHeight:"100vh", }}>
            <HeaderComponent></HeaderComponent>
            <div className = "flex flex-row flex-grow">
                <div className = "flex flex-col border-r">
                    {
                        categories.map((data,index) => {
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
                <div className = "flex flex-row w-full">   
                    <div className = "flex flex-col border-r p-12">    
                        <div className = "my-auto">  
                        {invalid
                        ?
                        <div className="text-center mb-8 font-base text-xl text-red-500">Pleas fill in the form correctly.</div>  
                        :
                        <div></div>
                        }

                            <div className = "font-bold text-3xl text-center">
                                TDEE CALCULATOR
                            </div>
                            <div className = "flex flex-col mt-4" style = {{maxWidth:800}}>
                                <div className = "flex my-3">
                                    <div className = "my-auto" style = {{width:120 , flexShrink:0}}>Age:</div>
                                    <TextField value = {age} onChange = {handleAge} sx ={{width: 120}} size = "small" />
                                </div>
                                <div className = "flex my-3">
                                    <div className = "my-auto" style = {{width:120 , flexShrink:0}}>Gender:</div>
                                    <FormControl sx ={{width: 120}} size = "small" fullWidth>
                                        <Select
                                            value={gender}
                                            onChange={handleGender}
                                        >
                                            <MenuItem value={1}>Male</MenuItem>
                                            <MenuItem value={0}>Female</MenuItem>
                                        </Select>
                                    </FormControl>                    
                                    </div>
                                <div className = "flex my-3">
                                    <div className = "my-auto" style = {{width:120 , flexShrink:0}}>Weight (kg):</div>
                                    <TextField value = {weight} onChange = {handleWeight} sx ={{width: 120}}  size = "small" />
                                </div>
                                <div className = "flex my-3">
                                    <div className = "my-auto" style = {{width:120 , flexShrink:0}}>Height (cm):</div>
                                    <TextField value = {height} onChange = {handleHeight} sx ={{width: 120}}  size = "small" />
                                </div>
                                <div className = "flex my-3">
                                    <div className = "my-auto" style = {{width:120, flexShrink:0}}>Activity:</div>
                                    <FormControl sx ={{width: 240}} size = "small" fullWidth>
                                        <Select
                                            value={activity}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={1.2}>Sedentary (little or no exercise, desk job) </MenuItem>
                                            <MenuItem value={1.375}>Lightly active (light exercise/ sports 1-3 days/week)</MenuItem>
                                            <MenuItem value={1.55}>Moderately active (moderate exercise/ sports 6-7 days/week)</MenuItem>
                                            <MenuItem value={1.725}>Very active (hard exercise every day, or exercising 2 xs/day)</MenuItem>
                                            <MenuItem value={1.9}>Extra active (hard exercise 2 or more times per day, or training for marathon, or triathlon, etc.)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className = "mt-4 text-center">
                                <button onClick = {tdeeCalculator} className = "w-full text-white bg-red-400 px-8 py-2 border border-red-400 hover:bg-red-500 font-bold">Submit</button>
                            </div>
                        </div>
                    </div>   
                    <div className= "flex-grow">
                        <div className = "w-full h-full p-12 border-r">
                            {tdee?
                            <div className = "flex flex-col justify-between h-full">
                                <div >
                                        <div className = "flex">  
                                            <div className = "font-bold text-2xl uppercase">
                                                DAILY MAINTENANCE CALORIES:
                                            </div>
                                            <div className = "font-bold text-red-500 ml-2 text-2xl" style = {{}}>
                                                {Math.floor(findActivity(tdee,activity).cal)}
                                            </div>
                                        </div>
                                        <div className = "mb-4 text-lg">
                                            Based on the given statistics, the best estimate for your daily maintenance calories intake is <b>{Math.floor(findActivity(tdee,activity).cal)}</b>. This estimation is based on the revised Harris–Benedict equation.
                                            <p><b>Men: </b>BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)</p>
                                            <p><b>Women: </b>BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)</p>
                                        </div>
                                </div>
                                    
                                <div>
                                    <div className = " text-2xl font-bold uppercase">
                                        Macronutrients
                                    </div>
                                    <div>
                                    <BasicTabs
                                        macroRate = {macroRate}
                                        tdee= {tdee}
                                        findActivity = {findActivity}
                                        caloList = {caloList}
                                    ></BasicTabs>
                                    </div>
                                </div>
                            </div>
                            :
                            <div></div>
                            }
                        </div>
                    </div>       
                </div>
                <div>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )

}