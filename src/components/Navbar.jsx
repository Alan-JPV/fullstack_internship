
const d={
    display:'flex',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    fontSize: '30px',
    color:'white',
    padding: '40px',
    borderRadius:'10px',
    fontSize:'50px',
}
function Nav(){
    return(
        <div style={d}>
            <hi>Alan Webstite</hi>
            <button style={{width:'100px',borderRadius:'10px',marginLeft:'auto'}}><a href="/login">login</a></button>
            <button style={{width:'100px',borderRadius:'10px'}}><a href="/register">Register</a></button>
        </div>
    );
}

export default Nav