import { createContext, useContext, useMemo, useState } from "react";
import { ParkingResumeProviderProps, IParkingResumeContext, IToastQueue, } from "./types";

const ParkingResumeContext = createContext<IParkingResumeContext>({} as IParkingResumeContext);

const ParkingResumeProvider = ({ children }: ParkingResumeProviderProps) => {
    const [toastQueue, setToastQueue] = useState<IToastQueue[]>([]);

    const pushToastToQueue = ({ timeout = 3000, ...rest }: IToastQueue) => {
        const newQueue = toastQueue;
        newQueue.push({ timeout, ...rest })

        setToastQueue(newQueue)
    }

    const popToastFromQueue = () => {
        if (toastQueue.length) {
            const [first, ...rest] = toastQueue;
            setToastQueue(rest)
        };
    }

    function resetQueue() {
        setToastQueue([]);
    }

    const value = useMemo(() => {
        return {
            toastQueue,
            pushToastToQueue,
            resetQueue,
            popToastFromQueue,
        }
    }, [toastQueue])

    return (
        <ParkingResumeContext.Provider value={value}>
            {children}
        </ParkingResumeContext.Provider>
    )
}

export const useParkingResumeContext = () => useContext(ParkingResumeContext);

export default ParkingResumeProvider;