import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      ['@media (min-width:960px)']: {
        width: '40%',
    }
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const {labelname}=props
  const [value, setValue] = React.useState('');
  console.log(value)

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id={labelname}
       label= {labelname} 
       value={value}
       onChange={handleChange}
       />
    </form>
  );
}

