import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

import ItemQuantity from "../../../shared/ItemQuantity";

const StyledProduct = styled.li`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #f2e8f3;
  cursor: pointer;

  ${(props) =>
    props.isSelected &&
    css`
      border: 1px solid #9c1dae;
      box-shadow: rgba(156, 29, 174, 0.3) 0px 0px 2px 2px;
    `}

  .item-quantity {
    position: absolute;
    top: 4px;
    left: 4px;
  }

  a {
    img {
      width: 100%;
    }
  }
`;

const Product = ({
  id,
  image,
  name,
  price,
  description,
  onProductSelect,
  selectedProduct,
}) => {
  const cart = useSelector((state) => state.cart);
  const quantityInCart = cart.products.find((p) => p.id === id)?.quantity;

  const handleProductClick = () => {
    onProductSelect({ id, image, name, price, description });
  };

  return (
    <StyledProduct
      isSelected={selectedProduct?.id === id}
      onClick={handleProductClick}
    >
      {quantityInCart && (
        <div className="item-quantity">
          <ItemQuantity width={28}>{quantityInCart}</ItemQuantity>
        </div>
      )}
      <a>
        <img
          src={image}
          alt={name}
        />
      </a>
    </StyledProduct>
  );
};

export default Product;
