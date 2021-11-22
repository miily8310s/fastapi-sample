import { QueryClientProvider, QueryClient } from "react-query";
// import { Sample } from "./features/sample/components/Sample";
import { ArticleList } from "./features/articles/components/ArticleList";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      {/* <Sample /> */}
      <ArticleList />
    </QueryClientProvider>
  );
}

export default App;
