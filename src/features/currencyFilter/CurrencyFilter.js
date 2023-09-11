import React from 'react';
import { setCurrency } from './currencyFilterSlice.js';

export const CurrencyFilter = ({ currencyFilter, dispatch }) => {
  const onClickHandler = (currency) => {
    dispatch(setCurrency(currency));
  };

  // Check if currencyFilter is an array before using map
  if (!Array.isArray(currencyFilter)) {
    currencyFilter = []; // Set currencyFilter to an empty array or handle the error in an appropriate way
  }

  return (
    <div id="currency-filters-container">
      <h3>Choose a currency</h3>
      {currencyFilter.map(createCurrencyButton)}
    </div>
  );

  function createCurrencyButton(currency) {
    return (
      <button
        className={`currency-button ${
          currencyFilter === currency && 'selected'
        }`}
        key={currency}
        onClick={() => onClickHandler(currency)}
      >
        {currency}
      </button>
    );
  }
};