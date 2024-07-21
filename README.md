# Página Web de Psicología

## Descripción del Proyecto

Esta es una página web desarrollada para la psicóloga clínica **Valentina Garces Marquez**. La página está diseñada para ofrecer información sobre los servicios de psicología, incluyendo enfoques y beneficios, así como tratamientos específicos. También permite a los usuarios agendar citas fácilmente a través de WhatsApp.

### Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que proporciona tipos estáticos.
- **Vite**: Herramienta de construcción rápida para aplicaciones modernas.
- **CSS**: Estilización de componentes para un diseño atractivo y funcional.

## Secciones de la Página

### 1. Quién es la Psicóloga

En esta sección, presentamos a **Valentina Garces Marquez** y su experiencia profesional. Aquí se detalla su trayectoria, formación y filosofía de trabajo.

```tsx
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
```
### 2. Tratamientos

En la sección de tratamientos, podrás encontrar información detallada sobre las diferentes terapias ofrecidas. Cada terapia incluye:

- **Descripción:** Una breve explicación sobre el tipo de terapia y su enfoque.
- **Imagen:** Una ilustración representativa asociada a la terapia.
- **Valor:** El costo por hora de cada terapia.

Las terapias disponibles son:

- **Terapia Individual**
- **Terapia en Pareja**
- **Terapia Familiar**

Cada una está diseñada para abordar necesidades específicas, proporcionando un enfoque personalizado para cada situación.

```tsx

import './Tratamientos.css';

const Tratamientos = () => {
  return (
    <div className='div-container'>
      <section className="tratamientos-container">
        <h2 className="title">Tipos de Tratamientos</h2>
        
        <div className="tratamiento-container">
          <div className="tratamiento-image-container">
            <img src="/Img/Terapia_individua.png" alt="Terapia Individual" className="tratamiento-image" />
          </div>
          <div className="tratamiento-info">
            <h3>Terapia Individual</h3>
            <p>
              Me alegra mucho que estés considerando la terapia individual como una opción para tu crecimiento personal. Permíteme contarte cómo puede beneficiarte esta forma de terapia y por qué es una excelente inversión en tu bienestar.
            </p>
            <p>
              La terapia individual te ofrece un espacio seguro y confidencial donde puedes expresar tus pensamientos, emociones y preocupaciones sin reservas. Este es tu espacio, diseñado solo para ti, donde puedes hablar abiertamente sobre lo que realmente te preocupa.
            </p>
            <p>
              Desarrollo de Habilidades: La terapia individual te ayuda a desarrollar habilidades y estrategias efectivas para manejar el estrés, la ansiedad y otras dificultades emocionales. Aprenderás herramientas prácticas que puedes aplicar en tu vida diaria para mejorar tu bienestar general.
            </p>
            <p>
              Exploración Profunda: A través de la terapia individual, tienes la oportunidad de explorar a fondo tus pensamientos y emociones. Esto te permite comprender mejor las raíces de tus problemas y trabajar en soluciones duraderas que promuevan un cambio positivo en tu vida.
            </p>
            <h3 className="titleprice"><strong>Costo por hora:</strong> $60.000</h3>
          </div>
        </div>
        
        <div className="tratamiento-container">
          <div className="tratamiento-image-container">
            <img src="/Img/Terapia_pareja.png" alt="Terapia en Pareja" className="tratamiento-image" />
          </div>
          <div className="tratamiento-info">
            <h3>Terapia en Pareja</h3>
            <p>
              Me alegra que estés considerando la terapia de pareja como una opción para mejorar tu relación. Permíteme contarte cómo esta forma de terapia puede beneficiar a ti y a tu pareja, y por qué es una excelente inversión en la salud y felicidad de ambos.
            </p>
            <p>La terapia de pareja te brinda herramientas para mejorar la comunicación, permitiéndote expresar tus pensamientos y emociones de manera clara y efectiva. Esto reduce los malentendidos y fortalece la conexión emocional entre ambos.</p>
            <p>Resolución de Conflictos: Aprenderás técnicas para manejar y resolver conflictos de manera constructiva. En lugar de dejar que los desacuerdos se conviertan en barreras, encontrarás formas de superar los desafíos juntos y salir más fortalecidos.</p>
            <p>Reavivar la Conexión: A lo largo del tiempo, es normal que las parejas experimenten una disminución en la intimidad y la conexión emocional. La terapia de pareja te ayuda a redescubrir y reavivar esos sentimientos, fomentando una relación más profunda y significativa.</p>
            <p>Comprensión Mutua: A través de la terapia, ambos podrán entender mejor las perspectivas y necesidades del otro. Esto crea un entorno de empatía y apoyo, donde cada uno se siente valorado y comprendido.</p>
            <h3 className="titleprice"><strong>Costo por hora:</strong> $80.000</h3>
          </div>
        </div>
        
        <div className="tratamiento-container">
          <div className="tratamiento-image-container">
            <img src="/Img/Terapia_familia.png" alt="Terapia Familiar" className="tratamiento-image" />
          </div>
          <div className="tratamiento-info">
            <h3>Terapia Familiar</h3>
            <p>
              Me alegra saber que estás considerando la terapia familiar como una opción para mejorar la dinámica y el bienestar de tu familia. Permíteme contarte cómo esta forma de terapia puede beneficiar a todos los miembros de tu familia y por qué es una excelente inversión en la salud y la armonía familiar.
            </p>
            <p>La terapia familiar proporciona un espacio seguro para que todos los miembros de la familia puedan expresar sus pensamientos y sentimientos. Aprenderás técnicas para mejorar la comunicación, reducir los malentendidos y fomentar el entendimiento mutuo.</p>
            <p>Ayuda a identificar las raíces de los conflictos familiares y a desarrollar estrategias efectivas para resolverlos. Esto permite que los desacuerdos se gestionen de manera constructiva, promoviendo la armonía en el hogar.</p>
            <p>Te ayuda a fortalecer los lazos entre los miembros de la familia. A través de la comprensión y el apoyo mutuo, se crea un ambiente más unido y cohesivo.</p>
            <p>Es útil durante periodos de transición, como el divorcio, la pérdida de un ser querido o la llegada de un nuevo miembro a la familia. Proporciona el apoyo necesario para navegar estos cambios de manera saludable.</p>
            <h3 className="titleprice"><strong>Costo por hora:</strong> $80.000</h3>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Tratamientos;

```

