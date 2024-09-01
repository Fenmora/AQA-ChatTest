
import './login.css'
import { useState } from "react";
import { toast } from 'react-toastify'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from '../../../lib/firebase';
import {doc, setDoc} from 'firebase/firestore';

const Login = () => {
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);
    
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        } finally {
          setLoading(false);
        }
      };
      const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
    
        const { username, email, password } = Object.fromEntries(formData);
        try {
          const res = await createUserWithEmailAndPassword(auth, email, password);
    
          await setDoc(doc(db, "users", res.user.uid), {
            username,
            email,
            id: res.user.uid,
          });
    
          await setDoc(doc(db, "userchats", res.user.uid), {
            chats: [],
          });
    
          toast.success("Account created! You can login now!");
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        } finally {
          setLoading(false);
        }
      };

    return ( 
    <div className="login">
        <div className="item">
        <h1>User Login </h1>
        <form onSubmit={handleLogin}>
            <input type='text' placeholder='email' name="email"/>
            <input type='password' placeholder='Password' name="password"/>
            <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
        </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h1>User Register </h1>
        <form onSubmit={handleRegister}>
            <input type='text' placeholder='Username' name="username"/>
            <input type='text' placeholder='Email' name="email"/>
            <input type='password' placeholder='Password' name="password"/>
            <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
        </form>
        </div>
    </div>
    
    );
}

export default Login; 
 