import styled from "styled-components";

import { media } from "../../../styled-components/Global";

import Title from "../../shared/Title";
import Item from "./Item/Item";
import Total from "./Total/Total";

const StyledShoppingCart = styled.div`
  width: 40%;

  ${media.phone} {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background-color: white;
  }
`;

const ShoppingCart = () => {
  return (
    <StyledShoppingCart>
      <Title>Shopping Cart</Title>
      <Item />
      <Total />
    </StyledShoppingCart>
  );
};

export default ShoppingCart;
