import appDispatcher from "../AppDispatcher";
import todoConstants from "../constants/TodoConstants";
import googleGeoLocation from "../utils/GoogleGeoLocation";

export default {
    addItem(value) {
        appDispatcher.handleViewAction({
            actionType: todoConstants.NEW_ITEM,
            value
        });
    },
    addGeoLocationItem: city => {
        googleGeoLocation.get(city);
    }
};