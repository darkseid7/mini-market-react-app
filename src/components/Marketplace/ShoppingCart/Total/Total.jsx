import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledTotal = styled.div`
  text-align: end;
  span {
    font-size: 1.2rem;
    color: #9e9e9e;
    font-weight: bold;

    &.total {
      color: #9c1dae;
    }
  }
`;

const Total = () => {
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    <StyledTotal>
      <span> Total: </span>
      <span className="total">${totalPrice.toFixed(2)}</span>
    </StyledTotal>
  );
};

export default Total;
