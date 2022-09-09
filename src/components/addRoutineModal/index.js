import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DurationEdit } from '../workoutRoutine/durationEdit';
import { WeightEdit } from '../workoutRoutine/weightEdit';
import { RepList } from '../workoutRoutine/repList';
import { RoutineList } from '../workoutRoutine/routineList';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  bgcolor: 'background.paper',
  borderBottom: '1px solid #000',
};

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

const findRoutine = (routine, id) => {
    return routine.find(data => data.id === id)
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

const searchExerciseById = (input, exList) => {
    for(let i = 0; i< exList.length; i++) {
        for(let r = 0; r < exList[i].exercises.length; r++) {
            if(input.toLowerCase() === exList[i].exercises[r].id) {
                return(exList[i].exercises[r])
            }
        }
    }
}



export const BasicModal = (props) => {
    const [open, setOpen] = React.useState(false);
    
    const [routineId, setRoutineId] = React.useState("")

    const [set, setSet] = React.useState("None")
    const [numArr, setNumArr] = React.useState(["None", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);

    const [rep, setRep] = React.useState("None")

    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleIdChange = (event) => {
        setRoutineId(event.target.value);
    }
    const handleSetChange = (event) => {
        setSet(event.target.value);
    }
    const handleRepChange = (event) => {
        setRep(event.target.value);
    }
    const [addedRoutines, setAddedRoutines] = React.useState({
        id: routineId,
        sets: {
            duration: false,
            sets: set,
            reps: rep
        },
        weights: "None",
        location: null,
        finished: false,
    });

    const [addRoutines, setAddRoutines] = React.useState([
        
    ]);

    const generateRoutine = () => {
        const tempObj = {
            id: routineId,
            sets: {
                duration: false,
                sets: "None",
                reps: "None"
            },
            weights: "None",
            location: null,
            finished: false,
        }
        addRoutines.push(tempObj)
        setAddRoutines([...addRoutines])
    }

    const MenuProps = {
        PaperProps: {
            style: {
            maxHeight: 300,
            },
        },
    };

    const removeExercise = (pos) => {   
        addRoutines.splice(pos, 1);
        setAddRoutines([...addRoutines])
    }

  return (
    <div>
      <button onClick={handleOpen} className = " text-lg font-semibold h-full text-gray-500 hover:text-black cursor-pointer"> Add new exercise</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left" sx = {{fontSize:"18px", fontWeight:"bold", width:"280px"}} >Exercises</TableCell>
                <TableCell align="left" sx = {{fontSize:"18px", fontWeight:"bold"}}>Sets</TableCell>
                <TableCell align="left" sx = {{fontSize:"18px", fontWeight:"bold"}}>Reps</TableCell>
                <TableCell align="left" sx = {{fontSize:"18px", fontWeight:"bold"}}>Weights</TableCell>
                <TableCell align="center" sx = {{fontSize:"18px", fontWeight:"bold"}}>Duration</TableCell>
                <TableCell align="left" sx = {{fontSize:"18px", fontWeight:"bold"}}>Remove</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {addRoutines
                ?
                addRoutines.map((data,index) => {
                    return(
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { } }} key = {index} value = {data.id}
                        >
                        <TableCell component="th" scope="row" align="left" sx = {{height: 100}}>   
                        <RoutineList
                            value = {''}
                            day = {addRoutines}
                            setDay = {setAddRoutines}
                            routine = {true}
                            pos={index}
                        >
                        </RoutineList>
                        </TableCell>
                        <TableCell align="left">
                            <RepList routine = {true} day = {addRoutines} setDay = {setAddRoutines} pos={index} value = "None" typeOfValue = "sets"></RepList>
                        </TableCell>
                        <TableCell align="left">
                            <RepList routine = {true} day = {addRoutines} setDay = {setAddRoutines} pos={index} value = "None" typeOfValue = "reps"></RepList>
                        </TableCell>
                        <TableCell align="left">
                            <WeightEdit routine = {true} day = {addRoutines} setDay = {setAddRoutines} pos={index} value = {"None"}></WeightEdit>
                        </TableCell>
                        <TableCell align="center" sx = {{width: "220px"}}>
                            <DurationEdit routine= {true} day = {addRoutines} setDay = {setAddRoutines} pos={index} value = {0}></DurationEdit> 
                        </TableCell>
                        <TableCell align="left">
                            <button onClick = {() => removeExercise(index)} day = {addRoutines} pos={index} className = "text-red-400 hover:text-red-500 font-bold cursor-pointer" style = {{fontSize:"16px"}}>
                                Remove
                            </button>
                        </TableCell>
                    </TableRow>
                    )
                    })
                :
                <div></div>
                }
                
            </TableBody>

            </Table>
            <div className = "p-4 flex justify-around">
                <Button onClick = {generateRoutine} id="modal-modal-title" variant="h7" component="h3" sx = {{fontWeight:"bold"}}>
                Add exercise
                </Button>
                <Button onClick = {() => props.addRoutineToDay(addRoutines)} id="modal-modal-title" variant="h7" component="h3" sx = {{fontWeight:"bold"}}>
                Submit
                </Button>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
