import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Store from "./Store/Store";
import ItemDetail from "./ProductDetail/ProductDetail";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

const StyledMarketPlace = styled.main`
  width: 100%;
  display: flex;
`;

const MarketPlace = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showShoppingCart = useSelector((state) => state.cart.showShoppingCart);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <StyledMarketPlace>
      <Store
        onProductSelect={handleProductSelect}
        selectedProduct={selectedProduct}
      />
      {showShoppingCart ? (
        <ShoppingCart />
      ) : (
        <ItemDetail selectedProduct={selectedProduct} />
      )}
    </StyledMarketPlace>
  );
};

export default MarketPlace;
