import React from 'react';
import './EventCard.css';
import CardItem from './CardItem';

function Cards() { 
  return (
    <>
    <div className='head_text'>
        <span align='justify'>Check out Our new events and programs!</span>
        </div>
   
      
     
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <div className='card'>
            <CardItem
              src='images/img-9.jpg'
              text='event1'
              label='Category'
              path='/services'
              title='Event Title'
              date='00 month 2021'
              time='00:00'
              venue='NA'
              contact='phno'
            />
            </div>
            <div className='card'>
            <CardItem
              src='images/img-2.jpg'
              text='event2'
              label='Category'
              path='/services'
              title='Event Title'
              date='00 month 2021'
              time='00:00'
              venue='NA'
              contact='phno'
            />
            </div>
          
          
          <div className='card'>
            <CardItem
              src='images/img-3.jpg'
              text='event3'
              label='Category'
              path='/services'
              title='Event Title'
              date='00 month 2021'
              time='00:00'
              venue='NA'
              contact='phno'
            />
            </div>
            <div className='card'>
            <CardItem
              src='images/img-4.jpg'
              text='event4'
              label='Category'
              path='/products'
              title='Event Title'
              date='00 month 2021'
              time='00:00'
              venue='NA'
              contact='phno'
            />
            </div>
          
            <div className='card'>
            <CardItem
              src='images/img-8.jpg'
              text='event5'
              label='Category'
              path='/sign-up'
              title='Event Title'
              date='00 month 2021'
              time='00:00'
              venue='NA'
              contact='phno'
            />
            </div>
          </div>
         
        </div>
   

    </>
  );
}

export default Cards;
