import React from 'react';
import styles from './IndividualCard.module.css';
import TeamRetreival from '../TeamRetreival/TeamRetreival';

function IndividualCard({card,board,column}) {
  const members = card.teamMembers.map(name => <TeamRetreival name={name} key={name} />);
    return (
        <>
         <li
        className={styles.item}
        
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
        </>
    )
}

export default IndividualCard
