import React,{useState} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './CreateColumnModal.module.css';
import {addColumn} from '../../../Funct_Reuse/Functions';

function CreateColumnModal(props) {
   
    const [colName,setColName]=useState('');
    //Function to Add column to Database
    const addColumnDb=(e)=>{
        e.preventDefault();
        console.log(colName);
        debugger
        addColumn(colName);
        
    }
    return (
        <>  
            
            <Backdrop/>
            <div className={styles.colModal}>
                <div className={styles.colHeader}>
                    <span className={styles.top}>Add Column</span>
                    <button onClick={()=>props.closeColumnModal()} className={styles.clos}>x</button>
                </div>
                <div className={styles.colField}>
                    <span className={styles.middle}>Enter a Column Name:</span>
                    <input onChange={(e)=>setColName(e.target.value)} type="text" className={styles.column_names} id="column_names"></input>
                </div>
                <div className={styles.colBtn}>
                    <button onClick={addColumnDb} className={styles.CreateColumn} id="CreateColumn">Add Column</button>
                </div>
            </div>
        </>
    )
}


export default CreateColumnModal;
