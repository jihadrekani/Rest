import React from 'react'
import Header from './Header'
import { Fragment } from 'react'
import doner from '../../images/doner.jpg'
import chicken from '../../images/chicken.jpg'
import './Home.css'
import Data from '../../Data'
import Carousel from 'react-bootstrap/Carousel';
import person1 from '../../images/person1.jpg'
import person2 from '../../images/person2.jpg'
import person3 from '../../images/person3.jpg'
import Footer from '../Footer/Footer'

export default function Home() {
  const blogitems = Data.map((item)=>{
    return(
      <div  className='col-md-4'>
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
<img src={doner} title="chicken"/>
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

<section id='ingredients' className='ingredients'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-6'>
        <h2>We make everything by hand with the best possible ingredients.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <ul>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#a82d49" className="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Etiam sed dolor ac diam volutpat.</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#a82d49" className="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Erat volutpat aliquet imperdiet.</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#a82d49" className="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>purus a odio finibus bibendum.</li>
        </ul>
        <button><a href='#'>learn more</a></button>
      </div>
      <div className='col-md-6'>
        <img src={chicken} alt="ingredients"/>
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

<section id='blogs' className='blogs'>
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
<section id='slider' className='slider'>
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
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit..
          </p>
          <span>The Cheff assistant</span>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
    </div>
  </div>
</div>
</section>
{/* questions section  */}
<section className='questions'>
  <div className='container'>

  <div className='row'>
<h2 className='qhead'>Frequently Asked Questions</h2>
  </div>

    <div className='row'>
      <div className='col-lg-6'>
        <h4><span>~</span> Is Foodera Bread really baked fresh each day?</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
      </div>
      <div className='col-lg-6'>
        <h4><span>~</span> Is Foodera Bread really baked fresh each day?</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
      </div>
      <div className='col-lg-6'>
        <h4><span>~</span> Is Foodera Bread really baked fresh each day?</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
      </div>
      <div className='col-lg-6'>
        <h4><span>~</span> Is Foodera Bread really baked fresh each day?</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
      </div>
    </div>
  </div>
</section>
{/* subscribe section */}

<section className='subscribe'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-12 col-md-12'>
        <h2>Hurry up! Subscribe our newsletter
and get 25% Off</h2>
<p>Limited time offer for this month. No credit card required.</p>
<div>
  <input type="email" placeholder='email address here' ></input>
  <button><a href='#'>subscribe </a></button>
</div>
      </div>
    </div>
  </div>
</section>
<Footer />
    </Fragment>
  )
}
