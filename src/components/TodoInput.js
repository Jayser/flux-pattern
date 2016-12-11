import React, { Component } from 'react';
import autobind from 'autobind-decorator';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    @autobind handleChange({ target: { value } }) {
        this.setState({ value });
    }

    @autobind handleClear() {
        this.setState({ value: '' });
    }

    @autobind handleAddTodo(e) {
        e.preventDefault();

        const {
            props: { handleAddTodo },
            state: { value }
        } = this;

        value && handleAddTodo(value);
    }

    @autobind handleAddAsyncTodo(e) {
        e.preventDefault();

        const {
            props: { handleAddAsyncTodo },
            state: { value }
        } = this;

        value && handleAddAsyncTodo(value);
    }

    render() {
        return (
            <form>
                <input value={ this.state.value } onChange={ this.handleChange } />
                <button onClick={ this.handleClear }>X</button>
                <button onClick={ this.handleAddTodo }>add todo</button>
                <button onClick={ this.handleAddAsyncTodo }>add sync todo</button>
            </form>
        );
    }
}

export default TodoInput;
