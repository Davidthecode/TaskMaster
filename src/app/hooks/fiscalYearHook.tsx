"use client";

import { useState, useEffect } from "react";

export default function FiscalYearHook() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [fiscalQuarter, setFiscalQuarter] = useState('');
    const [fiscalYear, setFiscalYear] = useState('');

    useEffect(() => {
        const fiscalYearStartMonth = 1;

        const currentDate = new Date();

        const currentMonth = currentDate.getMonth() + 1;
        let calculatedFiscalQuarter;
        if (currentMonth >= fiscalYearStartMonth && currentMonth <= fiscalYearStartMonth + 2) {
            calculatedFiscalQuarter = 'Q1';
        } else if (currentMonth >= fiscalYearStartMonth + 3 && currentMonth <= fiscalYearStartMonth + 5) {
            calculatedFiscalQuarter = 'Q2';
        } else if (currentMonth >= fiscalYearStartMonth + 6 && currentMonth <= fiscalYearStartMonth + 8) {
            calculatedFiscalQuarter = 'Q3';
        } else {
            calculatedFiscalQuarter = 'Q4';
        };

        let calculatedFiscalYear;
        if (currentMonth >= fiscalYearStartMonth) {
            calculatedFiscalYear = currentDate.getFullYear() % 100;
        } else {
            calculatedFiscalYear = currentDate.getFullYear() % 100 - 1;
        };

        setFiscalQuarter(calculatedFiscalQuarter);
        setFiscalYear(`FY${calculatedFiscalYear}`);
    }, []);

    return { fiscalQuarter, fiscalYear };
};