import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Divider from '@mui/material/Divider';
import { TextField } from '@mui/material/';
import React, {useState, useEffect, Fragment} from "react";

export const WeightEdit = (props) => {
    const tempDay = props.day

    useEffect(() => {
        if(!props.routine) {
            if(weightValue != props.value) {
                ((tempDay).fitnessRoutine.routines[props.pos].weights = weightValue)
                props.setDay(tempDay)
            }
        }
        else {
          if(weightValue != props.value) {
            ((tempDay)[props.pos].weights = weightValue)
            props.setDay(tempDay)
        }
        }
    })

    const [anchorEl, setAnchorEl] = useState(null);
    const [weight, setWeight] = useState('');
    const [weightValue, setWeightValue] = useState(props.value);

    const handleWeightChange = (event) => {
        setWeight(event.target.value)
    }

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    }; 

    const submitWeight = () => {
        setWeightValue(weight+"KG")
        setWeight('0')
        handleClose()
    }


    const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: 300,
          },
        },
    };

    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay; 
    } 

    return (
        <div>
        <Button
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx = {{color: "black", width: "100%", justifyContent:"center", display: "inline-block"}}
        >
            {weightValue
            ?
            weightValue.toUpperCase()
            :
              "None"
            }
        <ArrowDropDownIcon sx ={{marginLeft: "2px", marginBottom:"2px",fontSize: 20, color: "rgba(0, 0, 0, 0.54)"}}  ></ArrowDropDownIcon>

        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          <div className = "flex flex-col" style = {{width:"320px"}}>
            <div className = "px-2 mb-2 uppercase font-bold text-center">
                Edit exercise's duration
            </div>
            <Divider />
            <div className = "mt-4 flex flex-col px-4 mb-4">
                <TextField id="standard-basic" variant="standard" onChange = {handleWeightChange} sx = {{flexGrow:1,'&. MuiInput-underline': {
                  padding: 0 
                }}}/>
            </div>
            <button onClick = {() => submitWeight()} className = "px-4 py-2 bg-red-400 text-white font-bold hover:bg-red-500">SUBMIT</button>
        </div>
      </Menu>
        </div>
    );
}