import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar'
import Reg from './components/register'
import Log2 from './components/login2';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Hom from './components/home';
import Err from './components/error';
function App() {
  return (
  <>
  
 <BrowserRouter>
 <Nav />
    <Routes>
      <Route path="/register" element={<Reg />}></Route>
      <Route path="/login" element={<Log2 />}></Route>
      <Route path="/" element={<Hom />}></Route>
      <Route path="/*" element={<Err />}></Route>
    </Routes>
 </BrowserRouter>

 </>
  );
}

export default App;
