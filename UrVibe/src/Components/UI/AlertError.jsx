import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import '../../Components/Inicio/Inicio.css'

export default function AlertError({ tipoError }) {
  let mensaje = '';

  
  switch (tipoError) {
    case 'correoInvalido':
      mensaje = 'Ups. Revisa si ingresaste correctamente el correo';
      break;
    case 'correoExistente':
      mensaje = 'El correo electrónico ya está registrado';
      break;
    default:
      mensaje = 'Ha ocurrido un error. Por favor inténtalo de nuevo';
  }

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="error" className='alert'>
        {mensaje}
      </Alert>
    </Stack>
  );
}