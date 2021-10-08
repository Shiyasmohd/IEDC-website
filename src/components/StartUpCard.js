import React from 'react';
import { Link } from 'react-router-dom';

function StartUpCard(props) {
  return (
    <>
      <div className='cards_item'>
          <div className='card_wrap'>
        <Link className='cards_link' to={props.path}>
         
            <img
              className='cards_img'
              alt='Travel Image'
              src={props.src}
            />
          </Link>
          </div>
          <div className='cards_info'>
              <h3 className='cards_title'>{props.title}</h3>
            <p className='cards_text'>{props.text}</p>
          </div>
        
      </div>
    </>
  );
}

export default StartUpCard;