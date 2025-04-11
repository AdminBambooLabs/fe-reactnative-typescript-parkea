import { createContext, useContext, useMemo } from "react";
import { AppProviderProps, IAppContext } from "./types";

const AppContext = createContext<IAppContext>({});

const AppProvider = ({ children }: AppProviderProps) => {
    const value = useMemo(() => {
        return {}
    }, [])

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);

export default AppProvider;