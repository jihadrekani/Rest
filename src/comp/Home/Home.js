import React from 'react'
import Header from './Header'
import { Fragment } from 'react'
import chicken from '../../images/chicken.jpg'
import './Home.css'
export default function Home() {
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


    </Fragment>
  )
}
