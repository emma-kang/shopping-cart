import { LOAD_CART, ADD_TO_CART, REMOVE_ITEM } from './actionType';

// LOAD CART
export const loadCart = (items) => {
    return {
        type: LOAD_CART,
        items: items
    }
};

// ADD ITEM TO CART
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id: id
    }
}

// REMOVE ITEM FROM CART
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id: id
    }
}
