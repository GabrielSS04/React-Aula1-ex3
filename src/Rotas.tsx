import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { ListNum } from "./ListNum";


export const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main" element={<Main/>}/>
                <Route path="/list-num" element={<ListNum/>}/>
            </Routes>
        </BrowserRouter>
    );

}