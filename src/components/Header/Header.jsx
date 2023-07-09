import { styled } from "styled-components";

import { GiShoppingBag } from "react-icons/gi";

import CartIndicator from "./CartIndicator/CartIndicator";

const StyledHeader = styled.header`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .app-icon {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: rgb(129, 1, 147);
    background: linear-gradient(
      286deg,
      rgba(129, 1, 147, 1) 0%,
      rgba(189, 120, 211, 1) 100%
    );
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="app-icon">
        <GiShoppingBag
          fontSize={"3rem"}
          color="#fff"
        />
      </div>
      <CartIndicator />
    </StyledHeader>
  );
};

export default Header;
