import axios from 'axios';
import { addComment } from 'dto/apisDto/comments';
import { axiosGet, axiosPost } from './axiosWrapper';

export const getCompleteCard = async (cardLink: string, token?: string, options?: any) =>
    await axiosGet(`/explore/${cardLink}`, token, options);

export const getAllCards = async (page?: number, limit?: number, token?: string, options?: any) =>
    await axiosGet(`/explore/all?page=${page}&limit=${limit}`);

export const uploadCard = async (token: string, data: any) => await axiosPost('/explore/new', data);
//create schema for upload cards

export const likeCard = async (token: string, cardId: Long, isLiked: boolean) =>
    await axiosGet(`/explore/like?card=${cardId}&isLiked=${isLiked}`, token);

export const addCommentCard = async (token: string, data: addComment) =>
    await axiosPost(`/comment/explore/add`, data, token);
