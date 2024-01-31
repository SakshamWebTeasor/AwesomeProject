import { product } from '../../ProductWrapper';
import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST } from './constants'

export function add_to_cart(item: product) {
    return {
        type: ADD_TO_CART,
        data: item
    }
}

export function remove_from_cart(item: product) {
    return {
        type: REMOVE_FROM_CART,
        data: item
    }
}

export function getUserList() {
    return {
        type: USER_LIST,
    };
}
