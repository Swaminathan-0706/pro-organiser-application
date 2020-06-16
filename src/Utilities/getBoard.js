import axios from 'axios';

export  const getBoard=()=>{
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
             return dataObj;
             
        }
        
    })
        
        .catch(error =>console.log(error));
        console.log(dataObj);
        
}