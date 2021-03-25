import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
					<Paper className={classes.paper}>
						<Button> click me </Button>
					</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						<Button> click me </Button>
					</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						<Button> click me </Button>
					</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						<Button> click me </Button>
					</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						<Button> click me </Button>
					</Paper>
        </Grid>
      </Grid>
    </div>
  );
}