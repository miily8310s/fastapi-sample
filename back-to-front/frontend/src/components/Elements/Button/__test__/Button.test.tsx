import { render } from "@testing-library/react";
import { Button } from "..";

test("should render button", () => {
  const testText = "てすとボタン";
  const { getByText } = render(<Button type="button">{testText}</Button>);
  expect(getByText(testText)).toBeInTheDocument();
});
