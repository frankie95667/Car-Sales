import { combineReducers } from 'redux';
import { carSalesReducer } from './carSalesReducer';
import { additionalPriceReducer } from './AdditionalPriceReducer';
import { additionalFeatureReducer } from './additionalFeatureReducer';
export default combineReducers({
    carSalesReducer,
    additionalPriceReducer,
    additionalFeatureReducer
})