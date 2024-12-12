import React from 'react'
import ReactDom from 'react-dom/client'
import MainButton from "./components/main-button.jsx";
import Navbar from "./components/nav.jsx";

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <>
        <Navbar />
        <h1>Hola Mundo</h1>
        <MainButton />
    </>
)
