import { createContext, useContext, useMemo, useState } from 'react';
import { AppProviderProps, IAppContext } from './types';

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppProvider = ({ children }: AppProviderProps) => {
    const [showTabBar, setShowTabBar] = useState(true);
    const [profile, setProfile] = useState<IAppContext['profile']>(null);

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
