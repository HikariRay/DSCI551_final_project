// import React, { useState } from 'react';
// import firebase from '../firebase';

// export default function Form() {
//   const [name, setName] = useState('');
//   const [neighbourhood, setNeighbourhood] = useState('');

//   const handleNameOnChange = (e) => {
//     setName(e.target.value);
//   };
//   const handleNeighbourhoodOnChange = (n) => {
//     setNeighbourhood(n.target.value);
//   };
  
//   const createProp = () => {
//     const propRef = firebase.database().ref('propertyinfo');
//     const prop = {
//       name,
//       // neighbourhood_group: neighbourhood
//       complete: false,
//     };
//     console.log(prop);
//     propRef.push(prop);
//   };

//   return (
//     <form>
//       <h4>Add Proprety Info</h4>
//       <div>
//         <label>Proprety Name</label>
//         <input type="text" onChange={handleNameOnChange} value={name} />
//       {/* </div> 
//       <div> */}
//         <label>Proprety Neighbourhood</label>
//         <input type="text" onChange={handleNeighbourhoodOnChange} value={neighbourhood} />
//       </div> 
//         <button onClick={createProp}>Add Property</button>
//     </form>
//   );
// }


import React, { useState } from 'react';
import firebase from '../firebase';

export default function Form() {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref('propertyinfo');
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);
  };
  return (
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={createTodo}>Add Todo</button>
    </div>
  );
}