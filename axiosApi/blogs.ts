import { axiosGet, axiosPost } from './axiosWrapper';
import { userLogin } from '../dto/userLogin';

//export const LoginUser = async (data: userLogin) =>
//  await axios.post(`${url}/login/`, data, { withCredentials: true });

export const getAllBlogs = async (token: String) => await axiosGet('/blog/', token);

export const postBlog = async (data: any, token: String, options?: any) =>
    await axiosPost('/blog/new', data, token, options);

export const getCompleteBlog = async (blogLink: String, token?: String) =>
    await axiosGet(`/blog/${blogLink}`, token);

export const userBlogs = async (token: String) => await axiosGet('/blog/user-all', token);
