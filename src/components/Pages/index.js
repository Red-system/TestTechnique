// == Import npm
import React, { useState, createElement } from "react";

import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import pageContent from "../../data/pageContent";

import "./styles.scss";

const Pages = ({ content }) => {
  const [index, setIndex] = useState(0);

  const num = content.length;

  //On récupère l'élément courant
  const currentPageContent = content[index];

  // On defini ici que l'index est arrivé sur la fin de l'array alors il revient a 0.
  // Sinon il rajoute 1 a l'index

  const nextSlide = () => {
    setIndex(index === num - 1 ? 0 : index + 1);
  };

  //Si l'index est au début de l'array alors on le renvoie a la fin. Sinon on enlève 1

  const prevSlide = () => {
    setIndex(index === 0 ? num - 1 : index - 1);
  };

  //empecher l'affichega d'autres contenus ou si l'array est vide
  if (!Array.isArray(content) || content.lenght <= 0) {
    return null;
  }

  return (
    <div className="inAppPage">
      <div className="page">
        {content.map((pageContent) => {
          return (
            <div
              className={
                pageContent.id === currentPageContent.id
                  ? "slide activ"
                  : "pageContent"
              }
              key={pageContent.id}
            >
              {pageContent.id === currentPageContent.id && (
                <div className="page__pic">
                  <img className="page__pic__image" src={pageContent.image} />
                  <h1 className="page__pic__title">{pageContent.title}</h1>

                  <div className="page__mark">
                    <div className="page__mark__circle" />
                  </div>
                  <div className="page__text">{pageContent.text}</div>
                </div>
              )}
            </div>
          );
        })}
        {/* end div page */}

        <div className="page__link">
          <div className="page__link__button">
            <a className="page__link__button__prev" onClick={prevSlide}>
              <BsChevronCompactLeft className="page__link__button__arrow" />
              Précédent
            </a>
          </div>
          <div className="page__link__button">
            <a className="page__link__button__next" onClick={nextSlide}>
              Suivant
              <BsChevronCompactRight className="page__link__button__arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;

// {/* {Array(num).fill().map(() =>

//    <div className="page__mark__circle" key={uuidv4()}/>

//   ) */}
