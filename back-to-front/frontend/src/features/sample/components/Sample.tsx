import { useSample } from "../api/getSample";

export const Sample = () => {
  const { isLoading, data } = useSample();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>Not Data</p>;
  }
  return (
    <>
      <h1>{data.message}</h1>
      <p>このアプリでは次のことができます</p>
      <ul>
        <li>記事一覧の確認</li>
        <li>記事の追加・編集・削除</li>
      </ul>
    </>
  );
};
