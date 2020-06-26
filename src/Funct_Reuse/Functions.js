import db from '../Firebase/config';

//Function to Add board details in Firestore
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
//Function to Add Column details in Firstore

export const addColumn=async(column)=>{
    try
    {
        const columnref=await db.collection('columnDetails').add(column);
        return columnref.id;
    }
    catch(error)
    {
        return error;
    }
}

//Function to get all getBoards Details from FireStore
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

//Function to single board using board id from FireStore

export const getBoard=async(id)=>{
    try
    {
        const board = await db.collection('boardsDetails').doc(id).get();
        return { ...board.data(), id: board.id };
    }
    catch(error)
    {
        return error;
        
    }
}



export const getColumns = async (boardId) => {
    try {
      const snapshot = await db
        .collection('columns')
        .where('boardId', '==', boardId)
        .orderBy('created')
        .get();
      const boards = snapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
      return boards;
    } catch (error) {
      return [];
    }
  };