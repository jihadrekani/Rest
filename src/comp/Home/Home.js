import React from 'react'
import Header from './Header'
import { Fragment } from 'react'
import chicken from '../../images/chicken.jpg'
import foods from '../../images/foods.jpg'
import './Home.css'
import Data from '../../Data'
import Carousel from 'react-bootstrap/Carousel';
import person1 from '../../images/person1.jpg'
import person2 from '../../images/person2.jpg'
import person3 from '../../images/person3.jpg'

export default function Home() {
  const blogitems = Data.map((item)=>{
    return(
      <div className='col-md-4'>
        <div className='box'>
          <img src={item.img}/>
          <h5>{item.title}</h5>
          <span>{item.time}</span>
          <h6>{item.price}</h6>
        </div>
<button><a href='#'>order now</a></button>
      </div>
    )
  })
  
  return (
    <Fragment>
      <Header />
<section className='numbers'>
  <div className='container'>
    <div className='row'>
    <div className='col-md-3'>
        <h2>1287+ </h2>
        <h6>SAVINGS </h6>
      </div>
       <div className='col-md-3'>
        <h2>5786+ </h2>
        <h6>PHOTOS </h6>
      </div> 
      <div className='col-md-3'>
        <h2>1440+ </h2>
        <h6>ROCKETS </h6>
      </div> 
      <div className='col-md-3'>
        <h2>7110+ </h2>
        <h6>GLOBES </h6>
      </div>
    </div>
  </div>
</section>
<section className='pride'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-6'>
<img src={chicken} title="chicken"/>
      </div>
      <div className='col-md-6'>
        <h2>
We pride ourselves on making real food from the best ingredients.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
     <button><a href='#'>learn more</a></button>
      </div>
    </div>
  </div>
</section>

<section className='ingredients'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-6'>
        <h2>We make everything by hand with the best possible ingredients.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <ul>
          <li>Etiam sed dolor ac diam volutpat.</li>
          <li>Erat volutpat aliquet imperdiet.</li>
          <li>purus a odio finibus bibendum.</li>
        </ul>
        <button><a href='#'>learn more</a></button>
      </div>
      <div className='col-md-6'>
        <img src={foods} alt="ingredients"/>
      </div>
    </div>
  </div>
</section>


<section className='paralex'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-12 col-md-12'>
        <h2>When a man's stomach is full it makes no<br/>
difference whether he is rich or poor.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
<a href='#'>Watch Our Story</a>
      </div>
    </div>
  </div>
</section>
{/* blog section */}

<section className='blogs'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-12 col-lg-12'>
        <h2>Explore Our Foods</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
      </div>
    </div>
  </div>
  <div className='row'>
{blogitems}
  </div>
</section>

{/* slider section */}
<section className='slider'>
<div className='container'>
  <div className='row'>
    <div className='col-lg-12 col-md-12'>
      <h2>Administration</h2>
    </div>
  </div>
  <div className='row'>
    <div className='col-lg-12 col-md-12'>


    <Carousel>
      <Carousel.Item>
        <img src={person1}     />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <span>The Cheff</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={person2}     />

      

        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>The Cheff assistant</span>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={person3}     />


        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <span>The Cheff assistant</span>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
    </div>
  </div>
</div>




</section>



    </Fragment>
  )
}
