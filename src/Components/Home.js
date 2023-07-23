import React from 'react'
import { addToCart } from '../Services/Actions/Action'

const Home = (props) => {
    console.log("home",props.data)
  return (

    <div className='box'>
      
      <h1>Home Component</h1>
      <div className='box1'>
        <div className='cart-wrapper'>
            <div className="img-wrapper item">
                  <img className='mob-img' src="https://images.hindustantimes.com/tech/htmobile4/P35360/heroimage/140876-v3-apple-iphone-13-mobile-phone-large-1.jpg" alt="" />
            </div>
            <div className="text-wrapper">
                <span>I-phone</span>
                <span>Price : $1000</span>
            </div>
            <div className="btn-wrapper">
                <button onClick={()=>{props.addToCartHandler({price:1000,name:"iPhone"})}}>Add to cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
