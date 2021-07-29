import { axiosDelete, axiosGet, axiosPost, axiosUpdate } from './axiosWrapper';

export const getAllCategories = async (token?: String) => {
    return await axiosGet('/category/getall', token);
};

/** Not just the categories user already defined, but based on the pattern => pattern in v2, later */
export const getUserInterests = async (token: String) => {
    return await axiosGet('/user/interest');
};

export const updateInterest = async (token: String, data: String[]) => {
    return await axiosUpdate('/user/interest', data, token, { withCredentials: true });
};

/** delete all the categories string defined */
export const deleteInterest = async (token: String, data: String[]) => {
    return await axiosDelete('/user/interest', token, data);
};

export const addCategory = async (token: String, name: String, options?: any) => {
    return await axiosPost('/category/create', { name }, token, options);
};
