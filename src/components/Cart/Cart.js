import React, { Fragment } from 'react'
import './Cart.css'
import CartCard from './CartCard'
import cimg from '../../assets/menu/sicilian Pizza.png'
import cimg2 from '../../assets/menu/Margherita.png'
import cimg3 from '../../assets/menu/Chicago.png'
// import cimg4 from '../../assets/menu/Sushi Mozzarella.png'
import {AiOutlineDown} from 'react-icons/ai'

const Cart = () => {
  return (
   <Fragment>
    <section className='cart-section'>
        <div className='heading'>Your cart</div>
        <div className='main-cart'>
            <div className="card-bx">
                <CartCard cimg={cimg}
                name={"Veg Onion pizza"}
                prise={249}
                />
                <CartCard
                cimg={cimg2}
                name={"Margherita pizza"}
                prise={349}
                />
                <CartCard
                cimg={cimg3}
                name={"Chicago style pizza"}
                prise={300}
                />
                {/* <CartCard
                cimg={cimg4}
                name={"Sicilian Pizza"}
                prise={400}
                
                /> */}
            </div>
            <div className="amount-bx">
                <div className='subChead'>Order summery</div>
                <div className='main-checkout'>
                    <span>Do you have a promo code? <span><button type='button'>{<AiOutlineDown/>}</button></span> </span>
                    <div className='subtotal'>
                        <p className='chead'>subtotal?</p>
                        <b>898 Rs./</b>
                    </div>
                    <div className='subtotal'>
                        <div className='chead'>Delivery charges?</div>
                        <b>0 Rs./</b>
                    </div>
                    <div className='subtotal'>
                        <div className='chead'>Handling charges?</div>
                        <b>40 Rs./</b>
                    </div>
                    <div className='subtotal'>
                        <b>Total</b>
                        <b>938 Rs./</b>
                    </div>


                </div>
                <div className='check-btn'>
                    <button type='button'>Checkout</button>
                </div>

            </div>
        </div>

    </section>
   </Fragment>
  )
}

export default Cart
