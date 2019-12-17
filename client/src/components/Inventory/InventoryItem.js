import React from 'react';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './InventoryItem.Styles';

const InventoryItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { item, category, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <TextContainer>{item}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};


export default InventoryItem;
