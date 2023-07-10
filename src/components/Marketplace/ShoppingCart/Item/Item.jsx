import styled from "styled-components";
import { useSelector } from "react-redux";

import ItemQuantity from "../../../shared/ItemQuantity/ItemQuantity";

const StyledItem = styled.div`
  padding-bottom: 1rem;

  p {
    font-size: 1rem;
    color: #9e9e9e;
  }

  .item-container {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2e8f3;

    .item-image {
      margin-left: 1rem;
    }
  }
`;

const Item = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <StyledItem>
      {cart.products.length === 0 ? (
        <p>Please choose a product on the left</p>
      ) : (
        cart.products.map((product) => {
          const { name, image, id, quantity } = product;
          return (
            <div
              key={id}
              className="item-container"
            >
              <ItemQuantity width={37}>{quantity}</ItemQuantity>
              <div className="item-image">
                <img
                  src={image}
                  width={50}
                  height={60}
                  alt={name}
                />
              </div>
            </div>
          );
        })
      )}
    </StyledItem>
  );
};

export default Item;
