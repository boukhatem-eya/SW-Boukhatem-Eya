import React, { useState } from "react"
import './Login.css';
import logosw from "../../image/logosw.png";
import emailimg from "../../image/emailimg.jpg";
import pass from "../../image/pass.png";
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../redux/actions/login'

function Login() {
    const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const handleSearchUser = () => {
    fetchUser(email, pwd)
    setEmail("")
    setPwd("")
  }
  const dispatch = useDispatch()
  const fetchUser =  (email, pwd) => {
    dispatch(actions.fetchUser(email, pwd))}

  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={logosw} alt="SW" className="swlogo"/>
           </div>
         </div>
           <div>
             <img src={emailimg} alt="email" className="email"/>
             <input type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} className="name" placeholder="Email ID"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email" />
             <input type="password"
          value={pwd}
          name="pwd"
          onChange={(e) => setPwd(e.target.value)} className="name" placeholder="Password"/>
           </div>
           <div>
           <input 
            name="Rememberme"
            type="checkbox"
         />
         <label>
          Remember me 
         </label>
         <input 
            name="forgetpass"
            type="checkbox"
         />
         <label>
          Forget password 
         </label>
         </div>
          <div className="login-button">
          <button onClick={handleSearchUser}>LOGIN</button>
          </div>
       </div>
     </div>
    </div>
  );
}

export default Login;