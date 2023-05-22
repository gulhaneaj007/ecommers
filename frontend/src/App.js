import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footerdash from './components/Footerdash';
import SignUp from './components/SignUp'
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent/>} >
            <Route path="/" element={<h1>Dashboard</h1>}/>
            <Route path="/Add" element={<h1>AddProducts</h1>}/>
            <Route path="/Update" element={<h1>Update Products</h1>}/>
            <Route path="/logout" element={<h1>logout</h1>}/>
            <Route path="/Profile" element={<h1>Profile</h1>}/>
          </Route>
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
      <Footerdash />
    </div>
  );
}

export default App;
