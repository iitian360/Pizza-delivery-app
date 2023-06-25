import React, { Fragment } from 'react'
import './Contact.css'
import Home_right from '../Home/Home_right'
import contimg from '../../assets/delivery.png'
import ContactLeft from './ContactLeft'
const Contact = () => {
  return (
    <Fragment>

      <section className='contact-section'>
        <ContactLeft />
        <Home_right img={contimg} />

      </section>
      <div className='cont-map'>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=iit bhu pharmaceutical department&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
        </div>
      </div>
    </Fragment>

  )
}

export default Contact
