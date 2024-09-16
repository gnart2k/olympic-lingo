import axios from 'axios';


/**
 * Reusable function to fetch data from an API endpoint.
 * 
 * @param {string} endpoint - The API endpoint to fetch data from (e.g., '/users').
 * @param {object} options - Optional configuration for the request (headers, params, etc.).
 * @returns {Promise<any>} - Returns a promise that resolves to the data.
 */
export const authAction = async (endpoint: string, method = 'GET', data = {}, options = {}) => {
  // const API_URL = process.env.REACT_APP_AUTH_API_URL;
  const API_URL = "http://localhost:8080/api/auth"
  try {
    const config = { ...options, method, url: `${API_URL}${endpoint}`, data };
    const response = await axios(config);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(`Error with request to ${endpoint}:`, error);
    throw error;
  }
};
