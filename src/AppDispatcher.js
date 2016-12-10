import { Dispatcher } from 'flux';

const appDispatcher = new Dispatcher();

appDispatcher.handleViewAction = function(action) {
    console.log('VIEW_ACTION: ', action);

    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};

appDispatcher.handleServerAction = function(action) {
    console.log('SERVER_ACTION: ', action);

    this.dispatch({
        source: 'SERVER_ACTION',
        action: action
    });
};

export default appDispatcher;
