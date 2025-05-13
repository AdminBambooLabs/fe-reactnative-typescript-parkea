import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { SignUpProviderProps, ISignUpContext, HourlyPriceTable, DiaristPriceTable, MonthlyPriceTable } from './types';

const SignUpContext = createContext<ISignUpContext>({} as ISignUpContext);

const SignUpProvider = ({ children }: SignUpProviderProps) => {
    const [hourlyPriceTable, setHourlyPriceTable] = useState<HourlyPriceTable>({
        '15': '',
        '30': '',
        '60': '',
        additional: '',
    });
    const [diaristPriceTable, setDiaristPriceTable] = useState<DiaristPriceTable>({
        halfDay: '',
        fullDay: '',
    });
    const [monthlyPriceTable, setMonthlyPriceTable] = useState<MonthlyPriceTable>({
        value: '',
    });

    const checkAllPriceTables = useCallback(() => {
        let canPass = true;

        const priceTables = { ...hourlyPriceTable, ...diaristPriceTable, ...monthlyPriceTable };

        if (!Object.keys(priceTables).length) {
            canPass = false;
        };

        Object.values(priceTables).forEach(tableValue => {
            if (!tableValue) {
                canPass = false;
            }
        });

        return canPass;
    }, [hourlyPriceTable, diaristPriceTable, monthlyPriceTable]);

    const value = useMemo(() => {
        return {
            hourlyPriceTable,
            setHourlyPriceTable,
            diaristPriceTable,
            setDiaristPriceTable,
            monthlyPriceTable,
            setMonthlyPriceTable,
            checkAllPriceTables,
        };
    }, [
        hourlyPriceTable,
        setHourlyPriceTable,
        diaristPriceTable,
        setDiaristPriceTable,
        monthlyPriceTable,
        setMonthlyPriceTable,
        checkAllPriceTables,
    ]);

    return (
        <SignUpContext.Provider value={value}>
            {children}
        </SignUpContext.Provider>
    );
};

export const useSignUpContex = () => useContext(SignUpContext);

export default SignUpProvider;
