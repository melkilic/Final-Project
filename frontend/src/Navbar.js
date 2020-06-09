import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { e0f2f1, blue } from '@material-ui/core/colors';
import { blueGrey} from '@material-ui/core/colors';
import {useDispatch, useSelector} from 'react-redux'
import Alert from '@material-ui/lab/Alert';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: blueGrey[900],
    height: theme.spacing(3),
    color: "#e0f2f1",
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: blueGrey[200],
          
    },
    '&:active': {
      boxShadow: theme.shadows[10],
      backgroundColor: "#01579b"
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


export default function Navbar() {
  let user = useSelector(state=>state.userState.state)
   let dispatch=useDispatch()
  console.log(user)
  return (

   
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        href="/"
        label="Home"
        icon={<HomeRoundedIcon fontSize="small" />}
       
      />
      <StyledBreadcrumb component="a" href="/daily" label="US Daily" />
      <StyledBreadcrumb component="a" href="/current" label="US Current"  />
      
      {user !== undefined || null ? 
      <div>
      <StyledBreadcrumb component="a" href="/profile" label="Profile"  />
      
       <StyledBreadcrumb component="a" label="Log out" onClick={()=> dispatch({type: "LOG_OUT"})} />
       </div>
           :
    <div>
    <StyledBreadcrumb component="a" href="/signup" label="Sign Up" />
      <StyledBreadcrumb
        component="a"
        label="Login"
        deleteIcon={<ExpandMoreIcon />}
        href= "/login"
        // onClick={<Alert severity="success">This is a success alert — check it out!</Alert>}
      />
      
      
      </div>
      }
<StyledBreadcrumb component="a" href="/about" label="About"  />
    </Breadcrumbs>
  );
}
