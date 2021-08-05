import axios from 'axios';
import { axiosGet, axiosPost, axiosUpdate } from './axiosWrapper';
import { userLogin } from '../dto/userLogin';
import { feedback } from 'dto/user';

const test = true;
const url: string = test ? 'http://localhost:8080/api/v1' : 'https://www.wisaly.com/api/v1';

export const LoginUser = async (data: userLogin, token?: String) =>
    await axiosPost(`/login`, data, token, { withCredentials: true });

export const LogoutUser = async () => await axios.get(`${url}/logout/`, { withCredentials: true });

export const updateData = async (data) =>
    await axios.put(url, data, { headers: { 'Content-Type': 'application/json' } });

export const getUserDetails = async (token: String, username?: String, options?) =>
    await axiosGet(`/user/account?username=${username}`, token, options);

export const getBasicDetails = async (token: String, options?) => {
    return await axiosGet(`/user/basic`, token);
};
export const deleteProfile = async () =>
    await axios.delete(`${url}/user/delete`, { withCredentials: true });

export const getUserContentExplore = async (token) =>
    await axiosGet('/user/explore-content', token);

export const postFeedback = async (token: string, data: feedback) => {
    return await axiosPost('/user/feedback', data, token, { withCredentials: true });
};

export const getSuggested = async (token: string) => {
    return await axiosGet('/user/suggest', token);
};

export const getFollowing = async (token: string) => {
    await axiosGet('/user/following', token, { withCredentials: true });
};

export const getFollowers = async (token: string) => {
    await axiosGet('/user/followers', token);
};

export const getProfile = async (token: string, user_link: string) => {
    await axiosGet(`user/profile/${user_link}`, token);
};

export const followUser = async (token: string, lead_user_id: number) => {
    await axiosPost(`/user/add-relation?lead_user_id=${lead_user_id}`, undefined, token);
};

export const registerUser = async (token: string, data: any) =>
    await axiosUpdate('/user/update', data, token);
