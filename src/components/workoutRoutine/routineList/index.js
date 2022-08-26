import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, {useState, useEffect, Fragment} from "react";

export const RoutineList = (props) => {

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


    const searchExerciseById = (input, exList) => {
        for(let i = 0; i< exList.length; i++) {
            for(let r = 0; r < exList[i].exercises.length; r++) {
                if(input.toLowerCase() === exList[i].exercises[r].id) {
                    return(exList[i].exercises[r])
                }
            }
        }
    }

    const [searchValue, setSearchValue] = useState(props.value);


    const handleSelect = (event) => {
        setSearchValue(event.target.value);
    }


    const getAllIds = (list) => {
        const arr = []
        for(let i = 0; i< list.length; i++) {
            for(let r = 0; r < list[i].exercises.length; r++) {
                arr.push(list[i].exercises[r].id)
            }
        }
        return arr
    }

    const getAllEx = (list) => {
        const arr = []
        let tempObj = {}
        for(let i = 0; i< list.length; i++) {
            for(let r = 0; r < list[i].exercises.length; r++) {
                tempObj.id = list[i].exercises[r].id
                tempObj.exercise = list[i].exercises[r].exercise
                arr.push(tempObj)
                tempObj = {}
            }
        }
        return arr
    }


    const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: 300,
          },
        },
    };


    return (
        <Box className = " ">
            <FormControl variant="standard" sx ={{marignBottom:"4px"}}>

            <Select
                value = {searchValue}
                onChange={handleSelect}
                disableUnderline
                MenuProps={MenuProps}
                sx = {{minWidth:"280px",backgroundColor:"white",flexGrow:1,fontSize: 16,textAlign:"center",marginRight:"0px",'& .MuiSelect-select': {
                    padding: '10px'
                }}}
                >
                    {
                        getAllIds(exercises).map((data, i)=> {
                            return(                            
                                <MenuItem key = {i} value={data} sx = {{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display:"block"}}>{searchExerciseById(data, exercises).exercise}</MenuItem>
                            )
                        })
                    }
                </Select>
                
            </FormControl>
        </Box>
    );
}



