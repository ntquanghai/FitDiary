import React, {useState, useEffect, Fragment} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from "@mui/material";
import { RoutineList } from "../routineList";
import { RepList } from "../repList";
import { DurationEdit } from "../durationEdit";

export const RoutineTable = (props) => {

    const findRoutine = (routine, id) => {
        return routine.find(data => data.id === id)
    }
    
    // const routine = [
    //     {
    //         id: 0,
    //         exercise: 'Flat bench press',
    //         sets: {
    //             duration: false,
    //             sets: 4,
    //             reps: 8,
    //         },
    //         weights: "65kg",
    //         location: "123123123"
    //     },
    //     {
    //         id: 1,
    //         exercise: 'Incline bench press',
    //         sets: {
    //             duration: 300,
    //             sets: 4,
    //             reps: 8,
    //         },
    //         weights: "50kg",
    //         location: "123123123"
    //     },
    //     {
    //         id: 2,
    //         exercise: 'Seated chest fly',
    //         sets: {
    //             duration: false,
    //             sets: 4,
    //             reps: 8,
    //         },
    //         weights: "40kg",
    //         location: "123123123"
    //     },{
    //         id: 3,
    //         exercise: 'Seated shoulder press',
    //         sets: {
    //             duration: false,
    //             sets: 4,
    //             reps: 8,
    //         },
    //         weights: "50kg",
    //         location: "123123123"
    //     },{
    //         id: 4,
    //         exercise: 'Biceps curl',
    //         sets: {
    //             duration: false,
    //             sets: 4,
    //             reps: 8,
    //         },
    //         weights: "25kg",
    //         location: "123123123"
    //     },
    // ] 
    
    // const day = [
    //     {
    //         fitnessRoutine: {
    //             day: "22/08/2022",
    //             routines: [
    //                 {
    //                     id: 0,
    //                     finished: true,
    //                 },
    //                 {
    //                     id: 1,
    //                     finished: true,
    //                 },
    //                 {
    //                     id: 2,
    //                     finished: false,
    //                 },
    //                 {
    //                     id: 3,
    //                     finished: true,
    //                 },
    //                 {
    //                     id: 4,
    //                     finished: false
    //                 }
    //             ]
    //         }
    //     }
    // ]

    const day = props.day
    const setDay = props.setDay

    const routine = props.routine
    const setRoutine = props.setRoutine

    // const [routine, setRoutine] = useState(
    //     [
    //         {
    //             id: 0,
    //             exercise: 'Flat bench press',
    //             sets: {
    //                 duration: false,
    //                 sets: 4,
    //                 reps: 8,
    //             },
    //             weights: "65kg",
    //             location: "123123123"
    //         },
    //         {
    //             id: 1,
    //             exercise: 'Incline bench press',
    //             sets: {
    //                 duration: 300,
    //                 sets: 4,
    //                 reps: 8,
    //             },
    //             weights: "50kg",
    //             location: "123123123"
    //         },
    //         {
    //             id: 2,
    //             exercise: 'Seated chest fly',
    //             sets: {
    //                 duration: false,
    //                 sets: 4,
    //                 reps: 8,
    //             },
    //             weights: "40kg",
    //             location: "123123123"
    //         },{
    //             id: 3,
    //             exercise: 'Seated shoulder press',
    //             sets: {
    //                 duration: false,
    //                 sets: 4,
    //                 reps: 8,
    //             },
    //             weights: "50kg",
    //             location: "123123123"
    //         },{
    //             id: 4,
    //             exercise: 'Biceps curl',
    //             sets: {
    //                 duration: false,
    //                 sets: 4,
    //                 reps: 8,
    //             },
    //             weights: "25kg",
    //             location: "123123123"
    //         },
    //     ] 
    // )

    // const [day, setDay] = useState(
    //     [
    //         {
    //             fitnessRoutine: {
    //                 day: "22/08/2022",
    //                 routines: [
    //                     {
    //                         id: 0,
    //                         finished: true,
    //                     },
    //                     {
    //                         id: 1,
    //                         finished: true,
    //                     },
    //                     {
    //                         id: 2,
    //                         finished: false,
    //                     },
    //                     {
    //                         id: 3,
    //                         finished: true,
    //                     },
    //                     {
    //                         id: 4,
    //                         finished: false
    //                     }
    //                 ]
    //             }
    //         }
    //     ]
    // )
    
    const saveRoutine = (array,id) => {
        for(let i = 0; i < array.fitnessRoutine.routines.length; i++) {
            if(array.fitnessRoutine.routines[i].id === id) {
                array.fitnessRoutine.routines[i].finished = !array.fitnessRoutine.routines[i].finished
                setDay([array])
            }
        }
    }
    

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center" sx = {{fontSize:"18px", fontWeight:"bold"}} className = "text-center">Exercises</TableCell>
                <TableCell align="center" sx = {{fontSize:"18px", fontWeight:"bold"}}>Sets</TableCell>
                <TableCell align="center" sx = {{fontSize:"18px", fontWeight:"bold"}}>Reps</TableCell>
                <TableCell align="center" sx = {{fontSize:"18px", fontWeight:"bold"}}>Duration</TableCell>
                <TableCell align="center" sx = {{fontSize:"18px", fontWeight:"bold"}}>Finished</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {day[0].fitnessRoutine.routines.map((data, index) => (
                <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    value = {data.id}
                >
                <TableCell component="th" scope="row" align="center">
                    <RoutineList
                        value = {findRoutine(routine, data.id).id}
                        exercise = {findRoutine(routine, data.id).exercise}
                    >
                    </RoutineList>
                </TableCell>
                <TableCell align="center">
                    {/* {
                    findRoutine(routine, data.id).sets.sets 
                    ? 
                    <RepList value = {findRoutine(routine, data.id).sets.sets}></RepList>
                    : "None"
                    } */}
                    <RepList value = {findRoutine(routine, data.id).sets.sets}></RepList>
                </TableCell>
                <TableCell align="center">
                    {/* {findRoutine(routine, data.id).sets.reps 
                    ? 
                    <RepList value = {findRoutine(routine, data.id).sets.reps }></RepList>
                    : 
                    "None"} */}
                    <RepList value = {findRoutine(routine, data.id).sets.reps }></RepList>

                </TableCell>
                <TableCell align="center">
                    {/* {findRoutine(routine, data.id).sets.duration 
                    ? 
                    <DurationEdit value = {findRoutine(routine, data.id).sets.duration}></DurationEdit> 
                    : 
                    "None"} */}
                    <DurationEdit value = {findRoutine(routine, data.id).sets.duration}></DurationEdit> 
                </TableCell>
                <TableCell align="center">
                <Checkbox 
                    value = {findRoutine(routine, data.id).id} 
                    checked = {data.finished}
                    onChange = {() => {
                        saveRoutine(day[0],findRoutine(routine, data.id).id)
                    }}

                ></Checkbox></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
  );
}
