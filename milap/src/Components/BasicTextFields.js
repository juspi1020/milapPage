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
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label= {labelname} />
    </form>
  );
}
