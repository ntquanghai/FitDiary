import React, {useState, useEffect, Fragment} from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const SideAccordion = (props) => {
    return (
        <div>
          <Accordion
            sx = {{boxShadow:"0px 0px"}}
            disableGutters
          >
            
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx = {{fontWeight:"bold"}}>{props.categoryName}</Typography>
            </AccordionSummary>
            <AccordionDetails sx = {{padding: 0}}>
                <div className = "flex flex-col">
                    {props.subCategories.map((data) => {
                        return(
                            <button className = "cursor-pointer px-4 py-2 text-left hover:bg-gray-50">
                                {data}
                            </button>
                        )
                    })}
                </div>
            </AccordionDetails>
          </Accordion>
        </div>
      );
}