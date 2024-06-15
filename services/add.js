// services/add.js
import axios from 'axios';

const API_URL = 'http://localhost:4000';

const handleError = (error, context) => {
  const errorMessage = error.response?.data || error.message;
  console.error(`Error during ${context}:`, errorMessage);
  throw errorMessage;
};

export const createHotel = async (nom, email, prix,adresse,numero, devise,  photo) => {
  try {
    const response = await axios.post(`${API_URL}/api/hotels`, {
      nom,
      adresse,
      email,
      numero,
      devise,
      prix,
      photo
    });

    console.log("Nice"); // This will execute upon successful creation

    return response.data;
  } catch (error) {
    handleError(error, 'createHotel');
  }
};
