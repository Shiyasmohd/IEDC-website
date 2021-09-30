import React from 'react';
import '../../App.css';
import Cards from '../StartUpList';
import Footer from '../Footer';

export default function StartUps() {

  return (
   
    <>
     <h1 className='startups'>Startups</h1>;
      <Cards />
      <Footer />
    </>
  );
}
