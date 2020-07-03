export const GetTotalPrice = (cart) => {
    let total = 0;
    _.forEach(cart, (item) => {
        total += item.price * item.quantity;
    });

    return total;
};
