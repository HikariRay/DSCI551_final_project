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
import Powerslap from './720p.mp4'
import Box from '@material-ui/core/Box';

const styles = {
    paperContainer: {
        position: "absolute",
        width: "100%",
        height: "1000px",
        backgroundImage: `url(${Image})`
    }
};
export default function App(){

  return(
    <div className='App'>
       <video autoPlay loop muted style = {{
           position: "absolute", width: "100%", left: "50%", top: "50%",height: "100%", objectFit: "cover", transform: "translate(-50%,-50%)", zIndex: "-1"}}>
           <source src={Powerslap} type = 'video/mp4'/>
               </video>
      <Typography variant="h3" color={'white'} gutterBottom>
          <Box fontWeight="fontWeightBold" color="white" m={10}>
         NYC Airbnb Crime Safety
      </Box>

      </Typography>
      {/* <PropList /> */}
      <PropSearch />
      {/* <Form /> */}
      <AddProp />

    </div>
  );
}
