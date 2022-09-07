import React, {} from "react";
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
import { BasicModal } from "../../addRoutineModal";
import { WeightEdit } from "../weightEdit";

export const RoutineTable = (props) => {

    
    
    const day = props.day
    const setDay = props.setDay
    const tempDay = props.day;
    const routine = props.routine
    
    
    const saveRoutine = (array,id) => {
        for(let i = 0; i < array.fitnessRoutine.routines.length; i++) {
            if(array.fitnessRoutine.routines[i].id === id) {
                array.fitnessRoutine.routines[i].finished = !array.fitnessRoutine.routines[i].finished
                setDay({...array})
            }
        }
    }
    
    const findRoutine = (routine, id) => {
        return routine.find(data => data.id === id)
    }
    
    return (
            <TableContainer component={Paper} sx = {{maxHeight:702,height:"100%", width: "100%" ,borderRadius:0,borderTop:"0px solid rgba(224, 224, 224, 1)"}} >

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow className = "asdfasdfasdfasdfasdfadsfadsf">
                    <TableCell align="left" sx = {{fontSize:"18px", fontWeight:"bold"}} className = "text-center">Exercises</TableCell>
                    <TableCell align="left" sx = {{fontSize:"18px", fontWeight:"bold"}}>Sets</TableCell>
                    <TableCell align="left" sx = {{fontSize:"18px", fontWeight:"bold"}}>Reps</TableCell>
                    <TableCell align="left" sx = {{fontSize:"18px", fontWeight:"bold"}}>Weights</TableCell>
                    <TableCell align="center" sx = {{fontSize:"18px", fontWeight:"bold"}}>Duration</TableCell>
                    <TableCell align="left" sx = {{fontSize:"18px", fontWeight:"bold"}}>Finished</TableCell>
                    <TableCell align="left" sx = {{fontSize:"18px", fontWeight:"bold"}}>Remove</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {day.fitnessRoutine.routines.map((data, index) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { } }}
                        value = {data.id}
                    >
                    <TableCell component="th" scope="row" align="left" sx = {{height: 102}}>
                        <RoutineList
                            pos={index}
                            value = {findRoutine(day.fitnessRoutine.routines, data.id).id}
                            day = {day}
                            setDay = {setDay}
                        >
                        </RoutineList>
                    </TableCell>
                    <TableCell align="left">
                        <RepList day = {day} pos={index} setDay = {setDay} value = {findRoutine(day.fitnessRoutine.routines, data.id).sets.sets } typeOfValue = "reps"></RepList>
                    </TableCell>
                    <TableCell align="left">
                        <RepList day = {day} pos={index} setDay = {setDay} value = {findRoutine(day.fitnessRoutine.routines, data.id).sets.reps } typeOfValue = "sets"></RepList>
                    </TableCell>
                    <TableCell align="left">
                        <WeightEdit day = {day} pos={index} setDay = {setDay} value = {findRoutine(day.fitnessRoutine.routines, data.id).weights } ></WeightEdit>
                    </TableCell>
                    <TableCell align="left" sx = {{width: "160px"}}>
                        <DurationEdit day = {day} pos={index} setDay = {setDay} value = {findRoutine(day.fitnessRoutine.routines, data.id).sets.duration}></DurationEdit> 
                    </TableCell>
                    <TableCell align="center">
                        <Checkbox 
                            value = {findRoutine(day.fitnessRoutine.routines, data.id).id} 
                            checked = {data.finished}
                            onChange = {() => {
                                saveRoutine(day,findRoutine(day.fitnessRoutine.routines, data.id).id)
                            }}
                        ></Checkbox>
                    </TableCell>
                    <TableCell align="center">
                            <button onClick = {() => props.removeExercise(index)} day = {day} pos={index} className = "text-red-400 hover:text-red-500 font-bold cursor-pointer" style = {{fontSize:"16px"}}>
                                Remove
                            </button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>

            </Table>
            <div className = "flex justify-between px-8 py-4 flex-grow" style = {{}}>
                <BasicModal day = {day} setDay = {setDay} addRoutineToDay = {props.addRoutineToDay} ></BasicModal>
            </div>
            </TableContainer>
  );
}
