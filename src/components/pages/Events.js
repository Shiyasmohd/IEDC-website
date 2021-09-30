import React from 'react';
import '../../App.css';
import Cards from '../EventCard';
import Footer from '../Footer';

export default function Events() {

  return (
   
    <>
     <h1 className='events'>Events</h1>;
      <Cards />
      <Footer />
    </>
  );
}
