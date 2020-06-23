import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles (theme => ({
  badge: {
    width: '18px',
    height: '18px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '50%',
    textAlign: 'center',
    marginLeft: 'auto'
  }
}))

const MessageBadge = props => {
  const classes = useStyles();
  const { count } = props;

  return (
    <div className={classes.badge}>
      {count}
    </div>
  )
}

export default MessageBadge;