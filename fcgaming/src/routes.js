import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Erro from './pages/Erro'
import Privacidade from './pages/Privacidade'



import Header from "./components/header";
import DarkMode from "./components/darkmode";
import Cursor from "./components/cursor";


function RouterApp(){
    return(
        <BrowserRouter>
                    <Header/>
                    <Cursor/>
                    <DarkMode/>
            <Routes>
                <Route path="/" element= {<Home/> }/>
                <Route path="/sobre" element = {<Sobre/>} />
                <Route path="*" element = {<Erro/>} />
                <Route path="/privacidade" element = {<Privacidade/>} />
               
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;