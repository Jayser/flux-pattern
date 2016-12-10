import todoServerActions from '../actions/TodoServerActions';
import { API } from '../AppConstants';
import axios from 'axios';

export default {
    get: (city) => {
        axios.get(`${API.GOOGLE_GEO_LOCATION}?&address=${city || 'dnipro'}`)
            .then(res => {
                todoServerActions.receiveRandom(res);
            }).catch(err => {
                console.error(err);
            });
    }
};