import React from 'react';
import ReactDOM from 'react-dom';

import "normalize.css";
import "./styles/index.css";

import App from './App';

const rootElement = document.getElementById('root');
let theme = "dark";
const callbackThemeF = function () {   
    if(theme === "light"){
        rootElement.style.setProperty('--theme-background-color', "hsl(207, 26%, 17%)");
        rootElement.style.setProperty('--elements-background-color', "hsl(209, 23%, 22%)");
        rootElement.style.setProperty('--theme-text', "hsl(0, 0%, 100%)");
        rootElement.style.setProperty('--theme-input', "hsl(0, 0%, 100%)");
      
        theme = "dark";
    }
    else if (theme === "dark"){
        rootElement.style.setProperty('--theme-background-color', "hsl(0, 0%, 98%)");
        rootElement.style.setProperty('--elements-background-color', "hsl(0, 0%, 100%)");
        rootElement.style.setProperty('--theme-text', "hsl(200, 15%, 8%)");
        rootElement.style.setProperty('--theme-input', "hsl(0, 0%, 52%)");

        theme = "light";
    }
    

}

ReactDOM.render(
    <App callbackTheme={callbackThemeF}></App>,
    rootElement
);

