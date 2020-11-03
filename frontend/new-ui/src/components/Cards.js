import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some available Tutorials!!</h1>
      <div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://youthincmag.com/wp-content/uploads/2019/04/Software-Engineering-696x373.jpg'
              text='Software Engineering'
              label='Computer Science'
              path='/'
            />
            <CardItem
              src='https://www.cs.colostate.edu/~cs414/yr2017fa/res_images/cs414_logo.png'
              text='Object Oriented Modelling and Design'
              label='Computer Science'
              path='/'
            />
            <CardItem
              src='https://cdn.arstechnica.net/wp-content/uploads/2019/12/machine-learning-brain-800x450.jpg'
              text='Deep Learning'
              label='Data Science'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://scx1.b-cdn.net/csz/news/800/2019/1-genetics.jpg'
              text='Genetics'
              label='Biology'
              path='/'
            />
            <CardItem
              src='https://www.universetoday.com/wp-content/uploads/2010/08/solar_system_ill.jpg'
              text='Gravitational Force'
              label='Physics'
              path='/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Sahara Desert'
              label='General Knowledge'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;