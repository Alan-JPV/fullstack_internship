
function Log(){
    return(
        <div style={{marginLeft:'300px',marginTop:'10px',marginRight:'250px',marginBottom:'150px'}}>
            <div style={{border: '1px solid black' ,padding: '30px' ,borderRadius: '10px',display:'flex',flexDirection:'column',width:"50%",justifyContent:'center',alignSelf:'center',marginTop:'180px'}}>
            <h1 style ={{textAlign:'center'}}>LOGIN</h1>
            <input type="text" placeholder="Enter Username" /><br />
            <input type="email" placeholder="Enter email" /><br />
            <input type="password" placeholder="Enter password" /><br />
            <input type="repassword" placeholder="Enter password again" /><br />
            <button style={{width: '100%'}}>sign in</button>
            </div>
        </div>
    );
}
export default Log