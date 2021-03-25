import React from 'react';
import NestedList from './dropdownComponent/DropDown';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import SimpleCard from './SearchResults'
import './dropdownComponent/dropdown.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SearchOptions = () => {
  const classes = useStyles();
  const typeItem = [{
    id: 1,
    value:'pothole'
}]

  return (
    <div>
      <div>
        <Paper elevation={3}>
          <h1 className='serachContainer'> Search Options</h1>
          <ListItem className="container">
            <NestedList/>
          </ListItem>
       </Paper>
        <Paper>
          <h1 className='serachContainer'> Search Results</h1>
         <SimpleCard/>
        </Paper>
      </div>
    </div>
  )
}


export default SearchOptions