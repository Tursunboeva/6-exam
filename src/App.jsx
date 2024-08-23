// 
import './App.css';
import { Routes, Route ,useLocation} from 'react-router-dom';
import Home from './routes/Home';
import Single from './routes/Single';
import Refurbished from './routes/ColllectionRefurbished'; 
import Nav from './components/nav/Nav';
import Links from './components/links/Links';
import Login from './routes/Login' 

function App() {
  const { pathname } = useLocation();
  return (
    <>
   
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/refurbished" element={<Refurbished />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Links />
      {pathname !== '/login' &&  <Nav/>}
    </>
  );
}

export default App;
