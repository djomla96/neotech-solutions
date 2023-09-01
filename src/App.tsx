import { QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';

import { MainLayout } from 'App.styled';
import queryClient from 'config/queryClient';
import Routes from 'routes/Routes';

import 'config/i18n';

function App() {
  return (
    <Suspense fallback={null}>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Routes />
        </MainLayout>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
