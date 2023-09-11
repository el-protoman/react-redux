import React, { useEffect } from 'react';

import {
  calculatePrice,
  getCurrencySymbol,
} from '../../utilities/utilities.js';
import { addItem } from '../cart/cartSlice.js';
import { loadData } from './inventorySlice';
import { getFilteredItems } from '../../utilities/utilities.js'; // Import the filter function

export const Inventory = ({ inventory, currencyFilter, dispatch, searchTerm }) => {
  const onMount = () => {
    dispatch(loadData());
  };
  useEffect(onMount, [dispatch]);

  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem));
  };

  // Filter the inventory based on searchTerm
  const filteredInventory = getFilteredItems(inventory, searchTerm);

  if (filteredInventory.length === 0) {
    return <p> Sorry, no products match your search... </p>;
  }

  return <ul id="inventory-container">{filteredInventory.map(createInventoryItem)}</ul>;

  function createInventoryItem(inventoryItem) {
    const { price, name, img } = inventoryItem;
    const displayPrice = calculatePrice(price, currencyFilter);
    return (
      <li key={name} className="item">
        <img src={img} alt={''} />
        <h3>{name}</h3>
        <h3 className="price">
          {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)} {currencyFilter}
        </h3>
        <button
          onClick={() => onClickHandler(inventoryItem)}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </li>
    );
  }
};
