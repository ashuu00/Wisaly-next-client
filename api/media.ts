import { axiosGet, axiosPost } from './axiosWrapper';
import { userLogin } from '../dto/userLogin';

//export const LoginUser = async (data: userLogin) =>
//  await axios.post(`${url}/login/`, data, { withCredentials: true });

export const addImages = async (data: FormData[], token: String) =>
    await axiosPost('/upload/images', data, token);

export const addBlogTitleImage = async (upload: FormData, token?: String) => {
    //console.log('upload is', upload.entries.length);

    return await axiosPost('/upload/blogsimage', upload, token, {
        'Content-Type': 'multipart/form-data'
    });
};

export const addImageNotInEntity = async (upload: FormData, token?: String) => {
    //console.log('upload is', upload.entries.length);

    return await axiosPost('/upload/blogsimage', upload, token, {
        'Content-Type': 'multipart/form-data'
    });
};
