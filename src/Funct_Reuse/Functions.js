import db from '../Firebase/config';

//Function to Add board details in Firestore database
export const addBoard=async(board)=>{
    try
    {
        await db.collection('boardDetails').add(board);
        return true;
    }
    catch(error)
    {
        return error;
    }
}

//Function to getBoard Details from FireStore
export const getBoards=async()=>{
     try
    {
        const snapshot=await db.collection('boardDetails').get();
        const boards=snapshot.docs.map((x) => ({ ...x.data(), id: x.id }));
        return boards;        
        
    }
    catch(error)
    {   
        return [];
    }

}