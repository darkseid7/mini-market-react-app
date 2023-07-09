import styled from "styled-components";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { removeAllFromCart } from "../../../redux/cartSlice";

const StyledCartIndicator = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #9c1dae;

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
      color: #9c1dae;
    }
  }
`;

const CartValue = styled.div`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  color: #9c1dae;
  background-color: ${(props) =>
    props.$singleProduct ? "#9c1dae" : "#f2cffd"};

  font-weight: bold;

  svg {
    margin-right: 0.5rem;
  }
`;

const CartIndicator = () => {
  const dispatch = useDispatch();
  const { totalPrice, products } = useSelector((state) => state.cart);

  console.log(products.length, "jiji");
  const handleRemoveCartProducts = () => {
    dispatch(removeAllFromCart());
  };

  return (
    <StyledCartIndicator>
      <CartValue
        singleProduct={products.length === 1 ? "true" : "false"}
        className="cart-value"
      >
        <BsCart4
          fontSize={"1.5rem"}
          color="#9c1dae"
        />
        <span>${totalPrice.toFixed(2)}</span>
      </CartValue>
      {products.length > 1 && (
        <button onClick={handleRemoveCartProducts}>X</button>
      )}
    </StyledCartIndicator>
  );
};

export default CartIndicator;
