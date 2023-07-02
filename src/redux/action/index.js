// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// For Delete Item to Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

export const emptyItem = (product) => {
    return {
        type: "REMOVEITEM",
        payload: product
    }
}

// For Updating existing cart item
export const updateCart = (product) => {
    return {
        type: "UDATEITEM",
        payload: product
    }
}

export const clearCart = (product) => {
    return {
        type: "CLEARCART",
        payload: product
    }
}