import React, { Component } from 'react';
import './Board.css';
import axios from 'axios';
import CreateColumnModal from '../Modals/CreateColumnModal/CreateColumnModal'
import CreateCard from '../Modals/CreateCard/CreateCard';

class Board extends Component {

    constructor(props) {
        
        super(props)
        this.state = {
            columnDetails:[],
            columnModal:false,
            cardModal:false

        }
    }
    
    delBoard=()=>{
        console.log("delete board");
    }
    closeColumnModal=()=>{
        this.setState({columnModal:false});
    }
    closeCardModal=()=>{
        this.setState({cardModal:false});
    }
    getColumnDetails=()=>{
        let dataObj=[];
        let tempArray=[];
        axios.get('https://firestore.googleapis.com/v1/projects/pro-organizer-app-430d4/databases/(default)/documents/columnDetails/')
        .then(response=>{
            tempArray=response.data.documents;   
            for (let index = 0; index < tempArray.length; index++) { 
            dataObj.push({
                 colName:tempArray[index].fields.colName["stringValue"],
                 id:tempArray[index].fields.id["stringValue"]
              })
            }
            this.setState({
                columnDetails:dataObj
            })
            console.log(this.state.columnDetails);
        })
        .catch(error=>console.log(error));

    }
    componentDidMount(){
        
        this.getColumnDetails();
    }
    
    render() {
        return (
            <>
            { (this.state.columnModal)&&<CreateColumnModal id={this.props.location.state.id} boardName={this.props.location.state.boardName} closeColumnModal={this.closeColumnModal} getColumnDetails={()=>this.getColumnDetails}/>}
            { (this.state.cardModal)&&<CreateCard boardName={this.props.location.state.boardName} teamMembers={this.props.location.state.teamMembers}  closeCardModal={this.closeCardModal}/>}
            <>
            <div className="nav">
            <h1 className="header">{this.props.location.state.boardName}</h1>
            <button onClick={this.delBoard} className="delBoard">Delete Board</button>
            </div>
            <div className="add">
                <>
            {this.state.columnDetails.filter(x=>(x.id===this.props.location.state.id)).map(x=>(
                <div key={x.colName} className="colCard">
                <h3  className="colTitle">{x.colName}</h3>
                <i  id="trash" className="fa fa-trash fa-lg" aria-hidden="true"></i>
                <button onClick={()=>this.setState({cardModal:true})} className="cardBtn">Add a Card</button> 
               </div>
            ))}
            </>
                <button onClick={()=>this.setState({columnModal:true})} className="addBtn">Add a column</button>
                
            </div>
            </>
                
            </>
        )
    }
}

export default Board;

