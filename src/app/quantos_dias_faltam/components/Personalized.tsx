"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differenceInDays, differenceInHours, format } from "date-fns";
import { useState } from "react";

import { ptBR } from "date-fns/locale";




function Personalized() {

    const [startDate, setStartDate] = useState<Date | undefined>(new Date());
    const [endDate, setEndDate] = useState<Date | undefined>(new Date());

    function differenceInDaysFunc() {
        return differenceInDays(endDate as Date, startDate as Date);
    }

    function differenceInHoursFunc() {
        return differenceInHours(endDate as Date, startDate as Date);
    }

    return (
        <Card className="">
            <CardHeader>
                <CardTitle className="text-lg">Informe a data de início e a data de fim para calcular a diferença:</CardTitle>
            </CardHeader>

            <CardContent className="flex justify-center gap-10 item-center mt-20 scale-125">
                <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={(date) => setStartDate(date)}
                    locale={ptBR}
                    className=""
                />

                <div className="flex w-90 flex-col mt-20">
                    <p>Data inicial: {format(startDate as Date, 'dd/MM/yyyy')}</p>
                    <p>Data final: {format(endDate as Date, 'dd/MM/yyyy')}</p>

                    <p>Diferença em dias entre as duas datas: {differenceInDaysFunc()} dias</p>
                    <p>Diferença em horas entre as duas datas: {differenceInHoursFunc()} horas</p>
                </div>

                <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={(date) => setEndDate(date)}
                    locale={ptBR}
                />
            </CardContent> 
        </Card>
    );
}

export default Personalized;