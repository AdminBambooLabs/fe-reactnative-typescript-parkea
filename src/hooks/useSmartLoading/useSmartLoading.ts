import { useState } from 'react';

function useSmartLoading() {
    const [loading, setLoading] = useState(false);

    async function runWithMinimumLoading<T>(promise: Promise<T>, minTime = 3000): Promise<T> {
        setLoading(true);

        const timeoutPromise = new Promise(resolve => setTimeout(() => resolve(true), minTime));
        const result = await Promise.all([promise, timeoutPromise]);

        setLoading(false);
        return result[0];
    }

    return { loading, runWithMinimumLoading };
}

export default useSmartLoading;
