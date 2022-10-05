import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './stores/todos';
import Footer from './stores/footer';



function App3() {
    return (
        <div className='app'>
            <Todos />
            <Footer />

        </div>
    );
}

export default App3;


