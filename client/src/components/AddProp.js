import React, { useState } from 'react';
import firebase from '../firebase';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';
import Box from "@material-ui/core/Box";
export default function AddProp() {
  const [name, setName] = useState('');
  const [neighbourhood, setNeighbourhood] = useState('');

  const handleNameOnChange = (e) => {
    setName(e.target.value);
     };

  const handleNeighbourhoodOnChange = (n) => {
        setNeighbourhood(n.target.value);
    };
  const createProp = () => {
    const propRef = firebase.database().ref('propertyinfo');
    const prop = {
      name,
      neighbourhood_group: neighbourhood,
    };

    propRef.push(prop);
  };
  return (
    
    <div>
        <Typography variant="h4" gutterBottom><Box color="white" fontWeight="fontWeightBold" m={1}>
         Add Property Info
      </Box></Typography>
        <label>Proprety Name:</label>
        <Input type="text"  onChange={handleNameOnChange} value={name} />
        <label color="white">Proprety Neighbourhood:</label>
        <Input type="text"  onChange={handleNeighbourhoodOnChange} value={neighbourhood} />
        <Button variant="contained" color="primary" onClick={createProp}> Add Proprety</Button>
    </div>
  );
}