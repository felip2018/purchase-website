import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import MainRouter from "./router/MainRouter.tsx";

function App() {

  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
            <MainRouter/>
        </BrowserRouter>
      </React.StrictMode>
    </>
  )
}

export default App
