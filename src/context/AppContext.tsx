import { createContext, useContext, useMemo, useState } from 'react';
import { AppProviderProps, IAppContext } from './types';

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppProvider = ({ children }: AppProviderProps) => {
    const [showTabBar, setShowTabBar] = useState(true);

    const value = useMemo(() => {
        return {
            showTabBar,
            setShowTabBar,
        };
    }, [showTabBar, setShowTabBar]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
