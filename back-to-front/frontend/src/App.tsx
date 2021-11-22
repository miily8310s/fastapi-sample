import { QueryClientProvider, QueryClient } from "react-query";
import { Sample } from "./features/sample/components/Sample";
import { ArticleList } from "./features/articles/components/ArticleList";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <Router>
        <Routes>
          <Route path="/" element={<ArticleList />}>
            {/* <Route path="article">
            <Route path=":articleId" element={<Team />} />
          </Route> */}
          </Route>
          <Route path="*" element={<Sample />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
