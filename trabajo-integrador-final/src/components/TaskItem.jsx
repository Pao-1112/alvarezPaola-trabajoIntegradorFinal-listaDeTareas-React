import React from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import '../stylesheets/TaskItem.css';

function ItemsUp({ id, text, done, doneTask, deleteTask }) {
    return (
        <div className={done ? 'contentItem done' : 'contentItem'}>
            <div className='textItem' onClick = {() => doneTask(id) } >
                {text}
            </div>
            <div className='contentIconItem' onClick = {() => deleteTask(id) } >
                <AiOutlineCloseSquare className='iconItem' /> 
            </div>
        </div>
    );
};

export default ItemsUp;