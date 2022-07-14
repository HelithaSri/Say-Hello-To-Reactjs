import Login from "../pages/Session/Login";
import Home from "../pages/Home";
import {Route, Routes} from "react-router-dom";
import NotFound from "../pages/Session/NotFound";

function App() {
    return (

        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='login' element={<Login/>}/>
            <Route exact path='*' element={<NotFound/>}/>
        </Routes>);
}

export default App;
