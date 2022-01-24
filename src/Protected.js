import React, {useEffect} from "react"
import { useSelector } from "react-redux"
import {useHistory} from 'react-router-dom'
 function Protected(props) {
     let Cmp=props.Cmp
     const history = useHistory();
     const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
     useEffect(() => {
         if(!isAuthenticated){
             history.push("/login")
         }
     }, [])
     return(
         <div>
             <Cmp />
         </div>
     )
 }
 export default Protected