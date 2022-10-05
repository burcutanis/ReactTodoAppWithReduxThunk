import Todo from './todo';
import FormTodo from './formTodo';
import { useSelector } from "react-redux";
import { Button, Card, Form } from 'react-bootstrap';

function Todos() {
    const todos = useSelector((state) => state.xtodo.todos)
    const currentFilter = useSelector((state) => state.xtodo.currentFilter)

    var filterFn = function (task) {
        if (currentFilter === 'All') {
            return true;
        }

        if (currentFilter === 'Active') {
            return !task.completed;
        }

        if (currentFilter === 'Completed') {
            return task.completed;
        }
    }.bind(this);

    var tasksForCriteria = todos.filter(filterFn);


    return (
        <div className="style">
            <h1 className="text-center mb-4">Todo List</h1>
            <FormTodo />
            {tasksForCriteria.map((todo, i) => (
                <Card>
                    <Card.Body>
                        <div className="todo">
                            <Todo todo={todo} key={i} index={i} />
                        </div >
                    </Card.Body>
                </Card>
            ))}
        </div >
    );
}

export default Todos;