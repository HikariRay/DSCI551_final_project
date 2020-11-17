import React, { useEffect,useState } from 'react';
import firebase from '../firebase';
import PropCrime from './PropCrime';


export default function PropSearch(){
    const [propList,setPropList]=useState();
    const [name, setName] = useState('');

    const handleOnChange = (e) => {
        setName(e.target.value);
      };
    
    console.log(name);

    // useEffect(()=>{
    //   const propRef = firebase.database().ref('propertyinfo');
    //   propRef.on('value',(snapshot)=>{
    //     const props=snapshot.val();
    //     const propList=[]
    //     for(let id in props){
    //       if (props[id].name==name){
    //         console.log(props[id]);
    //         propList.push(props[id]);
    //       }
    //     }
    //     console.log(propList);
    //     setPropList(propList);
    //   })
    // },[]);

    const searchProp = () => {
      const propRef = firebase.database().ref('propertyinfo');
      propRef.on('value',(snapshot)=>{
        const props=snapshot.val();
        const propList=[]
        for(let id in props){
          if (props[id].name.toLowerCase().includes(name.toLowerCase())){
            console.log(props[id]);
            propList.push(props[id]);
          }
        }
        //console.log(propList);
        setPropList(propList);
      });
    };


    return (
    <div>
        <h1>Search Proprety</h1>
        <input type="text" placeholder="Search" onChange={handleOnChange} value={name} />
        <button onClick={searchProp}>Search Property Name</button>
        {propList ? propList.map((prop,index)=><PropCrime prop={prop} key={index}/>) :''}
    </div>
    );
}
