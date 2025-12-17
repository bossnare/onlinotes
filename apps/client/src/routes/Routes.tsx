import DashboardLayout from '@/app/DashboardLayout';
import Overview from '@/app/page/Overview';
import { Login } from '@/auth/page/Login';
import { HomeScreenLoader } from '@/components/HomeScreenLoader';
import { useAuth } from '@/hooks/use-auth';
import { useIsPublicRoute } from '@/hooks/useIsPublicRoute';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from './ProtectedRoutes';
import { PublicLayout } from '../auth/PublicLayout';
import { NotFound } from '@/components/not-found';

export const AppRoutes = () => {
  const { pending, session } = useAuth();
  const isPublicRoute = useIsPublicRoute();

  return (
    <>
      {pending ? (
        // is pending auth
        <HomeScreenLoader raison={isPublicRoute} />
      ) : (
        <Routes>
          {/* public */}
          <Route element={<PublicLayout session={session} />}>
            <Route path="/" element={<Login />} />
          </Route>
          {/* protected */}
          <Route element={<ProtectedRoutes session={session} />}>
            <Route path="/app" element={<DashboardLayout />}>
              <Route index element={<Overview />} />
              <Route path="search" element={<div>Search Route</div>} />
              <Route
                path="notification"
                element={<div>Notifications Route</div>}
              />
              <Route path="tags" element={<div>Tags Route</div>} />
            </Route>
          </Route>
          {/* bad route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};
