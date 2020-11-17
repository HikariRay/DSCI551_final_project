
import React, { useState } from 'react';
import firebase from '../firebase';

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
        <h1>Add Proprety Info</h1>
        <label>Proprety Name:</label>
        <input type="text" onChange={handleNameOnChange} value={name} />
        <label>Proprety Neighbourhood:</label>
        <input type="text" onChange={handleNeighbourhoodOnChange} value={neighbourhood} />
        <button onClick={createProp}>Add Proprety</button>
    </div>
  );
}