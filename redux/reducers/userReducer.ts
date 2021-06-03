import actions from '../actions';

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    display_pic: '',
    user_id: ''
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_USER_DETAILS:
            const { first_name, last_name, email, roles, display_pic, id } = action.payload;
            state['first_name'] = first_name;
            state['last_name'] = last_name;
            state['email'] = email;
            state['role'] = roles;
            state['display_pic'] = display_pic;
            state['user_id'] = id;
        default:
            return state;
    }
};
