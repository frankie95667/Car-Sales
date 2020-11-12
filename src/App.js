import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
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

const App = () => {
  const dispatch = useDispatch();
  const additionalFeatures = useSelector(state => state.additionalFeatureReducer);  

  const buyItem = item => {
    // dipsatch an action here to add an item
    dispatch(addFeature(item));
    dispatch(removeAdditonalFeature(item.id));
    dispatch(updateTotal(item));
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

export default App;
