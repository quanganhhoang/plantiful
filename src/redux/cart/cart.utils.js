export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => 
      (cartItem.name === cartItemToAdd.name && cartItem.price === cartItemToAdd.price)
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        (cartItem.name === cartItemToAdd.name && cartItem.price === cartItemToAdd.price)
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
  
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => 
        (cartItem.name === cartItemToRemove.name && cartItem.price === cartItemToRemove.price)
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
          cartItem => (cartItem.name !== cartItemToRemove.name || cartItem.price !== cartItemToRemove.price)
          );
    }

    return cartItems.map(cartItem =>
        (cartItem.name === cartItemToRemove.name  && cartItem.price === cartItemToRemove.price)
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};
  