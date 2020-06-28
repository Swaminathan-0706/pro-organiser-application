import React,{useState} from 'react';
import styles from './IndividualCard.module.css';
import TeamRetreival from '../TeamRetreival/TeamRetreival';
import commonStyles from'../../../Components/Styles/styles.module.css';
import {convertDateToNice} from '../../../Funct_Reuse/dateFunction';
import {Modal} from './modal/Modal';



function IndividualCard({card,board,column}) {

  const [cardDetailModal,setCardDetailModal]=useState(false);
  const members = card.teamMembers.map(name => <TeamRetreival name={name} key={name} />);
  const date = new Date(card.date);
  const dueDate = convertDateToNice(date);

  const detailsModal = (
    
      <Modal>
      
      <div className={styles.modalHeader}>
        <div className={styles.title}>
          {card.title}
          <div className={styles.meta}>
            in <span>{board.name}</span>
          </div>
        </div>
        <div className={styles.btnGroup}>
          <button className={commonStyles.info} >
            Edit
          </button>
          <button className={commonStyles.danger} >
            Archive
          </button>
        </div>
        <div className={styles.modalClose} onClick={() => setCardDetailModal(false)}>
          &times;
        </div>
      </div>
      <div className={styles.modalBody}>
        <div className={styles.det}>
          <header>Description</header>
          <div>{card.description}</div>
        </div>
        <div className={styles.det}>
          <header>Members</header>
          <div className={styles.detTeam}>{members}</div>
        </div>
        <div className={styles.det}>
          <header>Due Date</header>
          <div>{dueDate}</div>
        </div>
      </div>
      
      </Modal>
    
  );
    return (
        <>
        
         <li
        className={styles.item}
        onClick={()=>setCardDetailModal(true)}
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
          
          {cardDetailModal&&detailsModal}
        
        </>
    )
}

export default IndividualCard
