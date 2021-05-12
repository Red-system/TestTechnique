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

  // On defini ici que le state de base est arrivé sur la fin de l'array alors il revient a 0.
  //(les elements d'un array commence leur numérotation a 0 d'ou le num-1)
  // Sinon il rajoute 1 au curState

  const nextSlide = () => {
    setIndex(index === num - 1 ? 0 : index + 1);
  };

  //Si le curState est au début de l'array alors on le fais revenir au début. Sinon on enlève 1
  // const prevSlide = () => {
  //   setCurState(curState === 1 ? 2 : curState - 1);
  // };

  const prevSlide = () => {
    setIndex(index === 0 ? num - 1 : index - 1);
  };

  //empecher l'affichega d'autres contenus ou si l'array est vide
  if (!Array.isArray(content) || content.lenght <= 0) {
    return null;
  }

  return (
    <div>
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
                <div>
                  <div className="page__pic">
                    {pageContent.image}
                    <h1 className="page__pic__title">{pageContent.title}</h1>
                  </div>

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
      </div>

      <div className="page__link">
        <a className="page__link__prev" onClick={prevSlide}>
          <BsChevronCompactLeft className="page__link__arrow" />
          Précédent
        </a>
        <a className="page__link__next" onClick={nextSlide}>
          Suivant
          <BsChevronCompactRight className="page__link__arrow" />
        </a>
      </div>
    </div>
  );
};

export default Pages;

// {/* {Array(num).fill().map(() =>

//    <div className="page__mark__circle" key={uuidv4()}/>

//   ) */}
