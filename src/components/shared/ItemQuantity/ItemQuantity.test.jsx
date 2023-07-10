import { render } from "@testing-library/react";
import ItemQuantity from "./ItemQuantity";

describe("ItemQuantity", () => {
  it("renders the quantity correctly", () => {
    const { getByText } = render(<ItemQuantity>2</ItemQuantity>);
    const quantityElement = getByText("2");
    expect(quantityElement).toBeInTheDocument();
  });

  it("renders with the correct width", () => {
    const { getByTestId } = render(<ItemQuantity width={50}>2</ItemQuantity>);
    const quantityContainer = getByTestId("item-quantity");
    expect(quantityContainer).toHaveStyle("width: 50px;");
  });
});
