import React from 'react'

const Home_left = ({head,higl,dis,img,isBtn,btn2txt}) => {
  return (
    <div className='home_left'>
        <div className='heading'>{head} <span style={{color:'orangered'}}>{higl}</span></div>
        <p className='text-para'>{dis}</p>
        
        <div className='btn-hml'>
            <button type='button' className='order-btn'>{btn2txt}</button>
            {
            isBtn &&
            <button type='button' className='book-btn'>Book a table</button>
            }
        </div>
        
    </div>
  )
}

export default Home_left
