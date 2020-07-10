import React,{useState,useContext} from "react";
import styles from "../Header/Header.module.css";
import { NavLink } from "react-router-dom";
import {AuthContext} from '../../Context/Authentication';
import { firebaseApp } from "../../Firebase/config";



function Header() {
  
  const { currentUser } = useContext(AuthContext);
  const [isDropdown, setIsDropdown] = useState(false);
  const toggleDropdown=()=>{
    setIsDropdown(!isDropdown);
    
  }
  async function handleLogout() {
    await firebaseApp.auth().signOut();
    setIsDropdown(false);
  }
  return (
    <>
      <div className={styles.Navbar}>
        <NavLink exact to="/" className={styles.Title}>
          Pro Organizer
        </NavLink>
        {currentUser && 
        (<div className={styles.NavItemContainer}>
          <NavLink exact to="/" activeClassName={styles.Active}>
            <div className={styles.NavItem}>Home</div>
          </NavLink>
          <NavLink to="/createboard" activeClassName={styles.Active}>
            <div className={styles.NavItem}>Create a Board</div>
          </NavLink>
          <li className={styles.anchor} onClick={toggleDropdown}>
          <div className={styles.NavItem}>{currentUser.email}</div>
          </li>
          
        
        </div>
         ) }
         {isDropdown && (
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownItem} onClick={handleLogout}>
              Logout
            </div>
          </div>
        )}
      </div>
        
    </>
  );
}

export default Header;
