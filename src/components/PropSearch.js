import React, { useEffect,useState } from 'react';
import firebase from '../firebase';
import PropCrime from './PropCrime';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';

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
        <Typography variant="h4" gutterBottom>Search Property</Typography>
        <Input type="text" placeholder="Search Here" onChange={handleOnChange} value={name} />
        <Button variant="contained" color="primary" onClick={searchProp}> Search Property Name</Button>
        {propList ? propList.map((prop,index)=><PropCrime prop={prop} key={index}/>) :''}
    </div>
    );
}
