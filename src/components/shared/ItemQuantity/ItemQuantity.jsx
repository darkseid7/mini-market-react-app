import styled from "styled-components";

const StyledItemQuantity = styled.div`
  width: ${(props) => props.width + "px" || "37px"};
  height: ${(props) => props.width + "px" || "37px"};
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9c1dae;
  border-radius: 50%;
  color: #ffffff;
`;

const ItemQuantity = ({ children, width }) => {
  return (
    <StyledItemQuantity
      data-testid="item-quantity"
      width={width}
    >
      <span>{children}</span>
    </StyledItemQuantity>
  );
};

export default ItemQuantity;
