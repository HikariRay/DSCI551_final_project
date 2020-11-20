import React, { useEffect,useState } from 'react';
import firebase from '../firebase';
//import PropCrime from './PropCrime';
import PropTable from './PropTable';

export default function PropSearch(){
    const [propList,setPropList]=useState();
    const [name, setName] = useState('');

    const handleOnChange = (e) => {
        setName(e.target.value);
      };
    
    //console.log(name);


    const searchProp = () => {
      const propRef = firebase.database().ref('propertyinfo');
      propRef.on('value',(snapshot)=>{
        const props=snapshot.val();
        const propList=[]
        for(let id in props){
          //console.log(props[id]);
          if (props[id].name.toLowerCase().includes(name.toLowerCase())){
            //console.log(props[id]);
            propList.push(props[id]);          
          }
          if(propList.length>30){break;}
          console.log(propList.length);
        }
       
        setPropList(propList);
      });
    };


    return (
    <div>
        <h1>Search Proprety</h1>
        <input type="text" placeholder="Search" onChange={handleOnChange} value={name} />
        <button onClick={searchProp}>Search Property Name</button>
        {/* {propList ? propList.map((prop,index)=><PropTable prop={prop} key={index}/>) :''} */}
        <table id="example" class="display table">
        <thead class="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Neighbourhood_group</th>
                    <th>Felony</th>
                    <th>Misdemeanor</th>
                    <th>Violation</th>
                </tr>
        </thead>
        <tbody>
            {propList ? propList.map((prop,index)=><PropTable prop={prop} key={index}/>) :''}
        </tbody>
    </table>


    </div>
    );
}
