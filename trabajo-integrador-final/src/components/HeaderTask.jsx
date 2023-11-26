import React from 'react';
import Logo from '../assets/Logo.png';
import '../stylesheets/HeaderTask.css';

function TitleAndLogo() {
    return(
        <div id= 'portada'>
          <img src={Logo} alt="Logo" />
          <h1>My Anotador</h1>
        </div>
    );
};
export default TitleAndLogo;