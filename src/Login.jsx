import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { BasicTextFields, BasicPassword, BasicButtons } from './ComponentesLogin';
import BhpHeader from './components/jsx/bhp-header';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
    
    // Validar si el nombre de usuario y la contraseña están completos
    if (username.trim() === '' || password.trim() === '') {
        setOpen(true); // Abrir el diálogo de alerta
        return; // Detener la ejecución de la función si no se completan los campos
    }

    handleSaveToLocalStorage(); // Guardar en localStorage
    handleClick(); // Manejar el clic
    navigate("/subirArchivo"); // Redirigir al usuario
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
    <div>
      <BhpHeader />
      <section className='login-form'>
        <h1 className='H1'>Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <BasicTextFields value={username} onChange={handleUsernameChange} />
          <BasicPassword value={password} onChange={handlePasswordChange} />
          <BasicButtons ></BasicButtons>
        </form>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Atención"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Por favor complete todos los campos antes de enviar el formulario.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Volver
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    </div>
  );
}
