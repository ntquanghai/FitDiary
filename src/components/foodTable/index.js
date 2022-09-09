import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter'



export const FoodTable = (props) => {
  const foodData = props.foodData


  return (
    <div>
      <TableContainer sx={{borderBottom: "1px solid #E5E7EB", minWidth: 650, maxHeight:300}} >

        <Table sx = {{position:"relative"}} stickyHeader aria-label="simple table">
          <TableHead>
          <TableRow>
                  <TableCell sx = {{fontSize:"16px",fontWeight:"900"}}>Consumed Items</TableCell>
                  <TableCell sx = {{fontSize:"16px",fontWeight:"900"}} align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell sx = {{fontSize:"16px",fontWeight:"900"}} align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell sx = {{fontSize:"16px",fontWeight:"900"}} align="right">Protein&nbsp;(g)</TableCell>
                  <TableCell sx = {{fontSize:"16px",fontWeight:"900"}} align="right">Calories (kcal)</TableCell>
              </TableRow>
            <TableRow sx = {{borderTop: "1px solid #E5E7EB"}}>
                  <TableCell sx = {{fontSize:"14px",fontWeight:"bold"}}>Total values</TableCell>
                  <TableCell sx = {{fontSize:"14px",fontWeight:"bold"}} align="right">{props.calTotalNutrition(foodData).fat + " g"}</TableCell>
                  <TableCell sx = {{fontSize:"14px",fontWeight:"bold"}} align="right">{props.calTotalNutrition(foodData).carb + " g"}</TableCell>
                  <TableCell sx = {{fontSize:"14px",fontWeight:"bold"}} align="right">{props.calTotalNutrition(foodData).pro + " g"}</TableCell>
                  <TableCell sx = {{fontSize:"14px",fontWeight:"bold"}} align="right">{props.calTotalNutrition(foodData).cal+ " kcal"}</TableCell>
                </TableRow>
          </TableHead>
            <TableBody sx ={{maxHeight: 200}}>
              {foodData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name.toUpperCase()}
                  </TableCell>
                  <TableCell align="right">{row.fat+ " g"}</TableCell>
                  <TableCell align="right">{row.carb+ " g"}</TableCell>
                  <TableCell align="right">{row.pro+ " g"}</TableCell>
                  <TableCell align="right">{row.cal+ " kcal"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
        </Table>
      
      </TableContainer>
    </div>
  );
}
