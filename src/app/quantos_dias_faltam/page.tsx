import Christmas from "./components/Christmas";
import Easter from "./components/Easter";
import NewYear from "./components/NewYear";
import Personalized from "./components/Personalized";

import Tab from "../components/Tab";

function Page() {

    const types = [
        { id: 'easter', label: 'Quantos dias faltam para a páscoa', func: Easter},
        { id: 'christmas', label: 'Quantos dias faltam para o natal', func: Christmas},
        { id: 'new_year', label: 'Quantos dias faltam para o ano novo', func: NewYear},
        { id: 'personalized', label: 'Informe as datas para calcular a diferença de dias', func: Personalized}
    ];

    return (
        <div className="pl-4 pr-4">
            <b><h1 className="mt-10 ml-4 text-xl">Escolha uma calculadora de intervalo de datas:</h1></b>
            <Tab types={types} />
        </div>

    )
}

export default Page;