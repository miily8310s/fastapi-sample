import { QueryClientProvider, QueryClient } from "react-query";
import { Sample } from "./features/sample/components/Sample";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <Sample />
    </QueryClientProvider>
  );
}

export default App;
