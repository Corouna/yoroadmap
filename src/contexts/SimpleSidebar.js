import { createContext, useState } from 'react';

const SidebarContext = createContext({});

const SimpleSidebarHandler = props => {
    const [open, setOpen] = useState(false);

    return { open, setOpen };
}

const SidebarProvider = ({ children }) => {
    const handler = SimpleSidebarHandler();

    return (
        <SidebarContext.Provider value={handler}>
            { children }
        </SidebarContext.Provider>
    )
}

export { SidebarContext, SidebarProvider };