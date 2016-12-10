import AppDispatcher from "../dispatcher/AppDispatcher";
import TodoConstants from "../constants/TodoConstants";

export default {
    addItem(value) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.NEW_ITEM,
            value
        });
    },
};