import * as types from '../constants/index'

const changePlaces = payload => ({
    type: types.CHANGE_PLACES,
    payload
});

export {
    changePlaces
}