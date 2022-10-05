import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { markTodo, toogleTodo, removeTodo } from './slice'
import { Button, Card, Form } from 'react-bootstrap';

function Todo(props) {
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <span style={{ textDecoration: props.todo.completed ? "line-through" : "" }}>{props.todo.text}</span>
            <Button variant="outline-success" onClick={() => dispatch(markTodo(props.index))} >✓</Button>{' '}
            <Button variant="outline-success" onClick={() => dispatch(toogleTodo(props.index))} >Toogle</Button>{' '}
            <Button variant="outline-danger" onClick={() => dispatch(removeTodo(props.index))} >✕</Button>

        </React.Fragment>
    )
}
export default Todo;