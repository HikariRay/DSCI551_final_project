import React from 'react';
import './App.css';
import firebase from 'firebase';
import logo from './logo.svg';
import Form from './components/Form';
import PropList from './components/PropList';


export default function App(){

  return(
    <div className='App'>
      <h1>property info</h1>
      <Form />
      <PropList />
    </div>
  );
}
