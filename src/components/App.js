import '../App.css';
import React from "react";
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from './PopupWithForm.js';

export default function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]=React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]=React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]=React.useState(false)
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false)
    const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard]=React.useState({})

    function handleCardClick (card){
        setImagePopupOpen(true)
        setSelectedCard(card)
      }
    function handleEditAvatarClick(){
        setIsEditAvatarPopupOpen(true)
      }
    function handleEditProfileClick(){
        setIsEditProfilePopupOpen(true)
      }
    function handleAddCardClick(){
        setIsAddPlacePopupOpen(true)
      }
    function handleDeleteCardPopupClick() {
        setDeleteCardPopupOpen(true)
      }
    function closeAllPopups(){
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setImagePopupOpen(false)
        setDeleteCardPopupOpen(false)
        setSelectedCard({})
      }

  return (
    <div className="App page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddCardClick} onEditAvatar={handleEditAvatarClick} handleCardClick={handleCardClick} handleDeleteCardPopupClick={handleDeleteCardPopupClick}/>
      <Footer />
      <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard}/>
      <PopupWithForm
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      name="cards-profile"
      title="Новое Место"
      buttonText="Создать"
    >
      <input type="text" placeholder="Название места" className="popup__input popup__input_type_title" minLength="2" maxLength="30" required />
      <span className="popup__error" id="title-error"></span>
      <input type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_link" required />
      <span className="popup__error" id="link-error"></span>
    </PopupWithForm>

    <PopupWithForm
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
    >
      <input type="url" name="linkAvatar" placeholder="Ссылка на картинку" className="popup__input popup__input_type_linkAvatar" required />
      <span className="popup__error" id="linkAvatar-error"></span>
    </PopupWithForm>

    <PopupWithForm
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
    >
      <input type="text" placeholder="Имя" className="popup__input popup__input_type_name" minLength="2" maxLength="40" required />
      <span className="popup__error" id="name-error"></span>
      <input type="text" placeholder="Профессия" className="popup__input popup__input_type_text" minLength="2" maxLength="200" required />
      <span className="popup__error" id="aboutself-error"></span>
    </PopupWithForm>

    <PopupWithForm
      isOpen={isDeleteCardPopupOpen}
      onClose={closeAllPopups}
      name="delete-card"
      title="Вы уверены?"
      buttonText="Да"
    >
    </PopupWithForm>
  </div>
  );
}


