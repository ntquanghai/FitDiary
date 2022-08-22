import React, {useState, useEffect, Fragment} from "react";
import { Logo } from "../../components/logo";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";



export const LogInPage = (props) => {
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    

    return(
        <div className = "w-screen h-screen flex flex-col">
            <div className = "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Logo
                    fSize = "72px"
                    customClass = "justify-center"
                ></Logo>
                <div className = "rounded border py-8 px-12" style = {{width:"500px"}}>
                    <div className = "flex flex-col">    
                        <div className = "text-center text-3xl mb-4 font-extrabold">
                            SIGN IN
                        </div>
                        <div className = "">
                            <div className = "text-center text-xl mb-4 font-semibold">
                                Your email
                            </div>
                            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined"/>
                            <div className = "text-center text-xl mt-4 mb-4 font-semibold">
                            Your Password
                            </div>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <div className = "w-full text-center">
                                <div className = "inline-block mt-4 px-8 py-2 border-2 border-red-400 bg-red-400 font-bold text-white hover:bg-red-500 cursor-pointer">
                                    LOG IN
                                </div>
                            </div>
                            <div className = "justify-center flex flex-row mt-4 text-lg">
                                <div className = "mr-1">
                                    Haven't got an account?  
                                </div>
                                <Link to = "/signup">    
                                    <div className = "text-red-400 cursor-pointer font-bold hover:text-red-500">
                                        Sign up here!
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}