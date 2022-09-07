import React, {useState, useEffect, Fragment} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Divider from '@mui/material/Divider';
import { TextField } from '@mui/material/';


export const DurationEdit = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [duration, setDuration] = useState(props.value);

    const [hrs, setHrs] = useState(0)
    const [mins, setMins] = useState(0)
    const [secs, setSecs] = useState(0)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const tempDay = props.day;

    useEffect(() => {
      if(!props.routine) {
        if(duration != props.value) {
          ((tempDay).fitnessRoutine.routines[props.pos].sets.duration = duration)
          props.setDay(tempDay)
        }
      }
      else {
        if(duration != props.value) {
          ((tempDay)[props.pos].sets.duration = duration)
          props.setDay(tempDay)
        }
      }
  })

    const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: 300,
          },
        },
    };

    const handleHrsChange = (event) => {
      setHrs(event.target.value)
    }

    const handleMinChange = (event) => {
      setMins(event.target.value)
    }

    const handleSecsChange = (event) => {
      setSecs(Number(event.target.value))
    }

    const submitDuration = (hrs, mins, secs) => {
      setDuration(hrs*3600+mins*60+secs)
      setHrs(0)
      setMins(0)
      setSecs(0)
      handleClose()
    }

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
        sx = {{color: "black", width: "120px", justifyContent:"center", width:"100%", display: "inline-block"}}
        >
            {duration
            ?
            secondsToHms(duration)
            :
              "NONE"
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
              <div className = "flex" >
                <div className='mt-auto mr-4'>
                  Hours:
                </div>
                <TextField onChange={handleHrsChange} id="standard-basic" variant="standard" sx = {{flexGrow:1,'&. MuiInput-underline': {
                  padding: 0
                }}}/>
              </div>
              <div className = "flex">
                <div className='mt-auto mr-4'>
                  Minutes:
                </div>
                <TextField onChange={handleMinChange} id="standard-basic" variant="standard" sx = {{flexGrow:1,}}/>
              </div>
              <div className = "flex">
                <div className='mt-auto mr-4'>
                  Seconds:
                </div>
                <TextField onChange={handleSecsChange} id="standard-basic" variant="standard" sx = {{flexGrow:1,}}/>
              </div>
            </div>
            <Divider sx = {{marginTop: "8px"}}/>
            <div className = "mt-2 mx-auto">
            <button onClick = {() => submitDuration(hrs, mins, secs)} className = "px-4 py-2 bg-red-400 text-white font-bold hover:bg-red-500">SUBMIT</button>
            </div>
        </div>
      </Menu>
        </div>
    );
}