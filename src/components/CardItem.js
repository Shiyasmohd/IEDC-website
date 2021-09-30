import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <div className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='event_details'>
            <span className='detail'>
            <b >
            <h3 className='event_title'>{props.title}</h3>
                Date: {props.date}
                <br/>
    
                Time: {props.time}
                <br/>
                
                Venue: {props.venue}
                <br/>
                
                Contact: {props.contact}
                <br/>
              </b></span>
          </div>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CardItem;