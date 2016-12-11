import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

import TodoInput from './TodoInput';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: [] };
    }

    static getStores() {
        return [ TodoStore ];
    }

    static calculateState() {
        return { todo: TodoStore.getState() };
    }

    handleAddTodo(value) {
        TodoActions.addTodo(value);
    }

    handleAddAsyncTodo(value) {
        TodoActions.addAsyncTodo(value);
    }

    renderTodo() {
        return this.state.todo.map(({ value, id}) => (
            <li key={ id } data-id={ id }>{ value }</li>
        ));
    }

    render() {
        const todo = this.renderTodo();

        return (
            <div>
                <TodoInput
                    handleAddTodo={ this.handleAddTodo }
                    handleAddAsyncTodo={ this.handleAddAsyncTodo } />
                <ul> { todo } </ul>
            </div>
        );
    }
}

export default Container.create(TodoApp);
