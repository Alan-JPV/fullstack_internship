import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Reg(){
    const navigate =useNavigate();
    const[name,setOne]=useState(0);
    const[email,setTwo]=useState(0);
    const[password,setThree]=useState(0);
    const[repassword,setFour]=useState(0);
    const[signUp,setPrint]=useState(0);
    const[error2,setError]=useState(false);

       function name1(e){
           setOne(e.target.value);
       }
       function email1(e){
           setTwo(e.target.value);
       }
       function password1(e){
           setThree(e.target.value);
       }
       function repassword1(e){
            setFour(e.target.value);
       }
       function print(){
        if(password==repassword){
            setPrint({name,email,password,repassword});
            setError(false);
            navigate('/login')
            axios.post('http://localhost:777/register',{
                name,
                email,
                password,
            })
        }
        else{
            setError(true);
        }
       }

    return(
        <div style={{marginLeft:'300px',marginTop:'10px',marginRight:'250px',marginBottom:'150px'}}>
            <div style={{border: '1px solid black' ,padding: '30px' ,borderRadius: '10px',display:'flex',flexDirection:'column',width:"50%",justifyContent:'center',alignSelf:'center',marginTop:'180px'}}>
            <h1 style ={{textAlign:'center'}}>REGISTER</h1>
            <input type="text" placeholder="Enter Username" onChange={name1} /><br />
            <input type="email" placeholder="Enter email" onChange={email1}/><br />
            <input type="password" placeholder="Enter password" onChange={password1}/><br />
            <input type="repassword" placeholder="Enter password again"onChange={repassword1} /><br />
            <button style={{width: '100%'}} onClick={print}>sign up</button>
            <p></p>
            </div>
            {error2 ==true ?<p>enter data mismatch</p>:''}
            <h2>{signUp.name}<br />{signUp.email}<br />{signUp.password}<br />{signUp.repassword}</h2>
            
        </div>
    );
}
export default Reg;