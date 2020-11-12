import React from "react";
import { useDispatch } from "react-redux";
import {
  addFeature,
  removeAdditonalFeature,
  updateTotal
} from "../actions/carSalesActions";

const AdditionalFeature = props => {
  const dispatch = useDispatch();
  
  const buyItem = item => {
    // dipsatch an action here to add an item
    dispatch(addFeature(item));
    dispatch(removeAdditonalFeature(item.id));
    dispatch(updateTotal(item));
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => {
          buyItem(props.feature);
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
