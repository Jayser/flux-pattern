import AppDispatcher from '../AppDispatcher';
import TodoConstants from '../constants/TodoConstants';
import GoogleGeoLocationAPIUtils from '../utils/GoogleGeoLocationAPIUtils';

export default {
    addTodo: value => {
        AppDispatcher.handleViewAction({
            actionType: TodoConstants.ADD_TODO,
            value
        });
    },
    addAsyncTodo: value => {
        GoogleGeoLocationAPIUtils.get(value);
    }
}