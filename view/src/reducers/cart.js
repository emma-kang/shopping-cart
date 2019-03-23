// const for action types 
// refers https://codesandbox.io/s/71jvwjk2v0

const ADD_TO_CART = 'ADD_TO_CART'
const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'

const defaultState = {
    addedIds: [],
    quantityById: {}
}

const addedIds = ( state = defaultState.addedIds, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            if(state.indexOf(action.id) !== -1){
                return state
            }
            return [ ...state, action.id]
        default:
            return state
    }
}

const quantityById = (state = defaultState.quantityById, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const { id } = action
            return { ...state, 
            [id]: (state[id] || 0) + 1
        }
        default: 
            return state
    }
}

export const getQuantity = (state, pdId) => 
    state.quantityById[pdId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = defaultState, action) => {
    switch(action.type) {
        case CHECKOUT_REQUEST:
            return defaultState
        case CHECKOUT_FAILURE:
            return action.cart
        default:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action)
            }
    }
}

export default cart