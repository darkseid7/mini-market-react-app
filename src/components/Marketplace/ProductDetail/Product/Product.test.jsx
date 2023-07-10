import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Product from "./Product";

const mockStore = configureStore([]);

describe("Product", () => {
  let store;
  let component;
  let selectedProduct;

  beforeEach(() => {
    selectedProduct = {
      id: 1,
      name: "Product Name",
      price: 9.99,
      description: "Product description",
    };
    store = mockStore({
      cart: {
        products: [
          { id: 1, name: "Product 1", quantity: 2 },
          { id: 2, name: "Product 2", quantity: 1 },
        ],
      },
    });
    component = render(
      <Provider store={store}>
        <Product selectedProduct={selectedProduct} />
      </Provider>
    );
  });

  it("renders the product with quantity when it is in the cart", () => {
    const productQuantity = component.getByText("2");
    expect(productQuantity).toBeInTheDocument();
  });

  it("renders the product information when a product is selected", () => {
    const productName = component.getByText("Product Name");
    expect(productName).toBeInTheDocument();

    const productPrice = component.getByText("• $9.99");
    expect(productPrice).toBeInTheDocument();

    const productDescription = component.getByText("Product description");
    expect(productDescription).toBeInTheDocument();
  });

  it("renders the message when no product is selected", () => {
    component.rerender(
      <Provider store={store}>
        <Product selectedProduct={null} />
      </Provider>
    );

    const message = component.getByText("Please choose a product on the left");
    expect(message).toBeInTheDocument();
  });
});