## Sección de Agendar Cita

En la sección de **Agendar Cita**, se dispone de un formulario para capturar los datos del usuario. El formulario incluye los siguientes aspectos:

- **Captura de Datos:** Se solicitan diversos datos del usuario para programar una cita.
- **Envío a WhatsApp:** Los datos ingresados se envían automáticamente a través de WhatsApp con un mensaje predeterminado que incluye la información proporcionada.
- **Cálculo de Edad:** El formulario también calcula la edad del usuario basándose en la fecha de nacimiento ingresada.

Este proceso facilita la programación de citas y asegura que toda la información necesaria sea enviada de manera rápida y eficiente.

```tsx

import React, { useState } from 'react';
import './AgendarCitas.css';

const AgendarCitas = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    tipoTerapia: 'individual'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos
    const age = calculateAge(formData.fechaNacimiento);
    window.open(`https://api.whatsapp.com/send?phone=+573158735077&text=Hola%2C%0A%0AMi+nombre+es+${formData.nombre}+${formData.apellido}%2C+tengo+${age}+a%C3%B1os+y+a+trav%C3%A9s+de+la+p%C3%A1gina+web+descubr%C3%AD+tus+servicios+de+terapia.+Estoy+interesado+en+agendar+una+cita+para+una+terapia+${formData.tipoTerapia}.`, '_blank');
  };

  return (
    <div className='div-container'>
        <div className="agendar-citas-container">
      <h2>Agendar Cita</h2>
      <form onSubmit={handleSubmit} className="agendar-citas-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input 
            type="text" 
            id="apellido" 
            name="apellido" 
            value={formData.apellido} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
          <input 
            type="date" 
            id="fechaNacimiento" 
            name="fechaNacimiento" 
            value={formData.fechaNacimiento} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipoTerapia">Tipo de Terapia:</label>
          <select 
            id="tipoTerapia" 
            name="tipoTerapia" 
            value={formData.tipoTerapia} 
            onChange={handleChange} 
            required 
          >
            <option value="individual">Individual</option>
            <option value="de pareja">Pareja</option>
            <option value="familiar">Familiar</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
    </div>
  );
};

export default AgendarCitas;

```

## Conclusiones

Este proyecto ha sido diseñado para ofrecer una experiencia intuitiva y eficiente tanto para los usuarios como para el administrador del sitio web. A continuación, se presentan las conclusiones clave:

1. **Navegación Fluida:** La implementación de un `NavBar` adaptativo garantiza una navegación fluida en diferentes dispositivos, manteniendo una interfaz moderna y funcional.

2. **Presentación de Tratamientos:** La sección de tratamientos proporciona información clara y detallada sobre las terapias disponibles, incluyendo descripciones, imágenes y costos, facilitando a los usuarios la elección del tratamiento más adecuado para sus necesidades.

3. **Facilidad para Agendar Citas:** El formulario de agendar cita simplifica el proceso de programación al capturar datos esenciales y enviar la información a través de WhatsApp, junto con un mensaje predeterminado. Además, el cálculo automático de edad mejora la precisión y la eficiencia del proceso de agendamiento.

En resumen, este proyecto combina un diseño atractivo y funcionalidades prácticas para ofrecer una experiencia de usuario eficaz y accesible, cumpliendo con los objetivos establecidos y mejorando la interacción con los visitantes del sitio.



