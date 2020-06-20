import React,{useState} from 'react';
import styles from './CreateBoard.module.css';
import firebase from '/../Users/Bala/Desktop/pro-organiser-application/src/Firestore';

function CreateBoard(props) {
  const[name,setName]=useState('');
  const[members,setNum]=useState('');
  const[type,setType]=useState('');
  //Funtion to add Board details to Database
  const addBoard=(e)=>{
    e.preventDefault();
    let splitByComma=[];
    splitByComma=(members.split(','));
    const db = firebase.firestore();
    db.collection('boardDetails').add({
    boardName : name,
    teamMembers:splitByComma,
    boardType:type
  }); 
  alert(`${name} added to Database`);
  props.history.push('/');
  }

 return (
        <div className={styles.ctr}>
          <p>Create a Board</p>
          <form onSubmit={addBoard}>
            <label htmlFor="name">Enter a name for your Board</label>
            <input required className={styles.fields} type="text" id="name" value={name} onChange={e=>{setName(e.target.value)}}  placeholder="eg.Agile Sprint Board"></input>
            <label htmlFor="team">Add your team members</label>
            <input  required  className={styles.fields} type="text" id="team" onChange={e=>{setNum(e.target.value)}} placeholder="Add your Team (separated by commas)"></input>
            <label htmlFor="type">Enter the type of your Board</label>
            <input required className={styles.fields} type="text" id="type" onChange={e=>{setType(e.target.value)}} placeholder="eg.Design UX"></input>
            <button type="submit" className={styles.CreateBoard} id="CreateBoard">Create</button>
          </form>  
        </div>
    )
}

export default CreateBoard;
