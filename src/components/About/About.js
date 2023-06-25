import React from 'react'
import bannerImg from '../../assets/menu/California-style.png';
import Home_left from '../Home/Home_left';
import Home_right from '../Home/Home_right';
const About = () => {
  return (
    <section className='Home-section'>
        <div className='hm-container'>
          <Home_left
          head="Know more about us!"
          higl={"we are Carta"}
          dis="Welcome to Carta a largest pizza and fast food production company.
           We are provide 24x7 free delivery over the distance with 0 cost and minimum time,
           with most hygenic and testy experience..."
          isBtn={false}
          btn2txt={"Read more"}
          img={null}
          />
          <Home_right 
          img={bannerImg}/>
        </div>
  
  
      </section>
  )
}

export default About
