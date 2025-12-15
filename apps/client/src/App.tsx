import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { AppRoutes } from './routes/Routes';
import { useTheme } from './hooks/use-theme';

function App() {
  const queryClient = new QueryClient();
  const { theme } = useTheme();
  console.log(theme);

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />

      {/* vercel services */}
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;
