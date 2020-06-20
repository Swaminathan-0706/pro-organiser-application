import React,{useState,useEffect} from 'react';
import './Board.css';
import axios from 'axios';
import CreateColumnModal from '../Modals/CreateColumnModal/CreateColumnModal'
import CreateCard from '../Modals/CreateCard/CreateCard';

function Board(props) { 

      
    const[columnModal,setColumnModal]=useState(false);
    const[cardModal,setCardModal]=useState(false);
    const[columnDetails,setColumnDetails]=useState([]);
    useEffect(()=>{
        let dataObj=[];
        let tempArray=[];
        axios.get('https://firestore.googleapis.com/v1/projects/pro-organizer-app-430d4/databases/(default)/documents/columnDetails/')
        .then(response=>{
            tempArray=response.data.documents;   
            for (let index = 0; index < tempArray.length; index++) { 
            dataObj.push({
                 colName:tempArray[index].fields.colName["stringValue"],
                 boardName:tempArray[index].fields.boardName["stringValue"],
                 id:(tempArray[index].name).substring(77),
              })
            }
            setColumnDetails(dataObj);
        })
        .catch(error=>console.log(error));
        
    },[setColumnDetails])
    //Function to Delete Board
    const delBoard=()=>{
        console.log("delete board");
    }
    return (
        <>  
        {   (columnModal)&&<CreateColumnModal boardName={props.location.state.boardName} closeColumnModal={()=>setColumnModal(false)}/>}
        {   (cardModal)&&<CreateCard boardName={props.location.state.boardName} teamMembers={props.location.state.teamMembers}  closeCardModal={()=>setCardModal(false)}/>}
            <>
            <div className="nav">
            <h1 className="header">{props.location.state.boardName}</h1>
            <button onClick={delBoard} className="delBoard">Delete Board</button>
            </div>
            <div className="add">
                <>
            {columnDetails.filter(x=>(x.boardName===props.location.state.boardName)).map(x=>(
                <div key={x.colName} className="colCard">
                <h3  className="colTitle">{x.colName}</h3>
                <i  id="trash" className="fa fa-trash fa-lg" aria-hidden="true"></i>
                <button onClick={()=>setCardModal(true)} className="cardBtn">Add a Card</button> 
               </div>
            ))}
            </>
                <button onClick={()=>setColumnModal(true)} className="addBtn">Add a column</button>
                
            </div>
            </>
           
            
        </>
    )
}

export default Board;
