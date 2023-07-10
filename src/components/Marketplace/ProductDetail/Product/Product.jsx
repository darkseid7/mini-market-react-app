import styled from "styled-components";
import { useSelector } from "react-redux";

import ItemQuantity from "../../../shared/ItemQuantity/ItemQuantity";
import ProductInfo from "../../../shared/ProductInfo/ProductInfo";

const StyledProduct = styled.div`
  position: relative;

  .product-quantity {
    position: absolute;
    top: 4px;
    left: 4px;
  }

  .product-image {
    width: 100%;
    text-align: center;

    img {
      max-width: 70%;
      object-fit: cover;
      overflow: hidden;
    }
  }

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

  .product-description {
    padding: 0.5rem 0;
    border-top: 1px solid #efdef0;
    border-bottom: 1px solid #efdef0;
    font-size: 1rem;
    font-weight: 300;
  }
`;

const Product = ({ selectedProduct }) => {
  const cart = useSelector((state) => state.cart);

  if (selectedProduct) {
    const { id, name, image, price, description } = selectedProduct;
    const quantityInCart = cart.products.find((p) => p.id === id)?.quantity;
    return (
      <StyledProduct>
        {quantityInCart && (
          <div className="product-quantity">
            <ItemQuantity width={37}>{quantityInCart}</ItemQuantity>
          </div>
        )}

        <div className="product-image">
          <img
            src={image}
            alt={name}
          />
        </div>
        <ProductInfo
          id={id}
          name={name}
          image={image}
          price={price}
          description={description}
        />
      </StyledProduct>
    );
  }

  return <p>Please choose a product on the left</p>;
};

export default Product;
