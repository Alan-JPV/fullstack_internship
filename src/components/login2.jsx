import axios from 'axios';
import {useState} from 'react';
function Log2(){
    

    const[email,setTwo]=useState(0);
    const[password,setThree]=useState(0);
    const[repassword,setFour]=useState(0);
    const[signUp,setPrint]=useState(0);
    const[error2,setError]=useState(false);


       function email1(e){
           setTwo(e.target.value);
       }
       function password1(e){
           setThree(e.target.value);
       }
       function repassword1(e){
            setFour(e.target.value);
       }
       async function print(){
        if(password==repassword){
            setPrint({email,password,repassword});
            setError(false);
            const response = await axios.post('http://localhost:777/login',{
            email,
            password,
        })
        console.log(response)
        }
        else{
            setError(true);
        }
       }

    return(
        <div style={{marginLeft:'300px',marginTop:'10px',marginRight:'250px',marginBottom:'150px'}}>
            <div style={{border: '1px solid black' ,padding: '30px' ,borderRadius: '10px',display:'flex',flexDirection:'column',width:"50%",justifyContent:'center',alignSelf:'center',marginTop:'180px'}}>
            <h1 style ={{textAlign:'center'}}>LOGIN</h1>
            <input type="email" placeholder="Enter email" onChange={email1}/><br />
            <input type="password" placeholder="Enter password" onChange={password1}/><br />
            <input type="repassword" placeholder="Enter password again"onChange={repassword1} /><br />
            <button style={{width: '100%'}} onClick={print}>sign in</button>
            <p></p>
            </div>
            {error2 ==true ?<p>enter data mismatch</p>:''}
            <h2>{signUp.email}<br />{signUp.password}<br />{signUp.repassword}</h2>
            
        </div>
    );
}
export default Log2