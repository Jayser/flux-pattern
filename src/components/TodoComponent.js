import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.handleClear);
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this.handleClear);
    }

    @autobind handleClear() {
        this.setState({ value: '' });
    }

    @autobind handleChange({ target: { value } }) {
        this.setState({ value });
    }

    @autobind handleClick(e) {
        e.preventDefault();

        const { state: { value } } = this;

        value && TodoActions.addTodo(value);
    }

    @autobind handleAsyncClick(e) {
        e.preventDefault();

        const { state: { value } } = this;

        value && TodoActions.addAsyncTodo(value);
    }

    renderTodo() {
        return TodoStore.getAll().map(({ value, id}) => (
            <li key={ id } data-id={ id }>{ value }</li>
        ));
    }

    render() {
        const todo = this.renderTodo();

        return (
            <div>
                <form>
                    <input value={ this.state.value } onChange={ this.handleChange } />
                    <button onClick={ this.handleClick }>add todo</button>
                    <button onClick={ this.handleAsyncClick }>add sync todo</button>
                </form>
                <ul> { todo } </ul>
            </div>
        );
    }
}

export default TodoComponent;
