
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
