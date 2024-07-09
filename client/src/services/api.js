import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getUserGroups = async () => {
    try {
        const response = await axios.get(`${API_URL}/usergroups`);
        console.log(response.data)
        return  response.data;


    } catch (error) {
        console.error('Error fetching user groups:', error);
        throw error;
    }
};
