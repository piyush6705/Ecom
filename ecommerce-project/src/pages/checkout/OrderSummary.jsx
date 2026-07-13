import { CartItemDetails } from './CartItemDetails';
import { DeliveryOptions } from './DeliveryOptions';
import { DeliveryDate } from './DeliveryDate';
import axios from 'axios';

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {

      const deleteCartItem =async() => {
        await  axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    };

    const updateCartItem = async (newQuantity) => {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: newQuantity
      });

      await loadCart();
    };

    
        return (
          <div key={cartItem.productId} className="cart-item-container">
            <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions}  />

            <div className="cart-item-details-grid">
              <CartItemDetails cartItem={cartItem} deleteCartItem={deleteCartItem} updateCartItem={updateCartItem} />

              <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
            </div>
          </div>
        );
      })}
    </div>
  );
}