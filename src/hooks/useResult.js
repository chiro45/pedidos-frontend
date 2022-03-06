import { useState } from "react";



export const useResult = ( initialState = {} ) => {
    //utilizamo el useState  para darle el initialState
    const [input, setValues] = useState(initialState);             //declara el useState para el form
    //toma el e.target cuando hay un cambio
    const handleInputChange = ({ target }) => {                         //toma el target y detecta el cambio del input al mandarse
        //luego introduce el cambio
        setValues({//spread para no modificar nada accidentalmente
            ...input,// el elemento con el target.name
            [ target.name ]: target.value //obtiene su nuevo valor
        });

        

    }

    //exportamos
    return [ input, handleInputChange];

}