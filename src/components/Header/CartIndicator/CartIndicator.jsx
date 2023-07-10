import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";

import { useDispatch } from "react-redux";
import {
  removeAllFromCart,
  setShowShoppingCart,
} from "../../../redux/cartSlice";

const StyledCartIndicator = styled.div`
  display: flex;
  .cart-container {
    display: flex;
    align-items: center;
    border: 1px solid #9c1dae;
    cursor: pointer;
    padding: 0.5rem;

    ${(props) =>
      props.showShoppingCart
        ? css`
            background-color: #f2cffd;
          `
        : css`
            background-color: #9c1dae;
            .cart-value {
              span {
                color: #fff;
              }
            }
          `}
  }

  .cart-value {
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    color: #9c1dae;

    font-weight: bold;

    svg {
      margin-right: 0.5rem;
    }
  }

  button {
    background-color: #9c1dae;
    color: #fff;
    border: none;
    padding: 0.3rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: #cb21ff;
    }
  }
`;

const CartIndicator = () => {
  const dispatch = useDispatch();
  const { totalPrice, showShoppingCart } = useSelector((state) => state.cart);

  const handleRemoveCartProducts = () => {
    dispatch(removeAllFromCart());
  };

  const handleShowShoppingCart = () => {
    dispatch(setShowShoppingCart(!showShoppingCart));
  };

  return (
    <StyledCartIndicator showShoppingCart={showShoppingCart}>
      <div
        onClick={handleShowShoppingCart}
        className="cart-container"
        data-testid="cart-container"
      >
        <div className="cart-value">
          <BsCart4
            fontSize={"1.5rem"}
            color={showShoppingCart ? "#9c1dae" : "#ffffff"}
          />
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {showShoppingCart && (
        <button onClick={handleRemoveCartProducts}>X</button>
      )}
    </StyledCartIndicator>
  );
};

export default CartIndicator;
