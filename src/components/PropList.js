import React, { useEffect,useState } from 'react';
import firebase from '../firebase';
import PropCrime from './PropCrime';


export default function PropList(){
    const [propList,setPropList]=useState();
    
    useEffect(()=>{
      const propRef = firebase.database().ref('propertyinfo');
      propRef.on('value',(snapshot)=>{
        const props=snapshot.val();
        const propList=[]
        for(let id in props){
            propList.push(props[id]);
        }
        console.log(propList);
        setPropList(propList);
      })
    },[]);
    return (
    <div>
        {propList ? propList.map((prop,index)=><PropCrime prop={prop} key={index}/>) :''}
    </div>
    );
}