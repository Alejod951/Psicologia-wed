import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (

    <div className='div-container'>
      <div className="home-page-container">
      <h1 className="title">Quién soy</h1>
      <p>
        Soy Valentina Garces Marquez, psicóloga clínica con experiencia en el campo de la psicoterapia. Mi objetivo es ayudarte a superar los desafíos emocionales y mejorar tu calidad de vida.
      </p>
      <p>
        Me especializo en el tratamiento de la ansiedad, la depresión, los trastornos de estrés postraumático y las dificultades en las relaciones interpersonales. Utilizo una combinación de terapias cognitivo-conductuales, terapia narrativa y enfoques centrados en la persona para proporcionar un tratamiento personalizado y efectivo.
      </p>

      <h1 className="title">Qué vas a encontrar en la página</h1>
      <p>
        Aquí encontrarás tratamientos, información y ayuda psicológica para abordar diversos problemas emocionales y mejorar tu bienestar mental.
      </p>
      <p>
        En la sección de tratamientos, podrás explorar diferentes enfoques terapéuticos y encontrar recursos útiles para enfrentar tus desafíos emocionales. Además, encontrarás artículos informativos, consejos prácticos y herramientas de autocuidado para mejorar tu bienestar mental en la sección de información y ayuda psicológica.
      </p>

      <h1 className="title">Razones por las cuales no puede llevar a buscar un psicólogo</h1>
      <p>
        En ocasiones, las personas pueden sentirse reticentes a buscar ayuda psicológica por diversas razones. Esto puede deberse a una serie de factores, como el temor al juicio de los demás o la creencia errónea de que los problemas emocionales se resolverán por sí solos con el tiempo. Algunos también pueden experimentar vergüenza o estigma asociado con la búsqueda de ayuda psicológica, lo que puede dificultar el proceso de búsqueda de apoyo. Además, la preocupación por el costo o la accesibilidad de la terapia, así como la resistencia a abrirse emocionalmente o enfrentar el dolor emocional, también pueden ser barreras significativas.
      </p>
    </div>
    </div>
    
  );
}

export default HomePage;
