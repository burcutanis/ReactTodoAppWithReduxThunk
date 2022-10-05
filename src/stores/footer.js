import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentFilter } from './slice'
import { Button, Card, Form } from 'react-bootstrap';

function Footer(props) {
    const dispatch = useDispatch()
    const currentFilter = useSelector((state) => state.xtodo.currentFilter)

    return (
        <footer className="style2">
            <Button variant="outline-success" className={currentFilter === 'Active' ? 'selected' : ''} href="#/active" onClick={() => dispatch(setCurrentFilter("Active"))}>Active</Button>{' '}
            <Button variant="outline-info" className={currentFilter === 'All' ? 'selected' : ''} href="#/" onClick={() => dispatch(setCurrentFilter("All"))}>All</Button>{' '}
            <Button variant="outline-danger" className={currentFilter === 'Completed' ? 'selected' : ''} href="#/completed" onClick={() => dispatch(setCurrentFilter("Completed"))}>Completed</Button>
        </footer>
    )
}
export default Footer;