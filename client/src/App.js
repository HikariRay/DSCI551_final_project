import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';
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
  const [Neighborhoods, setNeighborhood] = useState([]);
  const [Violation, setViolation] = useState([]);
  const [Felony, setFelony] = useState([]);
  const [Misdemeanor, setMisdemeanor] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  
  const submitType = () => {
    Axios.post("http://localhost:3012/api/insert",{
      movieName: movieName,
      movieReview: review,
    }).then(() => {
      alert("Success");
    });
  };
  
  useEffect(()=>{
    Axios.get('http://localhost:3012/api/get/1').then((response) => {
      setNeighborhood(response.data);
    });
  })
  useEffect(()=>{
    Axios.get('http://localhost:3012/api/get/2').then((response) => {
      setViolation(response.data);
    });
  })
  useEffect(()=>{
    Axios.get('http://localhost:3012/api/get/3').then((response) => {
      setFelony(response.data);
    });
  })
  useEffect(()=>{
    Axios.get('http://localhost:3012/api/get/4').then((response) => {
      setMisdemeanor(response.data);
    });
  })

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
      <label>Neighborhood:</label>
      <input type="text" name ="neighbor" onChange={(e)=>{
        setMovieName(e.target.value);}}/>
      <label>Type (Felony, Misdemeanor, Violation):</label>
      <input type="text" name ="type" onChange={(e)=>{
        setReview(e.target.value);}}/>
      <button onClick={submitType}>Submit</button>
      {Neighborhoods.map((val) => {
        return <h1>Neighborhood: {val.Neighborhood} | Total Cases: {val.Total_Cases}</h1>
      })}
      {Violation.map((val) => {
        return <h1>Neighborhood: {val.Neighborhood} | Total Violations: {val.violation}</h1>
      })}
      {Felony.map((val) => {
        return <h1>Neighborhood: {val.Neighborhood} | Total Felonies: {val.felony}</h1>
      })}
      {Misdemeanor.map((val) => {
        return <h1>Neighborhood: {val.Neighborhood} | Total Misdemeanors: {val.mis}</h1>
      })}

    </div>
  );
}