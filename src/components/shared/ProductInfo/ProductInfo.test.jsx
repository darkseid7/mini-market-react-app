import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { removeFromCart, addToCart } from "../../../redux/cartSlice";
import ProductInfo from "./ProductInfo";

const mockStore = configureStore([]);

describe("ProductInfo", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    component = render(
      <Provider store={store}>
        <ProductInfo
          id={1}
          image="product-image.jpg"
          name="Product Name"
          price={9.99}
          description="Product description"
        />
      </Provider>
    );
  });

  it("renders the product information correctly", () => {
    const productName = component.getByText("Product Name");
    expect(productName).toBeInTheDocument();

    const productPrice = component.getByText("• $9.99");
    expect(productPrice).toBeInTheDocument();

    const productDescription = component.getByText("Product description");
    expect(productDescription).toBeInTheDocument();
  });

  it("dispatches the addToCart action when the add button is clicked", () => {
    const addButton = component.getByText("+");
    fireEvent.click(addButton);

    const expectedAction = addToCart({
      id: 1,
      image: "product-image.jpg",
      name: "Product Name",
      price: 9.99,
      description: "Product description",
    });

    expect(store.getActions()).toContainEqual(expectedAction);
  });

  it("dispatches the removeFromCart action when the remove button is clicked", () => {
    const removeButton = component.getByText("-");
    fireEvent.click(removeButton);

    const expectedAction = removeFromCart({
      productId: 1,
      quantityToRemove: 1,
    });

    expect(store.getActions()).toContainEqual(expectedAction);
  });
});
