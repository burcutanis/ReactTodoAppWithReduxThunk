import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, Form } from 'react-bootstrap';
import { addTodo, setValue } from './slice'

function FormTodo(props) {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.xtodo.value)

    function handleSubmit(e) {
        e.preventDefault();
        console.log("input value:", e.target.value);
        dispatch(addTodo(value))
    };

    function change(e) {
        dispatch(setValue(e.target.value));
    };


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control
                    value={value}
                    type="text"
                    className="input"
                    onChange={change}
                    placeholder="Add new todo" />
            </Form.Group>
            <button className='button' type="submit">
                Submit
            </button>
        </Form>
    )
}
export default FormTodo;