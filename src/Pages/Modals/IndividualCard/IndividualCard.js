import React,{useState} from 'react';
import styles from './IndividualCard.module.css';
import TeamRetreival from '../TeamRetreival/TeamRetreival';
import CardDetailModal from '../CardDetailModal/CardDetailModal'; 


function IndividualCard({card,board,column}) {

  const [cardDetailModal,setCardDetailModal]=useState(false);
  const members = card.teamMembers.map(name => <TeamRetreival name={name} key={name} />);


  function openCardDetails(){
      console.log("clicked");
      setCardDetailModal(true);
  }
    return (
        <>
        {cardDetailModal?<CardDetailModal/>:
         <li
        className={styles.item}
        onClick={()=>openCardDetails()}
        >
        <div className={styles.text}>{card.title}</div>
        <div className={styles.actions}>
          <div className={styles.actionBtn}>
            <i
              className="material-icons"
              style={{ fontSize: '30px', cursor: 'move',color:'white' }}
            >
              list
            </i>
            
          </div>
          <div className={styles.team}>{members}</div>
        </div>
        </li>
          } 
        </>
    )
}

export default IndividualCard
