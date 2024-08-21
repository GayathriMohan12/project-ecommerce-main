import {cart} from '../../data/cart.js';
import { renderOrderSummary } from './ordersummary.js';
import { renderPaymentSummary } from './paymentSummary.js';

export function renderCheckoutHeader() {
    
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const checkoutHeaderHTML = `
    <div class="header-content">
      <div class="checkout-header-left-section">
        <a href="index.html">
          <img class="amazon-logo" src="images/moda chic black full.png">
          <img class="amazon-mobile-logo" src="images/moda chic black full.png">
        </a>
      </div>
      <div class="checkout-header-middle-section">
        Checkout (<a class="return-to-home-link" style ="margin-top: 3px;"
          href="amazon.html">${cartQuantity} items</a>)
      </div>
      <div class="checkout-header-right-section">
        <img src="images/icons/checkout-lock-icon.png">
      </div>
    </div>
  `;

  document.querySelector('.js-checkout-header')
    .innerHTML = checkoutHeaderHTML;

   
    
}