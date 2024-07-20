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
  );
};

export default AgendarCitas;
