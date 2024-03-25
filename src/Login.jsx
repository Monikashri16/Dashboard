import { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom'
import record from './records.json'

function Login() {

    console.log(record.map((m)=> m.roll_no.toString().substring(6,10)))

    const [roll,setRoll] = useState('')
    const[pass,setPass] = useState('')
    const navigate = useNavigate();

    const handleSubmit = ()=>{

       const data =  record.filter((rec)=> {
        let p = rec.roll_no.toString().substring(6,10)
        // console.log(typeof(roll),typeof(p))
        return Number(roll) === rec.roll_no && pass === p
       })

       if(data.length > 0){
            navigate('/BarchartData',{state: data})
       }else{
        alert("invalid roll or password ")
        console.log("error")
       }    

    //    console.log(data)

        // console.log(roll,pass);
    }

    return(
        <div className="box">
            <h1>Login</h1>
            <div className="input-box">
                <div><input type="number" placeholder="Roll Number" value={roll} onChange={((e)=>setRoll(e.target.value))}  required/></div>
                <div><input type="password" placeholder="Password" value={pass} onChange={((e)=>setPass(e.target.value))} required/></div>
                <div><a href='#'>Forgot Password</a></div>
               <div> <button onClick={handleSubmit}>Login</button></div>
                <p>Don't have an account?</p>
                <div><button onClick={()=>navigate('/Register')}>Register</button></div>
            </div>
            </div>
    );
}
export default Login;