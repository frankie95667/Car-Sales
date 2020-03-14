import React from 'react';
import { connect } from 'react-redux';
import { 
  addFeature, 
  updateTotal, 
  removeFeature, 
  removeAdditonalFeature, 
  addAdditionalFeature
} from './actions/carSalesActions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  console.log(props);
  const car = props.car;
  const additionalPrice = props.additionalPrice;
  const additionalFeatures = props.additionalFeatures;
  
  const state = {
    
  };

  const unBuyItem = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item.id);
    const newItem = {
      ...item,
      price: -item.price
    }
    props.addAdditionalFeature(item);
    props.updateTotal(newItem);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
    props.removeAdditonalFeature(item.id);
    props.updateTotal(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} unBuyItem={unBuyItem} />
      </div>
      <div className="box">
        <AdditionalFeatures 
          additionalFeatures={additionalFeatures}
          addFeature={buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {price, name, image, features} = state.carSalesReducer;
  const {additionalPrice} = state.additionalPriceReducer;
  const additionalFeatures = state.additionalFeatureReducer;
  console.log(state)
  return {
    car:{
      price,
      name,
      image,
      features
    },
    additionalPrice,
    additionalFeatures
  }
}

export default connect(mapStateToProps, {
  addFeature,
  updateTotal,
  removeFeature,
  removeAdditonalFeature,
  addAdditionalFeature
})(App);
