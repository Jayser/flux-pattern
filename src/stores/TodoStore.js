import { EventEmitter } from 'events';
import uuid from 'uuid';
import assign from 'object-assign';

import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const CHANGE_EVENT = 'change';

const _todos = [];

function create(value) {
    _todos.push({
        id: uuid(),
        value: value
    });
}

const TodoStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _todos;
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    }
});

AppDispatcher.register(({ value, actionType }) => {
    switch(actionType) {
        case TodoConstants.TODO_CREATE:
            create(value);
            TodoStore.emitChange();
            break;
    }
});

export default TodoStore;
