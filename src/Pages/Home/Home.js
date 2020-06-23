import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styles from './Home.module.css';
import {Link} from 'react-router-dom';

    function Home() {
    const[boardData,setBoardData]=useState([])
    const[emptyBoard,setEmptyBoard]=useState(false)
       useEffect(()=>{
          let boardArray=[];
          let tempArray=[];
          axios.get(`https://firestore.googleapis.com/v1/projects/pro-organizer-app-430d4/databases/(default)/documents/boardDetails/`)
          .then(response => { 
            
              if(Object.keys(response.data).length===0)
              {
                setEmptyBoard(true);
              }
              else
              {
                tempArray=response.data.documents; 
                for (let index = 0; index < tempArray.length; index++)
                {
                   boardArray.push({
                   boardName:tempArray[index].fields.boardName["stringValue"],
                   id:(tempArray[index].name).substring(76),
                   teamMembers:Object.values(tempArray[index].fields.teamMembers["arrayValue"].values)
                })
                }
                console.log(boardArray);
                setBoardData(boardArray)
              }  
          })  
            .catch(error =>console.log(error));
        
      },[boardData])
      return (
        <>
        { (emptyBoard)?<p className={styles.emptyMsg}>You haven't created any boards. Kindly click on the 'Create Board' button
          in the navigation bar to create a board.</p>:
          <>
          <p className={styles.para}>Boards</p>
          <div className={styles.ctrBoard}>
          {boardData.map((x)=>(
                 <Link className={styles.btnBoard} 
                  to={
                      {pathname:`/board/${x.id}`,
                      state:{
                        id:x.id,
                        boardName:x.boardName,
                        teamMembers:x.teamMembers
                      }
                    }
                    }
                  key={x.id}>
                  {x.boardName}
                  <div className={styles.txt}>{x.name}</div>
                  </Link>
          ))}
          </div>
          </>    
    }
         </>
    )
}

export default Home
