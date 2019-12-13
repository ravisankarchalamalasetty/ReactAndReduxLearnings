import React from 'react'
const Product = ({ price, quantity, title }) => (
  <div>
    {title} - Rs. {price}{quantity ? ` x Rs.{quantity}` : null}
  </div>
)


export default Product
