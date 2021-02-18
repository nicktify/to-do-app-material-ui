import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
} from "@material-ui/core";
import { filterTodos } from "../redux/actions/index";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: theme.spacing(10),
    marginLeft: theme.spacing(5),
  },
}));

const Filter = ({ filterTodos }) => {
  const classes = useStyles();
  const handleFilter = (e) => {
    filterTodos(e.target.value);
  };

  return (
    <FormControl className={classes.root}>
      <InputLabel id="demo-customized-select-label">Filter</InputLabel>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        onChange={handleFilter}
        defaultValue={"all"}
      >
        <MenuItem value={"all"}>ALL</MenuItem>
        <MenuItem value={"complete"}>COMPLETE</MenuItem>
        <MenuItem value={"incomplete"}>INCOMPLETE</MenuItem>
      </Select>
    </FormControl>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    filterTodos: (todo) => dispatch(filterTodos(todo)),
  };
};

export default connect(null, mapActionsToProps)(Filter);
