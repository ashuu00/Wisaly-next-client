export interface BlogUpload {
    title: String;
    title_pic: String;
    description: String;
    archived: Boolean;
    content: String;
    categories: String[];
}

// also be used in getting reommended blogs
export interface getDisplayBlogs {
    title: String;
    created_at: String;
    title_pic: String;
    description: String;
    categories: String[];
    page_link: String;
    author_page_link: String;
    archived: Boolean;
    username: String;
    display_pic: String;
    likedByUser: Boolean;
}

export interface getCompleteBlog {
    id: Long;
    created: Long;
    updated: Long;
    title: String;
    description: String;
    title_pic: String;
    archived: Boolean;
    draft: Boolean;
    content: String;
    blog_link: String;
    cards: Long[];
    authorName?: String;
    authorId: Long;
    authorPage: String;
    authorPic: String;
    authorDescription: String;
    owner: Boolean;
    likes: Number;
    likedByUser: Boolean;
    categories: String[];
    tags: String[];
}
