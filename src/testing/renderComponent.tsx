import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderResult } from '@testing-library/react';
import { AxiosError } from 'axios';
import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      retry: false,
      onError: error => {
        console.error('Network request to:', (error as AxiosError).config?.url);
      },
    },
  },
});

const renderComponent = (componentTree: ReactNode): RenderResult =>
  render(
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <QueryClientProvider client={queryClient}>
          {componentTree}
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>,
  );

export default renderComponent;
