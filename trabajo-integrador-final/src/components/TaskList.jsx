import React, { useState, useEffect } from 'react';
import '../stylesheets/TaskList.css';
import FormsUp from './TaskForm';
import ItemsUp from './TaskItem';

function ListsUp() {

    const [tasks, setTasks] = useState([]); //Estado de tareas

    // Agrega la tarea a la lista
    const addTask = task => { 
        if (task.text.trim()){//si la cadena no esta vacia
            task.text = task.text.trim(); //qita espacios de mas
            const updatedTask = [task, ...tasks]; //para que se vayan mostrado las tareas nuevas arriba de la anterior
            useEffect(() => {
                addTask()
            }, [alert('Tarea Guardada')], setTasks(updatedTask));//Actualizo el estado
        };
    };
   
    //Borrar una tarea
    const deleteTask = id => {
        const updatedTask = tasks.filter(task => task.id !== id);
        useEffect(() => {
            addTask()
        }, [alert('Tarea Borrada')], setTasks(updatedTask));
    }
   //Marcar una tarea como realizada
    const doneTask = id => {
        const updatedTask = tasks.map(task => {
            if (task.id === id){
                task.done =  !task.done;
            }
            return task;
        });
        useEffect(() => {
            addTask()
        }, [alert('Tarea Realizada')], setTasks(updatedTask));
    };

    return (
        <>
            <div id='contentNotebook'>
            <h2>Tareas</h2>
            <FormsUp onSubmit={addTask} /> 
            <div className='contentList'>
                {
                    tasks.map((task)=>
                        <ItemsUp
                            key={task.id}//no podemos pasarlo como props, solo generarlo
                            id={task.id}//id como props
                            text={task.text}
                            done={task.done}
                            doneTask={doneTask}
                            deleteTask={deleteTask}
                        />
                    )
                }
            </div>
            </div>
        </>
    );
}; 

export default ListsUp;