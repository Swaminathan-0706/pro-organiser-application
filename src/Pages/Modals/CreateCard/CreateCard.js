import React,{useState} from 'react';
import './CreateCard.css';
import Backdrop from '../Backdrop/Backdrop';
import firebase from '/../Users/Bala/Desktop/pro-organiser-application/src/Firestore';


function CreateCard(props) {
    console.log(props);
    const[cardTitle,setCardTitle]=useState('');
    const[cardDesc,setCardDesc]=useState('');
    const[cardDueDate,setDue]=useState('');
    const[cardMembers,setCardMembers]=useState([]);

    //Function to get Team members
    const teamHandler=(e)=>{
        const values = [...e.target.selectedOptions].map(x => x.value);
        setCardMembers(values);
    }
    //Function to check due date
    const dueDate=(e)=>{
        const today = new Date().toISOString().slice(0,10);
        if(e.target.value<today){
            alert("You cant select past date");
        }
        else{
            setDue(e.target.value);
        }
        
    }
    //Function to add Card Data in Database
    const addCardDB=(e)=>{
        e.preventDefault();
        const db = firebase.firestore();
        db.collection('cardDetails').add({
            cardTitle:cardTitle,
            cardDesc:cardDesc,
            cardDueDate:cardDueDate,
            cardMembers:cardMembers,
            boardName:props.boardName
     })
     alert("Card Added Successfully");
     props.closeCardModal()

    }
    
     return (
        <div>
         <Backdrop/>  
         <form onSubmit={addCardDB} className="cardModal">
                <div className="colHeader">
                    <span className="top">Add Card</span>
                    <button onClick={()=>props.closeCardModal()} id="close">x</button>
                </div> 
                <div className="cardTitle">
                <p id="ptag">Enter a title for your task</p>
                <input required value={cardTitle} onChange={(e)=>setCardTitle(e.target.value)} type="text" id="title" placeholder="eg.Add a new icon"></input>
                </div>  
                <div className="cardMembers">
                     <p id="ptag">Choose members for this task,(select multiple if needed)</p> 
                        <select
                        multiple={true}
                        onChange={teamHandler}
                        className="team"
                        id="team" 
                        value={cardMembers} 
                        name="team" 
                        >
                        {props.teamMembers.map(x=>(
                        <option value={x["stringValue"]} key={x["stringValue"]}>
                        {x["stringValue"]}
                        </option>
                         ))}
                        </select>
                        </div>
                <div className="cardDesc">
                <p id="ptag">Add the description for your task</p> 
                <input value={cardDesc} required onChange={(e)=>setCardDesc(e.target.value)} type="text" id="description" placeholder="eg.Add your description here"></input>  
                </div>
                <div className="cardDate">
                <p id="ptag">Select the due date for this task</p>   
                <input value={cardDueDate} required onChange={dueDate} type="date" id="due_date"></input>
                </div>
                <div className="cardBtn">
                <button type="submit"  id="CreateCard">Add Card</button>  
                </div>
         </form > 
        </div>
    )
}

export default CreateCard
