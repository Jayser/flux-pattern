import React, { Component } from 'react';

import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.renderItems);
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this.renderItems);
    }

    handleChange({ target: { value } }) {
        this.setState({ value });
    }

    handleSubmit(e) {
        e.nativeEvent.preventDefault();

        TodoActions.create(this.state.value);
        this.setState({ value: '' });
    }

    renderItems() {
        return TodoStore.getAll().map(({ value, id}) => (
            <li key={ id } id={ id }>{ value }</li>
        ));
    }

    render() {
        const items = this.renderItems();
        return (
            <div>
                <form onSubmit={ (e) => this.handleSubmit(e) }>
                    <input value={ this.state.value } onChange={ (e) => this.handleChange(e) } />
                    <button>add todo</button>
                </form>
                <ul> { items } </ul>
            </div>
        );
    }
}

export default TodoComponent;
