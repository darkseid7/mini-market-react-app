import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

import { media } from "../../../../styled-components/Global";
import ItemQuantity from "../../../shared/ItemQuantity/ItemQuantity";
import ProductInfo from "../../../shared/ProductInfo/ProductInfo";

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
      ${media.phone} {
        border: 1px solid #f2e8f3;
        box-shadow: none;
      }
    `}

  .item-quantity {
    position: absolute;
    top: 4px;
    left: 4px;
  }

  .product-image {
    a {
      img {
        width: 100%;
      }
    }
  }

  .product-info {
    display: none;
  }

  ${media.phone} {
    .product-image {
      text-align: center;

      a {
        img {
          max-width: 50%;
        }
      }
    }

    .product-info {
      padding: 1rem;
      display: block;
      border-top: 1px solid #f2e8f3;
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
      <div className="product-image">
        <a>
          <img
            src={image}
            alt={name}
          />
        </a>
      </div>
      <div className="product-info">
        <ProductInfo
          id={id}
          image={image}
          name={name}
          price={price}
          description={description}
        />
      </div>
    </StyledProduct>
  );
};

export default Product;
