import React, { useState } from 'react';
import firebase from '../firebase';

export default function Form() {
  const [name, setName] = useState('');

  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const createProp = () => {
    const propRef = firebase.database().ref('propertyinfo');
    const prop = {
      name
      //complete: false,
    };

    propRef.push(prop);
  };
  return (
    <div>
      <input type="text" onChange={handleOnChange} value={name} />
      <button onClick={createProp}>Add Property Name</button>
    </div>
  );
}