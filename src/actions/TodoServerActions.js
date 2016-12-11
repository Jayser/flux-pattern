import AppDispatcher from '../AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

export default {
    receiveAsyncTodo: value => {
        AppDispatcher.handleServerAction({
            actionType: TodoConstants.ADD_ASYNC_TODO,
            value
        });
    }
};