import { useState } from "react";


export const ListNum = () => {

    const [listNum, setListNum] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const addNum = () => {
        const number = Math.floor(Math.random() * 100) + 1;
        setListNum([...listNum, number]);
    }

    return (
        <div>
            <h1>Lista de Numeros</h1>

            <p id="nums">{listNum.join(", ")}</p>

            <button type="button" onClick={addNum}>Gerar mais um numero</button>

            <br />

            <a href="/main">Voltar para main</a>
        </div>
    );
}