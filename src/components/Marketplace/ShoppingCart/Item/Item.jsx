import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../../redux/cartSlice";

import { useSelector } from "react-redux";

const StyledItem = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #f2e8f3;

  p {
    font-size: 1rem;
    color: #9e9e9e;
  }

  .item-container {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;

    .item-quantity {
      width: 37px;
      height: 37px;
      margin-right: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9c1dae;
      border-radius: 50%;
      color: #ffffff;
    }
  }
`;

const Item = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (product) => {
    dispatch(removeFromCart({ productId: product, quantityToRemove: 1 }));
  };

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

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
              <div className="item-quantity">
                <span>{quantity}</span>
              </div>
              <div className="">
                <img
                  src={image}
                  width={50}
                  height={60}
                  alt=""
                />
                <p>{name}</p>
                <button onClick={() => handleRemove(id)}>-</button>
                <button onClick={() => handleAdd(product)}>+</button>
              </div>
            </div>
          );
        })
      )}
    </StyledItem>
  );
};

export default Item;
