// context/LoadingContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

type LoadingContextType = {
    isLoaded: boolean;
    setLoaded: (value: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
    isLoaded: false,
    setLoaded: () => { },
});

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoaded, setLoaded }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);