import AppDispatcher from '../AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

export default {
    receiveRandom: function({ status, data: { results } }) {
        if (status === 200 && results.length) {
            AppDispatcher.handleServerAction({
                actionType: TodoConstants.ADD_ASYNC_ITEM,
                value: results.shift().formatted_address
            });
        }
    }
};