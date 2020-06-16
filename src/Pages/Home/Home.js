import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Home.css';
import Board from '../Board/Board';
import {Route, Link} from 'react-router-dom';

    function Home() {
    const[objectData,setData]=useState([])
    const[empty,setEmpty]=useState(false)
    
    
    useEffect(()=>{
        let dataObj=[];
        let tempArr=[];
        axios.get(`https://firestore.googleapis.com/v1/projects/pro-organizer-app-ffebb/databases/(default)/documents/boardDetails/`)
        .then(response => { 
            tempArr=response.data.documents;        
            for (let index = 0; index < tempArr.length; index++) {
            dataObj.push({
                 boardName:tempArr[index].fields.boardName["stringValue"],
                 id:(tempArr[index].name).substring(76)
             })
            }
            if(tempArr.length===0){
                setEmpty(false);
            }
            setData(dataObj);
            
    })
        .catch(error =>console.log(error));
   },[])
     return (
        <>
        { (empty)?<p id="emptymsg">You haven't created any boards. Kindly click on the 'Create Board' button
          in the navigation bar to create a board.</p>:
          <>
          <p id="para">Boards</p>
          
          <div className="ctrBoard">
          {objectData.map((x)=>(
                 <Link className='btnBoard' 
                  to={'/board/' + x.id}
                  key={x.id}>
                  {x.boardName}
                  <div className="txt">{x.name}</div>
                  </Link>
                
          ))}
          </div>
          </>
        }
        <Route exact path='/board' component={Board}/>
         </>
          
    )
}

export default Home
