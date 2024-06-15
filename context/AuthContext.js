import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../services/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const handleLogin = async (email, password) => {
        try {
            const response = await login(email, password);
            setUser(response.user);
            router.push('/dashboard'); // redirige vers une page protégée
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
