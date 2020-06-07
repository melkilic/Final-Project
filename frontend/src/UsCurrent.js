// import React,  { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Grid} from "@material-ui/core"

// 


//     return(
    
//           <Grid container>
//               <Grid item sm>
//   {state.date}
//   {state.dateChecked}
//   {state.death}
//   {state.deathIncrease}
//   {state.hospitalized}
//   {state.hospitalizedCurrently}
//   {state.hospitalizedIncrease}
//   {state.lastModified}
//   {state.negative}
//   {state.negativeIncrease}
//   {state.positive}
//   {state.positiveIncrease}
//   {state.recovered}
//   {state.states}
//   {state.total}
//   {state.totalTestResults}
//   {state.totalTestResultsIncrease}
//   </Grid>
//   </Grid>
   
//     )
// }

import React,  { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function UsCurrent(){
        const [state, setState] = useState([])
         useEffect(()=>{
        fetch('http://covidtracking.com/api/us')
      .then(response =>response.json())
      .then(response=> { 
    
        console.log(response[0])
         setState(response[0])
        })
      }, [state])
    
    
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Death</StyledTableCell>
            <StyledTableCell align="right">Positive</StyledTableCell>
            <StyledTableCell align="right">Negative</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
            <StyledTableCell align="right">deathIncrease</StyledTableCell>
            <StyledTableCell align="right">hospitalized</StyledTableCell>
            <StyledTableCell align="right">hospitalizedCurrently</StyledTableCell>
            <StyledTableCell align="right">hospitalizedIncrease</StyledTableCell>
            <StyledTableCell align="right">lastModified</StyledTableCell>
            <StyledTableCell align="right">negativeIncrease</StyledTableCell>
            <StyledTableCell align="right">recovered</StyledTableCell>
            <StyledTableCell align="right">states</StyledTableCell>
            <StyledTableCell align="right">totalTestResults</StyledTableCell>
            <StyledTableCell align="right">totalTestResultsIncrease</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
              {state.dateChecked}
              </StyledTableCell>
              <StyledTableCell align="right"> {state.death}</StyledTableCell>
              <StyledTableCell align="right"> {state.positive}</StyledTableCell>
              <StyledTableCell align="right"> {state.negative}</StyledTableCell>
              <StyledTableCell align="right"> {state.total}</StyledTableCell>
              <StyledTableCell align="right"> {state.deathIncrease}</StyledTableCell>
              <StyledTableCell align="right"> {state.hospitalized}</StyledTableCell>
              <StyledTableCell align="right"> {state.hospitalizedCurrently}</StyledTableCell>
              <StyledTableCell align="right">  {state.hospitalizedIncrease}</StyledTableCell>
              <StyledTableCell align="right"> {state.lastModified}</StyledTableCell>
              <StyledTableCell align="right">  {state.negativeIncrease}</StyledTableCell>
              <StyledTableCell align="right">  {state.recovered}</StyledTableCell>
              <StyledTableCell align="right">  {state.states}</StyledTableCell>
              <StyledTableCell align="right"> {state.totalTestResults}</StyledTableCell>
              <StyledTableCell align="right">  {state.totalTestResultsIncrease}</StyledTableCell>
            </StyledTableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  );
          }
