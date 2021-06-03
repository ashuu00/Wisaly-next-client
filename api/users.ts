import axios from 'axios';
import { userLogin } from '../dto/userLogin';

const test = true;
const url: string = test ? 'http://localhost:8080/api/v1' : 'https://www.wisaly.com/api/v1';

export const LoginUser = async (data: userLogin) => await axios.post(`${url}/login/`, data);

export const LogoutUser = async () => await axios.get(`${url}/logout/`);

export const updateData = async (data) =>
    await axios.put(url, data, { headers: { 'Content-Type': 'application/json' } });
