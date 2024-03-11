import { useState } from 'react';
import { BasicTextFields, BasicPassword, BasicButtons } from './ComponentesLogin';
import BhpHeader from './components/jsx/bhp-header';
import { Link } from 'react-router-dom';
import "./Login.css";


function BasicForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSaveToLocalStorage = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Borra los datos de los campos de texto una vez guardados en el localStorage
    setUsername('');
    setPassword('');
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
    handleSaveToLocalStorage();
    handleClick();
  };

  const handleClick = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (!storedUsername || !storedPassword) {
      console.log('No hay datos almacenados.');
    } else {
      console.log('Usuario:', storedUsername);
      console.log('Contraseña:', storedPassword);
    }
  };

  return (
    <div id="extraContainer">
      <BhpHeader />
      <main id="mainLogin">
      <section className='login-form'>
        <h1 >Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <BasicTextFields value={username} onChange={handleUsernameChange} />
          <BasicPassword value={password} onChange={handlePasswordChange} />
          <Link to="/subirArchivo">
            <BasicButtons onClick={handleClick} id="btnLogin">Texto del botón</BasicButtons>
          </Link>
        </form>
      </section>
      </main>
    </div>


  );
}

export default BasicForm;
