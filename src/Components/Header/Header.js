import React from "react";
import styles from "../Header/Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles.Navbar}>
        <NavLink exact to="/" className={styles.Title}>
          Pro Organizer
        </NavLink>
        <div className={styles.NavItemContainer}>
          <NavLink exact to="/" activeClassName={styles.Active}>
            <div className={styles.NavItem}>Home</div>
          </NavLink>
          <NavLink to="/createboard" activeClassName={styles.Active}>
            <div className={styles.NavItem}>Create a Board</div>
          </NavLink>
          <NavLink to="/login" activeClassName={styles.Active}>
            <div className={styles.NavItem}>admin@gmail.com</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
