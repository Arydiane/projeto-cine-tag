import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;