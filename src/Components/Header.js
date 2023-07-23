import React from 'react'

const Header = (props) => {
    console.log("header",props.data)
   
  return (
    <div>
      <span className='item-cnt'>{props.data.length}</span>
        <img className='cart-img' src="https://t4.ftcdn.net/jpg/03/11/48/85/360_F_311488581_Yu4WPdLLNt47cymWU3VmHmOnH7BHqp9F.jpg" alt="cart-img"/>
    </div>
  )
}

export default Header
