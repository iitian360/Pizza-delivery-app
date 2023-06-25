import React from 'react'

const ContactLeft = () => {
  return (
    <div className='contLeft'>
        <div className='heading'>Contact us</div>
        <div className='formbx'>
          <form action="">
            <div className='form-elm'>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder='' id='name' name='name' />
            </div>
            <div className='form-elm'>
              <label htmlFor="name">Email</label>
              <input type="email" placeholder='' id='email' name='email'/>
            </div>
            <div className='form-elm'>
              <label htmlFor="name">Message</label>
              <textarea name="message" id="message" cols="30" rows="6" placeholder='Type here'></textarea>
            </div>
            <button type='button' className='cont-btn'>Send</button>
          </form>
        </div>
      </div>
  )
}

export default ContactLeft
