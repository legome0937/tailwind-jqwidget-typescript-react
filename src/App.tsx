import React, { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import SuspenseFallback from './components/SuspenseFallback';
import Middlewares from './middleware/Middlewares';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import AppRoutes from './routes';

const App: FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Middlewares>
        <BrowserRouter>
          <Suspense fallback={<SuspenseFallback />}>
            <AppRoutes />
          </Suspense>
        </BrowserRouter>
      </Middlewares>
    </ErrorBoundary>
  );
};

export default App;
