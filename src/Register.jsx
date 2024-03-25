import './Register.css'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    return(
        <div className="box">
            <h1>Register</h1>
            <div className="input-box">
                <div><input type="number" placeholder="Roll Number" required/></div>
                <div><input type="number" placeholder="Date of Birth" required/></div>
                <div><input type="password" placeholder="Password" required/></div>
                <div><input type="password" placeholder="Password" required/></div>
                <div><button onClick={()=>navigate('/Login')}>Register</button></div>
                <p>Already have an account?</p>
                <div><button onClick={()=>navigate('/Login')}>Login</button></div>
            </div>
        </div>
    );
}
export default Register;