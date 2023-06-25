import React from 'react'

const CartCard = ({cimg,name,prise}) => {
    return (
        <div className='cart-card'>
            <div className='cimg'>
                <img src={cimg} alt="carta" />
            </div>
            <div className='cAmount'>
                <div className='cname'>{name}</div>
                <div className='cQuait'>Quantity: 1 <span><button type='button'>+</button></span></div>
                <div className='cPrise'>{prise} Rs./</div>
            </div>
        </div>
    )
}

export default CartCard
