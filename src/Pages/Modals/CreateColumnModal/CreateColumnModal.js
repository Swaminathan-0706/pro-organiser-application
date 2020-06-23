import React,{useState} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './CreateColumnModal.module.css';
import firebase from '/../Users/Bala/Desktop/pro-organiser-application/src/Firestore';

function CreateColumnModal(props) {
    
    const [colName,setColName]=useState('');
    //Function to Add column to Database
    const addColumnDb=(e)=>{
        e.preventDefault();
        const db = firebase.firestore();
        db.collection('columnDetails').add({
        colName : colName,
        id:props.id
     })
     alert("Column Added Successfully");
     props.closeColumnModal();
     props.getColumnDetails();
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
