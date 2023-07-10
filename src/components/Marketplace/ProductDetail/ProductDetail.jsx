import styled from "styled-components";

import Title from "../../shared/Title";
import Product from "./Product/Product";

const StyledItemDetail = styled.div`
  width: 40%;
`;

const ItemDetail = ({ selectedProduct }) => {
  return (
    <StyledItemDetail>
      <Title>Product</Title>
      <Product selectedProduct={selectedProduct} />
    </StyledItemDetail>
  );
};

export default ItemDetail;
