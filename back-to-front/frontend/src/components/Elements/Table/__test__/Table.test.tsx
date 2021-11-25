import { render } from "@testing-library/react";
import { Link } from "components/Elements/Link";
import { BrowserRouter } from "react-router-dom";
import { Table } from "..";

test("should render table", () => {
  interface TestData {
    id: string;
    hoge: string;
    huge: string;
  }
  const data: TestData[] = [
    {
      id: "testId",
      hoge: "hogehoge",
      huge: "hugetest",
    },
    {
      id: "testId",
      hoge: "hoge2",
      huge: "2huge",
    },
  ];
  const { getAllByText } = render(
    <Table<TestData>
      data={data}
      columns={[
        { title: "id", field: "id" },
        { title: "タイトル", field: "huge" },
        {
          title: "",
          field: "id",
          Cell({ entry: { id } }) {
            return (
              <BrowserRouter>
                <Link to={`./${id}`}>詳細</Link>
              </BrowserRouter>
            );
          },
        },
      ]}
    />
  );
  expect(getAllByText("id")[0]).toBeInTheDocument();
  expect(getAllByText("タイトル")[0]).toBeInTheDocument();
  expect(getAllByText("詳細")[0]).toBeInTheDocument();
});
