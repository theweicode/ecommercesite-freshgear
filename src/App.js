import React, { Component } from "react";
import "./assets/scss/styles.scss";

class App extends Component {
  render() {
    return (
      <div>
        <body>
          <header>
            <div class="logo">freshgear</div>
            <div class="menu">
              <a href="#">About</a>
              <a href="#">New Arrival</a>
              <a href="#">Categories</a>
              <a href="#" class="cart-link">
                Cart<span>4</span>
              </a>
            </div>
          </header>
          <section class="content-area home-page">
            <div class="top-section">
              <div class="titles">
                <h3>Yeezy</h3>
                <h1>Boost 350</h1>
              </div>

              <div class="product">
                <div class="circle">
                  <img src="/img/proudcts/adidas-yeezy-boost-350-v2.png" />
                </div>
              </div>
            </div>
          </section>

          <section id="cart-popup" class="active">
            <div>
              <div class="title"> My Cart</div>
            </div>
            <div class="cart-items">
              <div class="item">
                <img src="/img/proudcts/adidas-yeezy-boost-350-v2.png" />
                <div class="delete-btn">
                  <div class="circle">X</div>
                </div>
              </div>
            </div>
            <div class="product-total">
              <div class="title">Total</div>
              <div class="number">x4</div>
            </div>
            <div class="price-total">
              <div class="title">Total</div>
              <div class="number">$3,000</div>
            </div>
            <div class="checkout">Checkout</div>
          </section>
        </body>
      </div>
    );
  }
}

export default App;
