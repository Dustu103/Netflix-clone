import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";


function App() {
  return (
    <>
    
    <Router>
    <Navbar/>

    
    <Routes >
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/login" element={<Signin/>} />
    </Routes>
    </Router>
   </>
  );
 
}

export default App;
