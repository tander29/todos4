import React, { Component } from 'react';
import { ToDoItem } from './todoitem.jsx';
import todo from './todos.json'
import { Link, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { markTodo } from './actions/actions.js';
//import connect


class ToDoList extends Component {

    //state disappears
    state = { todolist: todo, key: 200 }

    handleNewTask = (event) => {

        if (event.keyCode === 13) {
            let keyNumber = this.state.key
            let newArray = this.state.todolist.slice()
            newArray.push({ title: event.target.value, completed: false, id: keyNumber++, userID: 1 })
            this.setState({ todolist: newArray })
            this.setState({ key: keyNumber++ })
            // store.dispatch({ todolist: newArray, key: keyNumber++ })
            //call action creater function
            //connecter (mapstate, mapdispatch)(component) at bottom
            event.target.value = null

        }


    }


    toggleCheck = (id) => (event) => {
        // let arrayClicked = this.state.todolist.filter(todo => todo.id === id)
        // let item = arrayClicked.pop()
        // item.completed = !item.completed
        // let newArray = this.state.todolist.map(todo => {
        //     if (todo.id === id.id) { return todo = item } else { return todo }
        // })

        this.props.markComplete(id)
    }



    deleteOne = (id) => (event) => {

        let arrayClicked = this.state.todolist.filter(todo => todo.id === id)
        let item = arrayClicked.pop()


        console.log("delete me", item)
        let index = this.state.todolist.indexOf(item)
        console.log(index)
        let newArray = this.state.todolist.slice()
        newArray.splice(index, 1)
        // console.log(newArray)

        this.setState({ todolist: newArray })
        // store.dispatch({ todolist: newArray })
    }

    deleteAll = (event) => {
        let newArray = this.state.todolist.filter(todo => todo.completed === false)
        console.log(newArray)
        console.log('ginger')
        this.setState({ todolist: newArray })
        // store.dispatch({ todolist: newArray })
        console.log(this.state)
    }

    entireList = () => {
        return this.state.todolist.map(todo => <ToDoItem key={todo.id} status={todo.completed} task={todo.title} deleteOne={this.deleteOne(todo.id)} toggleCheck={this.toggleCheck(todo.id)} />)
    }

    active = () => {
        let newArray = this.state.todolist.filter(todo => todo.completed === false)
        return newArray.map(todo => <ToDoItem key={todo.id} status={todo.completed} task={todo.title} deleteOne={this.deleteOne(todo.id)} toggleCheck={this.toggleCheck(todo.id)} />)
    }

    completed = () => {
        let newArray = this.state.todolist.filter(todo => todo.completed === true)
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
                        <span className='todo-count'><strong>0</strong> item(s) left</span>

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


    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)

