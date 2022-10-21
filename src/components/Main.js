import React from "react";
import {api} from "../utils/Api.js";
import Card from "./Card.js";

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, handleCardClick, handleDeleteCardPopupClick }) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
          .then(([userApiData, cardsData]) => {
            setUserName(userApiData.name);
            setUserDescription(userApiData.about);
            setUserAvatar(userApiData.avatar);
            setCards(cardsData);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    return (
        <main className="content">
          <section className="profile">
            <div className="profile__info">
                <div className="profile__image">
                    <button type="button" className="profile__image-button" onClick={onEditAvatar}></button>
                    <img src={userAvatar} alt="аватар профиля" className="profile__avatar" />    
                </div>
                <div className="profile__autor">
                    <div className="profile__name">
                        <h1 className="profile__title">{userName}</h1>
                        <button type="button" className="profile__button profile__button_type_edit" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
            </div>
            <button type="button" className="profile__button profile__button_type_add" onClick={onAddPlace}></button>
          </section>
          <section className="photo-grid">
              <ul className="photo-grid__cards">
                {cards.map((card) => (
                  <Card key={card._id} card={card} onCardClick={handleCardClick} onTrashClick={handleDeleteCardPopupClick}/>
                ))}
              </ul>
            </section>
        </main>
    );
}