import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const MacroTable = (props) => {
  return (
    <TableContainer sx = {{border:""}}>
      <Table sx={{  width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx = {{fontWeight:"bold"}}>Macronutrients</TableCell>
            <TableCell sx = {{fontWeight:"bold"}} align="center">Protein (g)</TableCell>
            <TableCell sx = {{fontWeight:"bold"}} align="center">Fats (g)</TableCell>
            <TableCell sx = {{fontWeight:"bold"}} align="center">Carbohydrates (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.macroRate.map((data,index) => {
                return(
                  <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  key = {index}
                  >
                    <TableCell component="th" scope="row">
                      {data.name}
                    </TableCell>
                    <TableCell align="center">{Math.floor(props.calo*data.protein.cal*data.protein.rate)}</TableCell>
                    <TableCell align="center">{Math.floor(props.calo*data.fats.cal*data.fats.rate)}</TableCell>
                    <TableCell align="center">{Math.floor(props.calo*data.carb.cal*data.carb.rate)}</TableCell>
                  </TableRow>
                )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}



