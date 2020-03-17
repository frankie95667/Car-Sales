import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFeature,
  addAdditionalFeature,
  updateTotal
} from '../actions/carSalesActions';

const AddedFeature = props => {
  const dispatch = useDispatch();

  const unBuyItem = item => {
    // dispatch an action here to remove an item
    dispatch(removeFeature(item.id));
    const newItem = {
      ...item,
      price: -item.price
    }
    dispatch(addAdditionalFeature(item));
    dispatch(updateTotal(newItem));
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => unBuyItem(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
