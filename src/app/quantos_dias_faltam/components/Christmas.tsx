import { differenceInDays, isAfter } from "date-fns";

function Christmas() {

    function daysUntilChristmas(): number {
        const today = new Date();
        let christmas = new Date(today.getFullYear(), 11, 25);

        if(isAfter(today, christmas)) {
            christmas = new Date(today.getFullYear() + 1, 11, 25);
        }

        return differenceInDays(christmas, today);
    }


    return (<center><div className="ml-6 mt-40">Faltam {daysUntilChristmas()} dias para o natal!</div></center>);
}

export default Christmas;