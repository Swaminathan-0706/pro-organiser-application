import React, { useState,useContext } from 'react';
import './Board.css';
import {addColumn} from '../../Funct_Reuse/Functions'; 
import Loader from '../Modals/Loader/Loader';
import CreateColumnModal from '../Modals/CreateColumnModal/CreateColumnModal'
import CreateCard from '../Modals/CreateCard/CreateCard';


function Board (props){

    const [columnDetails,setColumnDetails]=useState([]);
    const [columnModal,setColumnModal]=useState(false);
    const [cardModal,setCardModal]=useState(false);


    const closeColumnModal=()=>{
        setColumnModal(false);
        
    }
    const closeCardModal=()=>{
        setCardModal(false);
    }
    
    
    return(
        <>
        { (columnModal)&&<CreateColumnModal boardid={props.location.state.id} boardName={props.location.state.boardName} closeColumnModal={closeColumnModal} />}
          { (cardModal)&&<CreateCard boardid={props.location.state.id} teamMembers={props.location.state.teamMembers}  closeCardModal={closeCardModal}/>}
            <>
             <div className="nav">
                <h1 className="header">{props.location.state.boardName}</h1>
                <button  className="delBoard">Delete Board</button>
            </div>            
             <div className="add">
                <>
                {columnDetails.filter(x=>(x.boardid===props.location.state.id)).map(x=>(
                <div key={x.colName} className="colCard">
                <h3  className="colTitle">{x.colName}</h3>
                <i  id="trash" className="fa fa-trash fa-lg" aria-hidden="true"></i>
                <button  className="cardBtn">Add a Card</button> 
                </div>
            ))}
            </>
                 <button onClick={()=>setColumnModal(true)}  className="addBtn">Add a column</button>
                
            </div>
        </>
                
        </>
    )
}








export default Board;

