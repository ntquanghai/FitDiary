import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, {useState, useEffect, Fragment} from "react";

export const RepList = (props) => {
    const [set, setRep] = useState(props.value);
    const [numArr, setNumArr] = useState(["None", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);

    const tempDay = props.day


    useEffect(() => {
        if(!props.routine) {
            if(set != props.value) {
                if(props.typeOfValue === "sets") {
                    ((tempDay).fitnessRoutine.routines[props.pos].sets.sets = set)
                    props.setDay(tempDay)
                }
                else if (props.typeOfValue === "reps") {
                    ((tempDay).fitnessRoutine.routines[props.pos].sets.reps = set)
                    props.setDay(tempDay)
                }
            }
        }
        else {
            if(set != props.value) {
                if(props.typeOfValue === "sets") {
                    ((tempDay)[props.pos].sets.sets = set)
                    props.setDay(tempDay)
                }
                else if (props.typeOfValue === "reps") {
                    ((tempDay)[props.pos].sets.reps = set)
                    props.setDay(tempDay)
                }
            }
        }
    })

    const handleChange = (event) => {
        setRep(event.target.value);

    };

    const genNumArr = () => {
        const arr = []
        for(let i = 0; i<100; i++) {
            arr.push(i)
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
        <Box className = "">
            <FormControl variant="standard" sx ={{marignBottom:"4px"}}>
            
            <Select
                value = {set}
                onChange={handleChange}
                disableUnderline
                MenuProps={MenuProps}
                sx = {{width:"80px",backgroundColor:"white",flexGrow:1,fontSize: 16,textAlign:"left",marginRight:"0px",
                '& .MuiSelect-select': {
                    paddingRight: '0px',
                }}}
                >
                    {
                        numArr.map((data, i)=> {
                            return(                            
                                <MenuItem key = {i} value={data} sx = {{maxWidth:"200px",overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display:"block"}}>{data}</MenuItem>
                            )
                        })
                    }
                </Select>
                
            </FormControl>
        </Box>
    );
}