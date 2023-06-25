import React, { Fragment } from 'react'
import Home_left from '../Home/Home_left'
import Home_right from '../Home/Home_right'
import bannerImg from '../../assets/menu/menu_banner.png';
import MenuCard from './MenuCard';
import menu from '../../assets/menu/Italian Cuisine.png'
import Catupiry from '../../assets/menu/Catupiry Chicken.png'
import sushi from '../../assets/menu/Sushi Mozzarella.png'
import sicilian from '../../assets/menu/sicilian Pizza.png'
import chrono from '../../assets/menu/California-style.png'
import Margherita from '../../assets/menu/Margherita.png'
import Chicago from '../../assets/menu/Chicago.png'
import Buffalo from '../../assets/menu/Buffalo.png'


import './Shop.css'
import Head from '../partials/Head';

const Shop = () => {
  return (
    <Fragment>
      <section className='Home-section'>
        <div className='hm-container'>
          <Home_left
          head="Get upto 70% off on"
          higl={"Italian Cousino"}
          dis="order now and get a huge discount with diwali offer"
          isBtn={false}
          btn2txt={"Order now"}
          img={null}
          />
          <Home_right 
          img={bannerImg}/>
        </div>
  
  
      </section>
      <section className='menu-section'>
        <Head head={"Carta's menu"}/>
        <div className='menu-bx'>
          <MenuCard
          img={menu}
          head={"Italian cousino"}
          dis={"Medium size pizza, nonveg and spicy"}
          prise={249}
          />
          
          <MenuCard
          img={chrono}
          head={"California-style chrono pizza"}
          dis={"Medium size pizza, nonveg and spicy"}
          prise={300}
          />

          <MenuCard
          img={Margherita}
          head={"Margherita Vegetarian pizza"}
          dis={"Medium size pizza, nonveg and spicy"}
          prise={399}
          />

          <MenuCard
          img={Chicago}
          head={"Chicago-style pizza"}
          dis={"Medium size pizza, nonveg and spicy"}
          prise={249}
          />


          <MenuCard
          img={Buffalo}
          head={"Buffalo wing"}
          dis={"Medium size pizza, nonveg and spicy"}
          prise={399}
          />
          <MenuCard
          img={Catupiry}
          head={"Catupiry Chicken Pizza"}
          dis={"Medium size pizza, nonveg and spicy"}
          prise={200}
          />

          <MenuCard
          img={sushi}
          head={"Sushi Mozzarella pizza"}
          dis={"Medium size pizza, nonveg and spicy"}
          prise={299}
          />

          <MenuCard
          img={sicilian}
          head={"sicilian Pizza"}
          dis={"Medium size pizza, nonveg and spicy"}
          prise={200}
          />

          <MenuCard
          img={menu}
          head={"Italian cousino"}
          dis={"Medium size pizza, nonveg and spicy"}
          prise={349}
          />
        </div>

      </section>
    </Fragment>
  )
}

export default Shop
