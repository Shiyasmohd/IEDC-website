import React from 'react';
import './StartUpList.css';
import StartUpCard from './StartUpCard';

function StartUpList() {
    return (
        <>
            <div className='head_text'>
        <span align='justify'>Check out our incubated projects!</span>
        </div>
        <StartUpCard 
        src='images/img-9.jpg'
        text='event1'
        path='/services'
        title='Company Name'
        />

        </>
    );
}
export default StartUpList;