import { styled } from "styled-components";

import Store from "./Store/Store";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

const StyledMarketPlace = styled.main`
  width: 100%;
  display: flex;
`;

const MarketPlace = () => {
  return (
    <StyledMarketPlace>
      <Store />
      <ShoppingCart />
    </StyledMarketPlace>
  );
};

export default MarketPlace;
