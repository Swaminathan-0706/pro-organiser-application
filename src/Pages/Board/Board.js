import React, { useState,useEffect } from 'react';
import './Board.css';
import {addColumn,getBoard,getColumns} from '../../Funct_Reuse/Functions'; 
import Loader from '../Modals/Loader/Loader';
import CreateColumnModal from '../Modals/CreateColumnModal/CreateColumnModal'
import CreateCard from '../Modals/CreateCard/CreateCard';

export default function Board (props){

    const [columnDetails,setColumnDetails]=useState([]);
    const [columnModal,setColumnModal]=useState(false);
    const [cardModal,setCardModal]=useState(false);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        (async function () {
          const data = await getBoard(props.match.params.boardid);
          setColumnDetails(data);
          await getAllColumns(data.id, setColumns);
          
        })();
      }, [props.match.params.boardid]);

    //Function to close Modals
    const closeColumnModal=()=>{
        setColumnModal(false);
        
    }
    const closeCardModal=()=>{
        setCardModal(false);
    }
    //Function to Add column in Firestore
    const handleAddCloumn=(columnName) =>{
        
        const newColumn = {
          boardId: columnDetails.id,
          name: columnName,
          cards: [],
          created: Date.now(),
        };
        addColumn(newColumn)
        .then((output)=>{
          newColumn['id'] = output;
          setColumns([...columns, newColumn]);
          console.log(columns);
          setColumnModal(false);
        })
        
      }
    
      
    
    return(
        <>
        { (columnModal)&&<CreateColumnModal addColumn={handleAddCloumn} closeColumnModal={closeColumnModal} />}
          { (cardModal)&&<CreateCard boardid={props.location.state.id} teamMembers={props.location.state.teamMembers}  closeCardModal={closeCardModal}/>}
            <>
             <div className="nav">
                <h1 className="header">{props.location.state.boardName}</h1>
                <button  className="delBoard">Delete Board</button>
            </div>            
             <div className="add">
                <>
                {columns.map(x=>(
                <div key={x.name} className="colCard">
                <h3  className="colTitle">{x.name}</h3>
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



async function getAllColumns(id, setColumns) {
    const resultColumns = await getColumns(id);
    setColumns(resultColumns);
  }