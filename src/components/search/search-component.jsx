import React from 'react';
import TextField from '@material-ui/core/TextField';
export default function Search(){
    return(
        <TextField 
            id="outlined-search" 
            label="Busca tu Usuario" 
            type="search" 
            variant="outlined" />
    )
}