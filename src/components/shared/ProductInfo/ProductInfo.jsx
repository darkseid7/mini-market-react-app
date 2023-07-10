import styled from "styled-components";
import { useDispatch } from "react-redux";

import { addToCart, removeFromCart } from "../../../redux/cartSlice";

const StyledProductInfo = styled.div`
  .product-name {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0.5rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      color: #9c1dae;
    }

    .product-actions {
      button {
        width: 40px;
        height: 40px;
        border: none;
        background-color: #9c1dae;
        font-weight: bold;
        font-size: 1rem;
        color: #ffffff;
        cursor: pointer;

        &:first-child {
          background-color: #eeeeee;
          color: #000000;

          &:hover {
            background-color: #e0e0e0;
          }
        }

        &:hover {
          background-color: #cb21ff;
        }
      }
    }
  }
`;

const ProductInfo = ({ id, image, name, price, description }) => {
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart({ productId: product, quantityToRemove: 1 }));
  };

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <StyledProductInfo>
      <div className="product-name">
        <span>
          {name} <span className="price">• ${price} </span>
        </span>
        <div className="product-actions">
          <button onClick={() => handleRemove(id)}>-</button>
          <button
            onClick={() =>
              handleAdd({
                id: id,
                image: image,
                name: name,
                price: price,
                description: description,
              })
            }
          >
            +
          </button>
        </div>
      </div>
      <div className="product-description">
        <p>{description}</p>
      </div>
    </StyledProductInfo>
  );
};

export default ProductInfo;
