import AppDispatcher from "../dispatcher/AppDispatcher";
import TodoConstants from "../constants/TodoConstants";

export default {
    addItem(value) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            value
        });
    },
};