import { Routes, Route } from 'react-router-dom';
import Overview from '@/components/dashboard/Overview';
import { Login } from '@/components/auth/Login';
import { Button } from '@/components/ui/button';
import { AuthService } from './auth-services/clients.service';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <div className="flex flex-col items-center justify-center py-4 space-y-6">
            <span className="text-xl font-bold flex items-center gap-2">
              <img src="/icon_32x32.svg" className="size-7" alt="Logo" />{' '}
              <h2>Sign in</h2>{' '}
            </span>
            <div className="flex md:flex-row flex-col gap-4">
              <Button
                className="bg-foreground text-background"
                onClick={() => AuthService.googleSign()}
              >
                Continue with Google
              </Button>
              <Button
                className="bg-foreground text-background"
                onClick={() => AuthService.githubSign()}
              >
                Continue with GitHub
              </Button>
            </div>
          </div>
        }
      />
      <Route path="/dashboard" element={<Overview />} />
    </Routes>
  );
};
