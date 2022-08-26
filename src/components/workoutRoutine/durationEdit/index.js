import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, {useState, useEffect, Fragment} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import EditIcon from '@mui/icons-material/Edit';


export const DurationEdit = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [duration, setDuration] = useState(props.value);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

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
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx = {{color: "black"}}
        >
            {duration
            ?
            secondsToHms(duration)
            :
                "None"
            }
        <EditIcon sx ={{marginLeft: "6px", fontSize: 16}}  ></EditIcon>

        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <div className = "">

            </div>
        </MenuItem>
      </Menu>
        </div>
    );
}