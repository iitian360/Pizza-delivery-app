import React from 'react'
import { useState } from 'react'

const MenuCard = ({img,head,dis,prise}) => {

  const [count, setcount] = useState(1);
  const handleCount=()=>{

      if(count>=10){
          window.alert("you can only add upto 10 at a time")
          return;
      }
    setcount(count+1);
  }
  return (
    <div className='menu-card'>
        <div className='menu-img'>
            <img src={img} alt="" />
        </div>
        <div className='head'>{head}</div>
        <div><span style={{color:"#fc2e09ef"}}>{prise}</span> Rs./</div>
        <p className='para'>{dis}</p>
        <div className='menu-btn'>
            <button type='button' className='cart-btn'>Add to Cart</button>
            <button type='button'onClick={handleCount} ><span>{count}</span> +</button>
        </div>
      
    </div>
  )
}

export default MenuCard
