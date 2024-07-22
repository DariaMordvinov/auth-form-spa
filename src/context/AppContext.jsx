import { createContext, useState } from 'react';

export const AppContext = createContext({});

export const AppContextWrapper = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    const [toasts, setToasts] = useState([]);
    const removeToast = (id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    const showToast = ({ message, type }) => {
        const toast = {
            id: Date.now(),
            message,
            type,
        };

        setToasts((prevToasts) => [...prevToasts, toast]);

        setTimeout(() => {
            removeToast(toast.id);
        }, 5000);
    };

    return (
        <AppContext.Provider
            value={{
                toasts,
                removeToast,
                showToast,
                isLogged,
                setIsLogged
            }}
        >
            {children}
        </AppContext.Provider>
    )
}