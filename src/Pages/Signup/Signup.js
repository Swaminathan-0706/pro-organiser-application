import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Funciton to Handle Sign up
  const handleSignUp=(e)=>{
      e.preventDefault();
      console.log(name,email,password);

  }
  return (
    <form onSubmit={handleSignUp} className={styles.signupCtr}>
      <p className={styles.heading}>Sign Up</p>
      <div className={styles.group}>
        <label htmlFor="name">Name</label>
        <input required name="name" type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Your Name"></input>
      </div>
      <div className={styles.group}>
        <label htmlFor="email">Email</label>
        <input required  name="email" type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="mail@example.com"></input>
      </div>
      <div className={styles.group}>
        <label htmlFor="password">Password</label>
        <input required name="password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="******"></input>
      </div>
      <div className={styles.group}>
        <button type="submit">Sign Up</button>
      </div>
      <div className={styles.footer}>
        Have An Account?
        <Link className={styles.link} to="/login">
          Login now
        </Link>
      </div>
    </form>
  );
}

export default Signup;
