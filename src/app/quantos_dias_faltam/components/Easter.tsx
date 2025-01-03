import { differenceInDays, isAfter } from "date-fns";

function Easter() {

    function getEasterDate(year: number): Date {
        const f = Math.floor;
        const G = year % 19;
        const C = f(year / 100);
        const H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30;
        const I = H - f(H / 28) * (1 - f(H / 28) * f(29 / (H + 1)) * f((21 - G) / 11));
        const J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7;
        const L = I - J;
        const month = 3 + f((L + 40) / 44);
        const day = L + 28 - 31 * f(month / 4);

        return new Date(year, month - 1, day);
    }


    function daysUntilEaster(): number {
        const today = new Date();
        let easter = getEasterDate(today.getFullYear());

        if(isAfter(today, easter)) {
            easter = getEasterDate(today.getFullYear() + 1);
        }

        return differenceInDays(easter, today);
    }


    return (<center><div className="ml-6 mt-40">Faltam {daysUntilEaster()} dias para a páscoa!</div></center>);
}

export default Easter;