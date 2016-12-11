import todoServerActions from '../actions/TodoServerActions';
import { API } from '../AppConstants';
import axios from 'axios';

let idx = 0;

const success = (idx) => {
    return ({ status, data: { results } }) => {
        if (status === 200 && results.length) {
            const value = `[${ idx }] - ${ results.shift().formatted_address }`;

            todoServerActions.receiveAsyncTodo(value);
        }
    }
};

export default {
    get: address => {
        axios.get(`${ API.GOOGLE_GEO_LOCATION }?&address=${ address }`)
            .then(success(idx++)).catch(err => { console.error(err) });
    }
};