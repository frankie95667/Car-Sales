import { useDispatch } from 'react-redux';

export function addFeature(feature){
    return {
        type: 'ADD_FEATURE',
        payload: feature
    }
}

export function updateTotal(item){
    return {
        type: 'UPDATE_TOTAL',
        payload: item.price
    }
}

export function removeFeature(id){
    return {
        type: 'REMOVE_FEATURE',
        payload: id
    }
}

export function removeAdditonalFeature(id){
    return {
        type: 'REMOVE_ADDITIONAL_FEATURE',
        payload: id
    }
}

export function addAdditionalFeature(item){
    return {
        type: 'ADD_ADDITIONAL_FEATURE',
        payload: item
    }
}