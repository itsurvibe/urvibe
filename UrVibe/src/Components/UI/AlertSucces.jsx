import * as React from 'react'
import { Alert, Stack } from '@mui/material'
import '../../Components/Inicio/Inicio.css'


export default function AlertSucces() {
    return(
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="success" className='alert'>
                El registro ha sido exitoso!
            </Alert>
        </Stack>
    )
}