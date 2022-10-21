import React from "react";

export default function Card( {card, onCardClick, onTrashClick} ) {
  
  function handleCardClick(){
    onCardClick(card)
  }
  function handleDeleteCardPopupClick(){
    onTrashClick(card)
  }

  return (
    <>
     <li className="photo-grid__card">
        <button type="button" className="photo-grid__card_type_button-img" onClick={handleCardClick}><img className="photo-grid__image" src={card.link} alt={card.name} /></button>
        <button className="photo-grid__delete-button" onClick={handleDeleteCardPopupClick}></button>
          <div className="photo-grid__text">
            <h2 className="photo-grid__title">{card.name}</h2>
            <div className="photo-grid__place-like">
              <button type="button" className="photo-grid__like"></button>
              <p className="photo-grid__like-counter">{card.likes.length}</p>    
            </div>
          </div>
      </li>
    </>
  );
}
