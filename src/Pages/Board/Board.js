import React, { useState,useEffect } from 'react';
import './Board.css';
import {addColumn,getBoard,getColumns,deleteBoard,deleteColumn} from '../../Funct_Reuse/Functions'; 
import Loader from '../Modals/Loader/Loader';
import * as shortid from 'shortid';
import CreateColumnModal from '../Modals/CreateColumnModal/CreateColumnModal'
import CreateCard from '../Modals/CreateCard/CreateCard';

export default function Board (props){

    const [loading, setLoading] = useState(false);
    const [boardDetails,setBoardDetails]=useState([]);
    const [columns, setColumns] = useState([]);
    const [columnModal,setColumnModal]=useState(false);
    const [cardModal,setCardModal]=useState(false);
    const [selectedColumn, setSelectedColumn] = useState(null);
    

    useEffect(() => {
        (async function () {
          const boardId = await getBoard(props.match.params.boardid);
          setBoardDetails(boardId);
          await getAllColumns(boardId.id, setColumns);
          
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
          boardId: boardDetails.id,
          name: columnName,
          cards: [],
          created: Date.now(),
        };
        addColumn(newColumn)
        .then((output)=>{
          newColumn['id'] = output;
          setColumns([...columns, newColumn]);
          setColumnModal(false);
        })
        
      }
      function openAddCard(selectedColumn) {
        setCardModal(true);
        setSelectedColumn(selectedColumn);
        
      }
     //Function to Add Card in Firestore
    async function handleAddColumn(card){

      try
      {
        card['id'] = shortid();
        const cards = [...selectedColumn.cards, card];

      }
      catch{

      }

    }  




     //Function to delete Board from Firestore
     async function deleteBoardHandler() {
        if (window.confirm('Are you sure you want to delete the board?'))
         {
          setLoading(true);
          const status = await deleteBoard(boardDetails.id);
          if(status){
              props.history.push('/');
          }
        }
      } 
    //Function to delete column from Firestore
    async function deleteColumnHandler(column){
      const newColumnAfterDelete=columns
      .filter(x=>x.id!==column.id)
      .sort((a,b)=>a.created-b.created);

      deleteColumn(column.id)
      .then(()=>{
        setColumns(newColumnAfterDelete);
      })
      .catch(error=>alert(error))
      
      
    }
    return(
        <>
        {loading ? (
        <Loader />
            ) :
        (<>
        { (columnModal)&&<CreateColumnModal addColumn={handleAddCloumn} closeColumnModal={closeColumnModal} />}
          { (cardModal)&&<CreateCard  teamMembers={props.location.state.teamMembers}  closeCardModal={closeCardModal}/>}
            <>
             <div className="nav">
                <h1 className="header">{props.location.state.boardName}</h1>
                <button onClick={deleteBoardHandler}  className="delBoard">Delete Board</button>
            </div>            
             <div className="add">
                <>
                {columns.map(x=>(
                <div key={x.name} className="colCard">
                <h3  className="colTitle">{x.name}</h3>
                <i onClick={()=>deleteColumnHandler(x)} id="trash" className="fa fa-trash fa-lg" aria-hidden="true"></i>
                <button onClick={()=>openAddCard(x)} className="cardBtn">Add a Card</button> 
                </div>
            ))}
            </>
                 <button onClick={()=>setColumnModal(true)}  className="addBtn">Add a column</button>
                
            </div>
        </>
        </>)
}  
        </>
    )
}


//Function to get All Columns
async function getAllColumns(id, setColumns) {
    const resultColumns = await getColumns(id);
    setColumns(resultColumns);
  }