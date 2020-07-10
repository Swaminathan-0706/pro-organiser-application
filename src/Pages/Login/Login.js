import React from 'react';
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import firebase from 'firebase';

function Login() {

  //Function to Google Login 
  const googleLoginHandler=()=>{
    const base_provider=new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(base_provider).then(function(result){
      console.log("Success..Google Account Linked");
    }).catch(function(error){
      console.log(error);
      console.log("Error");
    })
  }
    return (
        <form  className={styles.loginCtr}>
          <p className={styles.heading}>Login</p>
          
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <input required  name="email" type="text"   placeholder="mail@example.com"></input>
          </div>
          <div className={styles.group}>
            <label htmlFor="password">Password</label>
            <input required name="password" type="password"   placeholder="******"></input>
          </div>
          <div className={styles.group}>
            <button type="submit">Login</button>
          </div>
          <div onClick={googleLoginHandler} className={styles.google}>
        
        
            <img  style={{marginTop:"7px", marginRight:"8px",width:"20px"}} alt="Google sign-in" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
        
        Login with Google
        
      </div>
          <div className={styles.footer}>
            Don't Have An Account? 
            <Link className={styles.link} to="/signup">
              Sign Up
            </Link>
          </div>
        </form>
      );
}

export default Login

