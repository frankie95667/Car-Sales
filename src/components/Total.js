import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const totalPrice = useSelector(state => {
    return state.carSalesReducer.price + state.additionalPriceReducer.additionalPrice})
  return (
    <div className="content">
      <h4>Total Amount: ${totalPrice}</h4>
    </div>
  );
};

export default Total;
