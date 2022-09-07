import React, {useState, useEffect, Fragment} from "react";
import { Logo } from "../../components/logo";
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Category } from "../../components/headerComponents/category";


export const HeaderComponent = (props) => {

    const categories = [
        {
            name: "Nutrtional values",
            location: "nutritional-value"
        },
        {
            name: "Calories tracker",
            location: "calories-tracker"
        },
        {
            name: "Calories calculator",
            location: "calories-calculator"
        }
    ]

    const [searchValue, setSearchValue] = useState("");

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    return(
        <div className = "flex flex-col">
            <div className = "py-4 px-12 border flex flex-row">
                <Logo 
                    fSize = "32px"
                    customClass = "justify-content"
                ></Logo>
                <TextField sx = {{marginLeft:"64px", width:"50%"}} placeholder={'Search for anything'} 
                    value = {searchValue}
                    onChange = {handleChange}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {
                                searchValue
                                ? 
                                <SearchIcon sx = {{opacity:"1"}}/>
                                :
                                <SearchIcon sx = {{opacity:"0.5"}}/>
                            }
                          </InputAdornment>
                        ),
                      }}
                />
            </div>
            <div className = "border-b border-l border-r py-4 w-full px-16 flex ">
            <div className = "font-extrabold text-2xl">NUTRITIONS</div>

                <div className = "my-auto ml-auto w-1/4  flex flex-row justify-between font-semibold ">
                    {categories.map((data, index) => {
                        return(
                            <Category
                                key = {index}
                                categoryName = {data.name}
                                location = {data.location}
                            ></Category>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}