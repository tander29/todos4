import React, { Component } from 'react';




export class ToDoItem extends Component {

    render() {
        return (

            <li className={this.props.status ? 'completed' : null}>
                <div className='view'>
                    {/* this is using this.props for now, and not status, so I can see it is working, since we aren't doing the functionality yet */}
                    <input className='toggle' type='checkbox' checked={this.props.status} onChange={this.props.toggleCheck} />
                    <label>{this.props.task}</label>
                    <button className="destroy" onClick={this.props.deleteOne} />
                </div>
            </li>
        )
    }
}

