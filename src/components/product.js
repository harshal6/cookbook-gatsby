import React, { Component } from 'react';
class Product extends Component {
  componentDidMount() {
    this.stripe = window.Stripe(`${process.env.STRIPE_PUB_KEY}`)
  }
  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault()
          this.stripe
            .redirectToCheckout({
              lineItems: this.props.lineItems,
              mode: 'payment',
              // Note that it is not guaranteed your customers will be redirected to this
              // URL *100%* of the time, it's possible that they could e.g. close the
              // tab between form submission and the redirect.
              successUrl: 'http://localhost:8001/success',
              cancelUrl: 'http://localhost:8001/cancel',
            })
            .then(function(result) {
              if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer.
                var displayError = document.getElementById('error-message')
                displayError.textContent = result.error.message
              }
            })
        }}
      >
        <button type="submit">{this.props.label}</button>
      </form>
    )
  }
}
export default Product;