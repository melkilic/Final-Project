import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { e0f2f1, blue } from '@material-ui/core/colors';
import { blueGrey} from '@material-ui/core/colors';

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
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        href="/"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        onClick={handleClick}
      />
      <StyledBreadcrumb component="a" href="#" label="US Daily" onClick={handleClick} />
      <StyledBreadcrumb component="a" href="#" label="US Current" onClick={handleClick} />

      <StyledBreadcrumb
        label="Login"
        deleteIcon={<ExpandMoreIcon />}
        onClick={handleClick}
        onDelete={handleClick}
      />

<StyledBreadcrumb component="a" href="#" label="About" onClick={handleClick} />
    </Breadcrumbs>
  );
}
