import { Link } from "react-router-dom";
const middle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderStyle: 'solid',
    // padding: '10px',
    // borderColor: 'black',
     marginLeft: '130px',
     marginRight: '530px',
     //marginTop: '10px',
    // borderRadius: '10px',
    // borderWidth: '1px',
    //textAlign: 'center',
    /*font-style: oblique;*/
    //marginBottom: '10px'
    
    
}

function Err(){
    return (
        <div style={middle}>
            { <h1 style={{fontstyle:"oblique"}}><p style={{fontSize:'60px'}}>404 <br/> SOMETHING WENT<br/>WRONG !</p></h1> }
            
            <Link to='/'><button style={{height:'80px',width:'250px'}}>home</button></Link>
        </div>
    )
}

export default Err;