import * as types from '../constants/index';

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_PLACES:
            return {
                ...state,
                places: action.payload
            };


        default:
            return state;
    }
};

export default reducer;