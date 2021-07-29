import axios from 'axios';
import cookieCutter from 'cookie-cutter';

const test = true;
const prefix = test ? 'http://localhost:8080/api/v1' : 'https://www.wisaly.com/api/v1';

export const axiosGet = async (url: string, token?: String, options?: any) => {
    console.log('method called');
    const axiosOption = {
        ...options,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return await axios.get(prefix + url, axiosOption);
};

export const axiosUpdate = async (url: string, updatedData: any, token?: String, options?: any) => {
    const axiosOption = {
        ...options,
        headers: {
            Authorization: `Bearer ${token}`,
            withCredentials: true
        }
    };

    return await axios.put(prefix + url, updatedData, axiosOption);
};

export const axiosPost = async (url: string, data: any, token?: String, options?: any) => {
    console.log('method called');
    const axiosOption = {
        ...options,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return await axios.post(prefix + url, data, axiosOption);
};

/** In delete, data is int the axiosOption */
export const axiosDelete = async (url: string, token?: String, data?: any, options?: any) => {
    const axiosOption = {
        ...options,
        data: data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return await axios.delete(prefix + url, axiosOption);
};
