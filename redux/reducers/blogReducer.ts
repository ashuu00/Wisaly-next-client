import actions from '../actions';

const initialState = {
    content: '',
    title: '',
    description: '',
    title_pic: ''
}; //we would need this to preview the blog, before the user adds categories

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_BLOG_ITEMS:
            const { content, title, description, img_url } = action.payload;
            state['title'] = title;
            state['description'] = description;
            state['img_url'] = img_url;
            return initialState;
        case actions.REMOVE_BLOG_ITEMS:
            state['content'] = '';
            return initialState;
        case actions.GET_BLOG_CONTENT:
            state['content'] = action.payload;
            return initialState;
        case actions.SEND_BLOG_IMAGE:
            state['title_pic'] = action.payload;

        default:
            return initialState;
    }
};
