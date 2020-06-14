import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Home.css';

    function Home() {
    const[boardName,setBoard]=useState([])
    const[empty,setEmpty]=useState(false)
    let newArr=[];
    let boardNames=[];
    useEffect(()=>{
        axios.get(`https://firestore.googleapis.com/v1/projects/pro-organizer-app-ffebb/databases/(default)/documents/boardDetails/`)
        .then(response => { 
         let arr=response.data.documents;
        for (let index = 0; index < arr.length; index++) {
             newArr.push(arr[index].fields);
         }
         boardNames=Object.values(newArr.map((x)=>(
            x.boardName["stringValue"]
         ))
        )
        if(boardNames.length===0){
            setEmpty(true);
        }
         setBoard(boardNames);
         console.log(boardNames);
         console.log(newArr);
        })
        .catch(error => { 
            console.log(error); 
        });
     
    },[])
    
    
    return (
        <>
          {(empty)?<p id="emptymsg">You haven't created any boards. Kindly click on the 'Create Board' button
          in the navigation bar to create a board.</p>:
          <>
          <p id="para">Boards</p>
          <div className="ctrBoard">
          {boardName.map((x)=>(
             <button id="btnBoard">{x}</button>
          ))}
          </div>
          </>
    }
          
          
        </>
          
    )
}

export default Home
