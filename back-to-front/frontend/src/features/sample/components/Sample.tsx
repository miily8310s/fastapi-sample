import { useSample } from "../api/getSample";

export const Sample = () => {
  const { isLoading, data } = useSample();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>Not Data</p>;
  }
  return <div>{data.message}</div>;
};
