import React from 'react';
import './App.css';
import firebase from 'firebase';
import logo from './logo.svg';
import Form from './components/Form';
import PropList from './components/PropList';
import PropSearch from './components/PropSearch';
import AddProp from './components/AddProp'

export default function App(){

  return(
    <div className='App'>
      <h1>NYC Airbnb Crime</h1>
      {/* <PropList /> */}
      <PropSearch />
      {/* <Form /> */}
      <AddProp />
    </div>
  );
}
