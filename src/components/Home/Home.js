import React, { Fragment } from 'react'
import '../Home/Home.css'
import Home_left from './Home_left'
import Home_right from './Home_right'
import bannerImg from '../../assets/banner.png'
import Head from '../partials/Head'
import MenuCard from '../Shop/MenuCard'
import chrono from '../../assets/menu/California-style.png'
import Margherita from '../../assets/menu/Margherita.png'
import Chicago from '../../assets/menu/Chicago.png'
import menu from '../../assets/menu/Italian Cuisine.png'

const Home = () => {
  return (
    <Fragment>
    <section className='Home-section'>
      <div className='hm-container'>
        <Home_left 
        head="It's not just pizza, It's an"
        higl={"Experience"}
        dis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium debitis."
        isBtn={true}
        btn2txt={"Order now"}
        img={null}
        />
        <Home_right img={bannerImg}/>
      </div>
    </section>
    <section className='other-section'>
      <Head head={"trending today!"}/>
      <div className='trend-bx'>
      <MenuCard
          img={menu}
          head={"Italian cousino"}
          prise={249}
      />
          
          <MenuCard
          img={chrono}
          head={"California-style chrono pizza"}
          prise={300}
          />

          <MenuCard
          img={Margherita}
          head={"Margherita Vegetarian pizza"}
          prise={399}
          />

          <MenuCard
          img={Chicago}
          head={"Chicago-style pizza"}
          prise={249}
          />
      </div>

    </section>
    </Fragment>
  )
}

export default Home
