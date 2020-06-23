import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { UsersToolbar, ToDoCard } from './components';

const items = [
  {
    todoName: 'To Do List name',
    status: 'Active',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Complete',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Active',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Active',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Complete',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Active',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Active',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Complete',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Active',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Active',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Complete',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Active',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Active',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Complete',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
  {
    todoName: 'To Do List name',
    status: 'Active',
    duration: 'May 19 - May 30',
    tasks: '3 task'
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2)
  },
  card: {
    marginTop: '10px'
  }
}));

const Engagement = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <Grid container spacing={4} className={classes.card}>
          {items.map( (item, index) => (
            <Grid key={index} item lg={4} sm={6} xl={4} xs={12}>
                <ToDoCard  data={item}/>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Engagement;
