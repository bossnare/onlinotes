import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './Routes';
import { Analytics } from '@vercel/analytics/react';
import { useAuth } from './hooks/use-session';

function App() {
  const queryClient = new QueryClient();
  const { pending } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />

      {/* Auth is pending overlay */}
      {pending && (
        <div className="fixed z-100 bg-black/70 inset-0 flex items-center justify-center px-4">
          <div className="bg-muted rounded-3xl h-1/3 md:h-1/2 w-full md:w-2/3 flex items-center justify-center">
            <div className="flex w-full h-4/5 items-center justify-center flex-col gap-2 border-t border-zinc-700 p-6">
              <div className="size-8 border-3 border-foreground border-t-transparent rounded-full animate-spin"></div>
              <span className="text-muted-foreground text-lg font-semibold">
                Authentication...
              </span>
            </div>
          </div>
        </div>
      )}

      {/* vercel services */}
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;
