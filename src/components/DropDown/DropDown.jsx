import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '182px',
    borderRadius: '5px',
    height: '60px',
    // border: '1px solid #8798AD'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input: {
    // maxHeight: '40px'
    
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    color: '#8798AD',
    border: '1px solid #8798AD',
    bordeRadius: '5px',
    height: '40px',
    marginTop: '10px'
  }
}));

const DropDown = props => {
  const { items, inputLabel } = props;
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl  className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label" style={{marginLeft: '10px'}}>{inputLabel}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        disableUnderline
        onChange={handleChange}
        className={classes.input}
      >
        {items.map((item, index) => (
          <MenuItem value={index} key={index}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

DropDown.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object
};

export default DropDown;
