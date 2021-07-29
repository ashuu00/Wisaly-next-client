import actions from '../actions';

const initialState = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    role: '',
    display_pic: '',
    user_id: '',
    token: '',
    updated: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_USER_DETAILS:
            const { first_name, last_name, id, jwtToken, email, username, display_pic, updated } =
                action.payload;
            state['first_name'] = first_name;
            state['last_name'] = last_name;
            state['username'] = username;
            state['token'] = jwtToken;
            state['user_id'] = id;
            state['email'] = email;
            state['display_pic'] = display_pic;
            state['updated'] = updated;
            return state;

        case actions.GET_USER_TOKEN:
            console.log('token got in reducer', action.jwtToken);
            state['token'] = action.jwtToken;
            return state;

        case actions.GET_USER_NAME:
            state['username'] = action.payload;
        default:
            return state;
    }
};
