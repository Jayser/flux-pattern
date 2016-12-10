import { Dispatcher } from 'flux';

const appDispatcher = new Dispatcher();
const dispatch = appDispatcher.dispatch;

appDispatcher.dispatch = function (action) {
  console.log('Action: ', action);

  dispatch.apply(this, arguments);
};

export default appDispatcher;
