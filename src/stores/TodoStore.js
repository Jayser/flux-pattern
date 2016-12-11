import { ReduceStore } from 'flux/utils';
import uuid from 'uuid';

import AppDispatcher from '../AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

function addTodo(state, value) {
    return state.concat({
        id: uuid(),
        value: value
    });
}

class TodoStore extends ReduceStore {
    getInitialState() {
        return [];
    }

    reduce(state, { action: { value, actionType } }) {
        switch(actionType) {
            case TodoConstants.ADD_TODO:
                return addTodo(state, value);
            case TodoConstants.ADD_ASYNC_TODO:
                return addTodo(state, value);
            default: return state;
        }
    }
}

export default new TodoStore(AppDispatcher);
