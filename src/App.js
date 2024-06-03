import Home from "./component/Home/Home";
import Profile from "./pages/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/*" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
