import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CartIndicator from "./CartIndicator";
import {
  removeAllFromCart,
  setShowShoppingCart,
} from "../../../redux/cartSlice";

const mockStore = configureStore([]);

describe("CartIndicator", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      cart: {
        totalPrice: 20.99,
        showShoppingCart: true,
      },
    });
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <CartIndicator />
      </Provider>
    );
  });

  it("dispatches the removeAllFromCart action when the X button is clicked", () => {
    const xButton = component.getByText("X");
    fireEvent.click(xButton);

    expect(store.dispatch).toHaveBeenCalledWith(removeAllFromCart());
  });

  it("dispatches the setShowShoppingCart action when the cart container is clicked", () => {
    const cartContainer = component.getByTestId("cart-container");
    fireEvent.click(cartContainer);

    expect(store.dispatch).toHaveBeenCalledWith(setShowShoppingCart(false));
  });
});
