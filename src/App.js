import React from 'react';
import './App.css';
import firebase from 'firebase';
import logo from './logo.svg';
import Form from './components/Form';
import PropList from './components/PropList';
import PropSearch from './components/PropSearch';
import AddProp from './components/AddProp'
import 'fontsource-roboto';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Image from './IMG_1579.jpg'; // Import using relative path


const styles = {
    paperContainer: {
        width: "100%",
        height: "1000px",
        backgroundImage: `url(${Image})`
    }
};
export default function App(){

  return(

    <div className='App'>
        <Paper style={styles.paperContainer}>
      <Typography variant="h3" color={'blue'} gutterBottom>
        NYC Airbnb Crime Safety
      </Typography>
      {/* <PropList /> */}
      <PropSearch />
      {/* <Form /> */}
      <AddProp />
      </Paper>
    </div>
  );
}
