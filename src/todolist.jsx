import React, { Component } from 'react';
import { ToDoItem } from './todoitem.jsx';
import todo from './todos.json'
import { Link, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { markTodo, addTodo, deleteTodo, clearCompleted } from './actions/actions.js';
//import connect


class ToDoList extends Component {

    //state disappears
    state = { key: 200 }

    handleNewTask = (event) => {

        if (event.keyCode === 13) {
            let keyNumber = this.state.key + 1
            let title = event.target.value
            this.setState({ key: keyNumber })
            this.props.addTodo(title, keyNumber)
            event.target.value = null

        }


    }


    toggleCheck = (id) => (event) => {
        this.props.markComplete(id)
    }



    deleteOne = (id) => (event) => {
        this.props.deleteTodo(id)
    }

    deleteAll = (id) => {
        // let newArray = this.state.todolist.filter(todo => todo.completed === false)
        // this.setState({ todolist: newArray })
        // store.dispatch({ todolist: newArray })
        this.props.clearCompleted(id)
    }

    entireList = () => {
        return this.props.todos.map(todo => <ToDoItem key={todo.id} status={todo.completed} task={todo.title} deleteOne={this.deleteOne(todo.id)} toggleCheck={this.toggleCheck(todo.id)} />)
    }

    active = () => {
        let newArray = this.props.todos.filter(todo => todo.completed === false)
        return newArray.map(todo => <ToDoItem key={todo.id} status={todo.completed} task={todo.title} deleteOne={this.deleteOne(todo.id)} toggleCheck={this.toggleCheck(todo.id)} />)
    }

    completed = () => {
        let newArray = this.props.todos.filter(todo => todo.completed === true)
        return newArray.map(todo => <ToDoItem key={todo.id} status={todo.completed} task={todo.title} deleteOne={this.deleteOne(todo.id)} toggleCheck={this.toggleCheck(todo.id)} />)
    }

    render() {
        // const todolist = this.todolist

        return (

            <main>
                <section className='todoapp'>
                    <header className='header'>
                        <h1>todos</h1>
                        <input className='new-todo' placeholder='What needs to be done?' onKeyDown={this.handleNewTask} autoFocus />
                    </header>

                    {/* This section should be hidden by default and shown when there are todos */}
                    <section className='main'>
                        <ul className='todo-list'>

                            <Switch>
                                <Route exact path="/" component={this.entireList} />
                                <Route exact path="/active" component={this.active} />
                                <Route exact path="/completed" component={this.completed} />

                            </Switch>

                        </ul>
                    </section>

                    <footer className='footer'>
                        <span className='todo-count'><strong>{this.props.todos.length}</strong> item(s) left</span>

                        <ul className="filters">
                            <li>
                                <Link to="/">
                                    All
                            </Link>
                            </li>
                            <li>
                                <Link to="/active">
                                    Active
                             </Link>
                            </li>
                            <li>
                                <Link to="/completed">
                                    Completed
                             </Link>
                            </li>
                        </ul>



                        <button className="clear-completed" onClick={this.deleteAll}>Clear completed</button>

                    </footer>

                </section>
            </main >


        )
    }

}

{/* does this does in the class? */ }
const mapStateToProps = (state) => {
    return { todos: state.todos };
};

function mapDispatchToProps(dispatch) {
    return ({
        markComplete: (id) => { dispatch(markTodo(id)) },
        addTodo: (title, keyNumber) => { dispatch(addTodo(title, keyNumber)) },
        deleteTodo: (id) => { dispatch(deleteTodo(id)) },
        clearCompleted: (id) => { dispatch(clearCompleted(id)) }

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)

