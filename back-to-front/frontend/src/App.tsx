import { QueryClientProvider, QueryClient } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "routes";
import { Button } from "components/Elements/Button";

const client = new QueryClient();
const ErrorFallback = () => {
  return (
    <div>
      <h2>問題が発生しました</h2>
      <Button onClick={() => window.location.reload()}>再ロードする</Button>
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools />
        <Router>
          <AppRoutes />
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
