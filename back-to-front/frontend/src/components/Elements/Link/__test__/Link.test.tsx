import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "..";

test("should render link", () => {
  const testText = "てすとボタン";
  const { getByText } = render(
    <BrowserRouter>
      <Link to=".">
        <p>{testText}</p>
        <span>サンプルページ</span>
      </Link>
    </BrowserRouter>
  );
  expect(getByText(testText)).toBeInTheDocument();
});
