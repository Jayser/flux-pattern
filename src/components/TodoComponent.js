import React, { Component } from 'react';

import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    componentDidMount() {
        TodoStore.addChangeListener(() => this.change());
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(() => this.change());
    }

    change() {
        this.setState({ value: '' });
    }

    handleChange({ target: { value } }) {
        this.setState({ value });
    }

    handleClick(e) {
        e.nativeEvent.preventDefault();
        TodoActions.addItem(this.state.value);
    }

    handleAsyncClick(e) {
        e.nativeEvent.preventDefault();
        TodoActions.addGeoLocationItem(this.state.value);
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
                <form>
                    <input value={ this.state.value } onChange={ (e) => this.handleChange(e) } />
                    <button onClick={ (e) => this.handleClick(e) }>add todo</button>
                    <button onClick={ (e) => this.handleAsyncClick(e) }>add sync todo</button>
                </form>
                <ul> { items } </ul>
            </div>
        );
    }
}

export default TodoComponent;
