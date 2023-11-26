import React, { useState } from 'react';
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4 } from 'uuid'; //para generar la identificacion unica

function FormsUp(props) {

    const [input, setInput] = useState('');//Estado Formulario

    // Se activa cuando se intente escribir el formulario, con cada caracter o espacio.
    const handleTextInput = (e) => {
        setInput(e.target.value);
    }
    // Se activa cuando se aprete el boton enviar tarea.
    const handleSubmit = (e) => {
        e.preventDefault(); //para que no se recarge la pagina completa
        setInput('') //una vez guardado el contenido del input debe borrarse
        const newTask = {
            id: uuidv4(), //id unico
            text: input,
            done: false
        };
        props.onSubmit(newTask); //Guardo el contenido de newTask como props para TaskList
    };

    return (
        <form 
            className='contentForm'
            onSubmit={handleSubmit}//Funcion para escuchar un evento en este caso el boton de envio
        >
            <input 
                className='contentInput'
                type='text' 
                placeholder='Escribe tu nueva tarea' 
                name='text' 
                value = {input}// el estado del contenido del input pasa a vacio despues de guardar una tares
                onChange={handleTextInput} //Cuando ocurre algo en el valor del input llama a esa funcion
            />
            <button className='contentButton'>guardar</button>
        </form>
    );
};

export default FormsUp;