import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";

import Title from "../../shared/Title";

import { ProductsArray } from "../../../utils/ProductsArray";
import { media } from "../../../styled-components/Global";

const StyledStore = styled.div`
  width: 60%;
  margin-right: 2rem;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    column-count: 3;
    column-gap: 10px;

    li {
      display: inline-block;
      width: 100%;
      margin-bottom: 10px;
      border: 1px solid #f2e8f3;
      cursor: pointer;

      a {
        img {
          width: 100%;
        }
      }
    }

    ${media.tablet_s} {
      column-count: 2;
    }

    ${media.phone} {
      column-count: 1;
    }
  }
`;

const Store = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <StyledStore>
      <Title>Store</Title>
      <ul>
        {ProductsArray.map((product) => (
          <li key={product.id}>
            <a onClick={() => handleAddToCart(product)}>
              <img
                src={product.image}
                alt={product.name}
                style={{ objectFit: "center" }}
              />
            </a>
          </li>
        ))}
      </ul>
    </StyledStore>
  );
};

export default Store;
