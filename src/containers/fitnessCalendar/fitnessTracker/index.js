import React, {useState, useEffect, Fragment} from "react";
import { HeaderComponent } from "../../../layouts/header";
import { FooterComponent } from "../../../layouts/footer";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { SideAccordion } from "../../../components/sideAccordion";
import Calendar from 'react-calendar';
import '../../../components/calendar/Calendar.css';
import { RoutineTable } from "../../../components/workoutRoutine/routineTable";
import Button from '@mui/material/Button';
import dayjs from 'dayjs';


export const FitnessTracker = (props) => {

    const [value, setValue] = useState(new Date());

    const [dayDate, setDayDate] = useState('')

    const [calendar, setCalendar] = useState([
        {
            day: "01/09/2022",
            fitnessRoutine: {
                routines: [
                    {
                        id: "c0",
                        sets: {
                            duration: false,
                            sets: "None",
                            reps: "None",
                        },
                        weights: "65kg",
                        location: "123123123",
                        finished: true
                    },
                    {
                        id: "c1",
                        sets: {
                            duration: 300,
                            sets: 4,
                            reps: 8,
                        },
                        weights: "50kg",
                        location: "123123123",
                        finished: true
                    },
                    {
                        id: "c9",
                        sets: {
                            duration: false,
                            sets: 4,
                            reps: 8,
                        },
                        weights: "40kg",
                        location: "123123123",
                        finished: true
                    },{
                        id: "s1",
                        sets: {
                            duration: false,
                            sets: 4,
                            reps: 8,
                        },
                        weights: "50kg",
                        location: "123123123",
                        finished: true
                    },{
                        id: "a2",
                        sets: {
                            duration: false,
                            sets: 4,
                            reps: 8,
                        },
                        weights: "25kg",
                        location: "123123123",
                        finished: true
                    },
                ] 
            }
        },
        {

        }
    ])

    const onChange = (event) => {
        setValue((event))
        setDayDate(event.toLocaleDateString('en-GB')) 
    }

    useEffect(() => {
        if(dayDate) {
            setDay(findDay(dayDate))
        }
    })
    const exercises = [
        {   
            id : 0,
            name: "chest",
            exercises: [
                {
                    id: "c0",
                    exercise: "Barbell flat bench press",
                    location: "",
                },
                {
                    id: "c1",
                    exercise: "Barbell incline bench press",
                    location: "",
                },
                {
                    id: "c2",
                    exercise: "Barbell decline bench press",
                    location: "",
                },
                {
                    id: "c3",
                    exercise: "Dumbbell flat bench press",
                    location: "",
                },
                {
                    id: "c4",
                    exercise: "Dumbbell incline bench press",
                    location: "",
                },
                {
                    id: "c5",
                    exercise: "Dumbbell decline bench press",
                    location: "",
                },
                {
                    id: "c6",
                    exercise: "Pushup",
                    location: "",
                },
                {
                    id: "c7",
                    exercise: "Cable crossover",
                    location: "",
                },
                {
                    id: "c8",
                    exercise: "Chest dip",
                    location: "",
                },
                {
                    id: "c9",
                    exercise: "Machine chest fly",
                    location: "",
                },
                {
                    id: "c10",
                    exercise: "Seated chest press",
                    location: "",
                },
                
            ]
        },
        {
            id: 1,
            name: "shoulders",
            exercises: [
                {
                    id: "s0",
                    exercise: "Barbell overhead press",
                    location: ""
                },
                {
                    id: "s1",
                    exercise: "Seated shoulder press",
                    location: ""
                },
                {
                    id: "s2",
                    exercise: "Dumbbell Lateral Raises",
                    location: ""
                },
                {
                    id: "s3",
                    exercise: "Facepull",
                    location: ""
                },
                {
                    id: "s4",
                    exercise: "Machine reverse fly",
                    location: ""
                },
                {
                    id: "s5",
                    exercise: "Arnold raises",
                    location: ""
                },  
                {
                    id: "s6",
                    exercise: "Shrugs",
                    location: ""
                },  
            ],
        },
        {
            id: 2,
            name: "arms",
            exercises: [
                {
                    id: "a0",
                    exercise: "Barbell bicep curls",
                    location: ""
                },
                {
                    id: "a1",
                    exercise: "Dumbbell bicep curls",
                    location: ""
                },
                {
                    id: "a2",
                    exercise: "Cabel bicep curls",
                    location: ""
                },
                {
                    id: "a3",
                    exercise: "EZ-bar bicep curls",
                    location: ""
                },
                {
                    id: "a4",
                    exercise: "EZ-bar bicep preacher curls",
                    location: ""
                },
                {
                    id: "a5",
                    exercise: "Facing-Away Cable Curl",
                    location: ""
                },
                {
                    id: "a6",
                    exercise: "Hammer Curl",
                    location: ""
                },
                {
                    id: "a7",
                    exercise: "Skullcrushers",
                    location: ""
                },
                {
                    id: "a8",
                    exercise: "Dips",
                    location: ""
                },
            ],
        },
        {
            id: 3,
            name: "lats",
            exercises: [
                {
                    id: "l0",
                    exercise: "Cable lat pulldown",
                    location: ""
                },
                {
                    id: "l1",
                    exercise: "Seated lat pulldown (Machine)",
                    location: ""
                },
                {
                    id: "l2",
                    exercise: "Barbell rows",
                    location: ""
                },
                {
                    id: "l3",
                    exercise: "Seated lat pulldown",
                    location: ""
                },
                {
                    id: "l4",
                    exercise: "Pull ups",
                    location: ""
                },
                {
                    id: "l5",
                    exercise: "Seated cable row",
                    location: ""
                },                
            ],
        },
        {
            id: 4,
            name: "quads",
            exercises: [
                {
                    id: "q0",
                    exercise: "High-bar squat",
                    location: ""
                },
                {
                    id: "q1",
                    exercise: "Low-bar squat",
                    location: ""
                },{
                    id: "q2",
                    exercise: "Front squat",
                    location: ""
                },{
                    id: "q3",
                    exercise: "Goblet squat",
                    location: ""
                },{
                    id: "q4",
                    exercise: "Bulgarian split squat",
                    location: ""
                },{
                    id: "q5",
                    exercise: "Leg extensions",
                    location: ""
                },{
                    id: "q6",
                    exercise: "Leg press",
                    location: ""
                },
            ],
        },
        {
            id: 5,
            name: "hamstrings",
            exercises: [
                {
                    id: "h0",
                    exercise: "Deadlift",
                    location: ""
                },
                {
                    id: "h1",
                    exercise: "Romanian Deadlift",
                    location: ""
                },{
                    id: "h2",
                    exercise: "Hex-Bar/Trap Bar Deadlift",
                    location: ""
                },{
                    id: "h3",
                    exercise: "Kettlebell Swing",
                    location: ""
                },{
                    id: "h4",
                    exercise: "Leg curls",
                    location: ""
                },{
                    id: "h5",
                    exercise: "Sumo deadlift",
                    location: ""
                },{
                    id: "h6",
                    exercise: "Leg press",
                    location: ""
                },
            ],
        },
        {
            id: 6,
            name: "calves",
            exercises: [
                {
                    id: "ca0",
                    exercise: "Standing calf raises",
                    location: ""
                },
                {
                    id: "ca1",
                    exercise: "Seated calf raises",
                    location: ""
                },{
                    id: "ca2",
                    exercise: "Elevated calf raises",
                    location: ""
                },{
                    id: "ca3",
                    exercise: "Jump rope",
                    location: ""
                },{
                    id: "ca4",
                    exercise: "Single-leg calf Raises",
                    location: ""
                }
            ],
        },
    ]

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

    

    const findDay = (dayInput) => {
        return calendar.find(day => day.day === dayInput);
    }

    const generateDayIfNone = (day) => {
        if(!findDay(day)) { 
            const tempDay = {
                day: day,
                fitnessRoutine: {
                    off: false,
                    routines: []
                },
                calories: {},
            }
            calendar.push(tempDay);
            setCalendar([...calendar])
        }
    }

    const offDay = (day) => {
        if(!findDay(day)) { 
            const tempDay = {
                day: day,
                fitnessRoutine: {
                    off: true,
                    routines: []
                },
                calories: {},
            }
            calendar.push(tempDay);
            setCalendar([...calendar])
        }
    }

    const [day, setDay] = useState()


    console.log(day)

    const removeExercise = (pos) => {   
        day.fitnessRoutine.routines.splice(pos, 1);
        setDay({...day})
    }

    const addRoutineToDay = (array) => {
        day.fitnessRoutine.routines = day.fitnessRoutine.routines.concat(array)
        setDay({...day})
    }

    const checkFinished = (day) => {
        for(let i = 0; i < day.fitnessRoutine.routines.length; i++) {
            if(!day.fitnessRoutine.routines[i].finished) {
                return false
            }
        }
        return true
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
        <div className = "flex flex-col flex-grow" style = {{minHeight:"100vh"}}>
            <HeaderComponent></HeaderComponent>
            <div className = "flex flex-row flex-grow h-full">
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
                <div style = {{minWidth: "40%"}} className = "flex flex-col w-2/5 border-r">
                    <div className = "flex justify-between flex-grow">
                        <div className = "w-full h-full ">
                            <Calendar 
                            className = ""
                            onChange={onChange} value={value}
                            />
                        </div>
                       
                    </div>
                </div>
                {day
                ?
                <div className = "flex flex-col flex-grow h-full " style = {{}}>
                    {day.fitnessRoutine.off
                    ?
                    <div className = "text-gray-600 my-auto uppercase text-center font-bold" style = {{fontSize:"32px"}}>Today is your off day. Happy resting!</div>
                    :
                    <div className = "flex-grow h-full">
                        <div className = "justify-between flex flex-col h-full">
                            <div className = "h-full flex flex-col">
                                <div>
                                {checkFinished(day)
                                        ?
                                            <div>
                                                {day.fitnessRoutine.routines.length > 0
                                                ?
                                                <div className = "text-center font-extrabold text-green-500" style = {{fontSize:"48px"}}>
                                                    WORKOUT
                                                </div>
                                                :
                                                <div className = "text-center font-extrabold text-red-500" style = {{fontSize:"48px"}}> 
                                                    WORKOUT
                                                </div>
                                                }
                                                
                                            </div>
                                        :
                                            <div className = "text-center font-extrabold text-red-500" style = {{fontSize:"48px"}}> 
                                                WORKOUT
                                            </div>
                                }   
                                </div>
                                <div className = "flex flex-col h-full">
                                    <div className = "flex flex-row flex-grow  w-full">
                                        <RoutineTable
                                            checkFinished = {checkFinished}
                                            day = {day}
                                            setDay = {setDay}
                                            removeExercise = {removeExercise}
                                            addRoutineToDay = {addRoutineToDay}
                                        ></RoutineTable>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                :
                <div className = "p-12 font-bold flex-grow my-auto">
                    <div className = "text-center" style = {{fontSize:"32px"}}> You have not set up a workout routine</div>
                    <div className = "flex justify-around w-2/3 mx-auto mt-4">
                        <Button onClick = {() => generateDayIfNone(dayDate)} id="modal-modal-title" variant="h1" component="h1" sx = {{fontWeight:"bold"}}>
                            Add exercise
                        </Button>
                        <Button onClick = {() => offDay(dayDate)} id="modal-modal-title" variant="h7" component="h3" sx = {{fontWeight:"bold"}}>
                            Off day
                        </Button>
                    </div>
                </div>
                }
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}