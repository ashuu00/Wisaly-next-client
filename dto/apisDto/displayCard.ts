import { addComment } from './comments';

export interface postDisplayCard {
    title: string;
    description: string;
    archived: boolean;
    blogs: Long[];
    photos: Long[];
    videos?: Long[];
    categories: string[];
    tags?: string[];
    user_id: Long;
}

export interface getCards {
    id: Long;
    created_at: String;
    updated_at: String;
    archived: boolean;
    title: String;
    link: String;
    description: String;
}

export interface getSingleCard {
    id: Long;
    title: string;
    description: string;
    created: string;
    images: string[];
    youtube_links?: string[];
    categories: string[];
    comments?: addComment[]; // yet to be implemented
    likes: number;
    likedByUser: Boolean;
    authorUsername: string;
    authorFullName: string;
    //followedByUser: Boolean;
    authorPic: string;
    autorBio: string;
    // authorFollowers: String;
    moreByAuthor?: getCards[];
    related?: getCards[];
}
