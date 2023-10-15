"use client"

import { Dispatch, SetStateAction, useContext} from 'react';
import { createContext, useState, ReactNode } from 'react';

type SidebarType = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
};

export const SidebarContext = createContext<SidebarType | null>(null);

export const UseSidebarContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </SidebarContext.Provider>
    )
};

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('error');
    }
    return context;
};
