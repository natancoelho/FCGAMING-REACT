import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Erro from './pages/Erro'
import Filmes from './pages/Filmes'

import Header from "./components/header";

function RouterApp(){
    return(
        <BrowserRouter>
                    <Header/>
            <Routes>
                <Route path="/" element= {<Home/> }/>
                <Route path="/sobre" element = {<Sobre/>} />
                <Route path="/filmes/:id" element = {<Filmes/>} />



                <Route path="*" element = {<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;