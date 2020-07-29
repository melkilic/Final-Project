/** @format */

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { blueGrey } from "@material-ui/core/colors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: blueGrey[900],
    height: theme.spacing(3),
    color: "#e0f2f1",
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: blueGrey[200],
    },
    "&:active": {
      boxShadow: theme.shadows[10],
      backgroundColor: "#01579b",
    },
  },
}))(Chip);

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Navbar() {
  let user = useSelector((state) => state.userState.state);
  let dispatch = useDispatch();
  let history = useHistory();
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="span"
        onClick={() => history.push("/home")}
        label="Home"
        icon={<HomeRoundedIcon fontSize="small" />}
      />
      <StyledBreadcrumb
        component="span"
        onClick={() => history.push("/daily")}
        label="US Daily"
      />
      <StyledBreadcrumb
        component="span"
        onClick={() => history.push("/current")}
        label="US Current"
      />
      <StyledBreadcrumb
        component="span"
        onClick={() => history.push("/hospitals")}
        label="Hospitals"
      />

      <StyledBreadcrumb
        component="span"
        onClick={() => history.push("/about")}
        label="About"
      />
      <StyledBreadcrumb
        component="span"
        label="Log out"
        onClick={() => dispatch({ type: "LOG_OUT" })}
        onClick={() => history.push("/")}
      />

    </Breadcrumbs>
  );
}
