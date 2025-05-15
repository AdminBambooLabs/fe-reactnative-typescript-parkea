import { createContext, useContext, useMemo, useState } from 'react';
import { AppProviderProps, IAppContext } from './types';

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppProvider = ({ children }: AppProviderProps) => {
    const [showTabBar, setShowTabBar] = useState(true);
    const [profile, setProfile] = useState<IAppContext['profile']>({
        "id": "fcab9882-93c5-47fd-9951-0370a4984059",
        "cognitoId": "31cb05f0-9031-70bf-2809-bca22aeff4a8",
        "email": "jownke@gmail.com",
        "name": "Estaionamet",
        "document": "42.564.523/6245-13",
        "contact": "(21) 41526-5373",
        "street": "Rua dos estacionamentos",
        "streetNumber": 1,
        "city": "SP",
        "state": "SP",
        "zipCode": "26436-867",
        "createdAt": "2025-05-15T20:58:18.456Z",
        "updatedAt": "2025-05-15T21:27:28.163Z",
        "weekdayOpen": "09:00",
        "weekdayClose": "19:00",
        "weekendOpen": "09:00",
        "weekendClose": "16:00",
        "hourlyPrices": {
            "id": "468cecbc-0526-4b98-9c36-36973bd1bdf4",
            "parkingId": "fcab9882-93c5-47fd-9951-0370a4984059",
            "pricePer15": "R$ 10,00",
            "pricePer30": "R$ 20,00",
            "pricePer60": "R$ 30,00",
            "pricePerAdditional": "R$ 10,00",
            "createdAt": "2025-05-15T21:29:42.126Z",
            "updatedAt": "2025-05-15T21:58:31.358Z"
        },
        "diaristPrices": {
            "id": "edf34a61-452c-4eca-923f-d39dbba180b2",
            "parkingId": "fcab9882-93c5-47fd-9951-0370a4984059",
            "pricePerHalfDay": "R$ 20,00",
            "pricePerFullDay": "R$ 40,00",
            "createdAt": "2025-05-15T21:48:40.637Z",
            "updatedAt": "2025-05-15T21:48:45.973Z"
        },
        "monthlyPrices": {
            "id": "28f8bd6c-aec5-41eb-8b77-7a4c763b4217",
            "parkingId": "fcab9882-93c5-47fd-9951-0370a4984059",
            "price": "R$ 150,00",
            "createdAt": "2025-05-15T21:48:54.860Z",
            "updatedAt": "2025-05-15T21:48:54.860Z"
        }
    });

    const value = useMemo(() => {
        return {
            showTabBar,
            setShowTabBar,
            profile,
            setProfile,
        };
    }, [showTabBar, setShowTabBar, profile]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
