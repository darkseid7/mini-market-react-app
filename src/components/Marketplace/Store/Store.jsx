import styled from "styled-components";

import { ProductsArray } from "../../../utils/ProductsArray";
import { media } from "../../../styled-components/Global";

import Title from "../../shared/Title";
import Product from "./Product/Product";

const StyledStore = styled.div`
  width: 60%;
  margin-right: 2rem;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    column-count: 3;
    column-gap: 10px;
  }

  ${media.tablet_s} {
    ul {
      column-count: 2;
    }
  }

  ${media.phone} {
    width: 100%;
    margin-right: 0;

    ul {
      column-count: 1;
    }
  }
`;

const Store = ({ onProductSelect, selectedProduct }) => {
  return (
    <StyledStore>
      <Title>Store</Title>
      <ul>
        {ProductsArray.map((product) => {
          const { id, image, name, price, description } = product;

          return (
            <Product
              key={id}
              id={id}
              image={image}
              name={name}
              price={price}
              description={description}
              onProductSelect={onProductSelect}
              selectedProduct={selectedProduct}
            />
          );
        })}
      </ul>
    </StyledStore>
  );
};

export default Store;
