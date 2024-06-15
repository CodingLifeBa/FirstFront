import axios from 'axios';

const API_URL = 'http://localhost:4000';

// Helper function to handle errors
const handleError = (error, context) => {
    const errorMessage = error.response?.data || error.message;
    console.error(`Error during ${context}:`, errorMessage);
    throw errorMessage;
};



// Register a new user
export const register = async (nom, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/api/users/register`, { nom, email, password });
        return response.data;
    } catch (error) {
        handleError(error, 'registration');
    }
};

// Log in an existing user
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/api/users/login`, { email, password });
        return response.data;
    } catch (error) {
        handleError(error, 'login');
    }
};


