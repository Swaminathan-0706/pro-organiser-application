import React,{useState} from 'react';
import './CreateBoard.css';
import firebase from '/../Users/Bala/Desktop/pro-organiser-application/src/Firestore';


function CreateBoard() {
  const[name,setName]=useState('');
  const[members,setNum]=useState('');
  const[type,setType]=useState('');
  
  const addBoard=(e)=>{
    e.preventDefault();
    let splitByComma=[];
    splitByComma=(members.split(','));
    const db = firebase.firestore();
    db.settings({
    timestampsInSnapshots: true
    });
    const dbColl = db.collection('boardDetails').add({
    boardName : name,
    teamMembers:splitByComma,
    boardType:type
  }); 

  alert("Your Board has been added to Database");
  
  }
 return (
        <div className="ctr">
          <p>Create a Board</p>
          <form>
            <label htmlFor="name">Enter a name for your Board</label>
            <input className="fields" type="text" id="name" value={name} onChange={e=>{setName(e.target.value)}}  placeholder="eg.Agile Sprint Board"></input>
            <label htmlFor="team">Add your team members</label>
            <input className="fields" type="text" id="team" onChange={e=>{setNum(e.target.value)}} placeholder="Add your Team (separated by commas)"></input>
            <label htmlFor="type">Enter the type of your Board</label>
            <input className="fields" type="text" id="type" onChange={e=>{setType(e.target.value)}} placeholder="eg.Design UX"></input>
            <button onClick={addBoard} id="CreateBoard">Create</button>
          </form>  
        </div>
    )
}

export default CreateBoard;
