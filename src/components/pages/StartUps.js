import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import StartUpList from '../StartUpList';

export default function StartUps() {

  return (

    <>
     <h1 className='startups'>Startups</h1>
      <StartUpList/>
      <Footer />
    </>
  );
}
