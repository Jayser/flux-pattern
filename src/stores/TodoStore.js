import { EventEmitter } from 'events';
import uuid from 'uuid';
import assign from 'object-assign';

import AppDispatcher from '../AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const CHANGE_EVENT = 'change';

const _todos = [];

function addTodo(value) {
    _todos.push({
        id: uuid(),
        value: value
    });
}

const TodoStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _todos;
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
});

AppDispatcher.register(({ action: { value, actionType } }) => {
    switch(actionType) {
        case TodoConstants.ADD_TODO:
            addTodo(value);
            TodoStore.emitChange();
            break;
        case TodoConstants.ADD_ASYNC_TODO:
            addTodo(value);
            TodoStore.emitChange();
            break;
    }
});

export default TodoStore;
