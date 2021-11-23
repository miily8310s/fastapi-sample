import { ReactElement } from "react";

interface TableColumn<DataType> {
  title: string;
  field: keyof DataType;
  Cell?({ entry }: { entry: DataType }): ReactElement;
}

interface TableProps<DataType> {
  data: DataType[];
  columns: TableColumn<DataType>[];
}

export const Table = <DataType extends { id: number }>({
  data,
  columns,
}: TableProps<DataType>) => {
  if (!data?.length) {
    return (
      <div>
        <h3>データがありません</h3>
      </div>
    );
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={`${column.title}_${index}`}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((entry, entryIndex) => (
            <tr key={`${entry.id}_${entryIndex}`}>
              {columns.map(({ Cell, title, field }, columnIndex) => (
                <td key={`${title}_${columnIndex}`}>
                  {Cell ? <Cell entry={entry} /> : entry[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
