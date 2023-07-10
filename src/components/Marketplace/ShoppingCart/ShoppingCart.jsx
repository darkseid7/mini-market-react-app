import styled from "styled-components";

import Title from "../../shared/Title";

import Item from "./Item/Item";
import Total from "./Total/Total";
import WompiWidget from "./WompiWidget/WompiWidget";

const StyledShoppingCart = styled.div`
  width: 40%;
`;

const ShoppingCart = () => {
  return (
    <StyledShoppingCart>
      <Title>Shopping Cart</Title>
      <Item />
      <Total />
      <WompiWidget />
    </StyledShoppingCart>
  );
};

export default ShoppingCart;
