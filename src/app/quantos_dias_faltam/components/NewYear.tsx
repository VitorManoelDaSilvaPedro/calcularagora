import { differenceInDays, isAfter } from "date-fns";

function NewYear() {

    function daysUntilNewYear(): number {
        const today = new Date();
        let newYear = new Date(today.getFullYear(), 11, 31);

        if(isAfter(today, newYear)) {
            newYear = new Date(today.getFullYear() + 1, 11, 31);
        }

        return differenceInDays(newYear, today) + 1;
    }

    return (<center><div className="ml-6 mt-40">Faltam {daysUntilNewYear()} para o ano novo!</div></center>);
}

export default NewYear;