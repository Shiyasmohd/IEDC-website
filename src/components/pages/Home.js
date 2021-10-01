import React from 'react';
import '../../App.css';
import ArchLogo from '../ArchLogo';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import Vision from '../Vision';
import Question from '../Question';

export default function Home() {
  return (<div>
        <ArchLogo/>    
        <Vision/>
        <ImageSlider/>
        <Question/>
        <Footer/>
    </div>
  );
}
