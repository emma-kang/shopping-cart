// Cart Reducer
// Reducers specify how the application's state changes in response 
// to actions sent to the store 

import { LOAD_CART, ADD_TO_CART, REMOVE_ITEM } from '../actions/actions';

const initialState = {
    products: []
};

export default function(state = initialState, action){
    switch(action.type){
        case LOAD_CART:
            return {
                ...state,
                products: action.items
            };
        case ADD_TO_CART:
            return {
                ...state,
                productToAdd: Object.assign({}, action.items)
            };
        case REMOVE_ITEM:
            return {
                ...state,
                productToRemove: Object.assign({}, action.items)
            };
        default:
            return state;
    }
}