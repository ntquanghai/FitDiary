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


export const SignUpPage = (props) => {
    const [values, setValues] = useState({
        amount: '',
        password: '',
        cfPassword: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        showCfPassword: false,
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

      const handleClickShowCfPassword = () => {
        setValues({
          ...values,
          showCfPassword: !values.showCfPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleMouseDownCfPassword = (event) => {
        event.preventDefault();
      };
    

    return(
        <div className = "w-screen h-screen flex flex-col">
            <div className = "absolute left-1/2 -translate-x-1/2 -translate-y-1/2" style = {{top:"40%"}}>
                <Logo
                    fSize = "72px"
                    customClass = "justify-center"
                ></Logo>
                <div className = "rounded border py-8 px-12" style = {{width:"500px"}}>
                    <div className = "flex flex-col">    
                        <div className = "text-center text-3xl mb-4 font-extrabold">
                            SIGN UP
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
                            <div className = "text-center text-xl mt-4 mb-4 font-semibold">
                                Confirm Your Password
                            </div>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showCfPassword ? 'text' : 'password'}
                                    value={values.cfPassword}
                                    onChange={handleChange('cfPassword')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowCfPassword}
                                        onMouseDown={handleMouseDownCfPassword}
                                        edge="end"
                                        >
                                        {values.showCfPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Confirm Password"
                                />
                            </FormControl>
                            <div className = "w-full text-center">
                                <div className = "inline-block mt-4 px-8 py-2 border-2 border-red-400 bg-red-400 font-bold text-white hover:bg-red-500 cursor-pointer">
                                    SIGN UP
                                </div>
                            </div>
                            <div className = "justify-center flex flex-row mt-4 text-lg">
                                <div className = "mr-1">
                                    Already have an account?  
                                </div>
                                <Link to= "/login">    
                                    <div className = "text-red-400 cursor-pointer font-bold hover:text-red-500">
                                        Sign in here!
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