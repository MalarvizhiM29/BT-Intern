import React from 'react'
import { Link } from 'react-router-dom'
import cartimg from '../cartimg.png'

const Cart = () => {
  return (
    <>
      <div className='cart'>
        <img src={cartimg} className='cart-img'></img>
        <h3>Your Cart is empty</h3>
        <p>You can go to home page to view more restaurants</p>
        <button className='cartbtn'><Link to="/" className='cart-btn'>SEE RESTAURANTS NEAR YOU</Link></button>
      </div>
    </>
  )
}

export default Cart