import { Plus, Settings } from 'lucide-react';
import { forwardRef } from 'react';
import { MiniProfile } from '../users/MiniProfile';
import { ButtonIcon, Button } from '../ui/button';
// import { ToggleTheme } from '../ui/toggle-theme';
import { supabase } from '@/services/auth-client.service';
import { sideBarLabel } from './navigation.label';
import { SideBarTabWrapper } from './sideBarTab';
import { NavTab } from './NavTab';
import { Logo } from '../brand/Logo';
import { Overlay } from './Overlay';
import { waitVibrate } from '@/utils/vibration';
import { useUX } from '@/contexts/UXContext';

type SidebarProps = React.HTMLAttributes<HTMLDivElement>;

export const MobileSidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ ...props }, ref) => {
    const { setIsOpenMobileSidebarFalse, isOpenMobileSidebar } = useUX();

    return (
      <>
        {/* overlay */}
        <Overlay
          className="z-40 md:hidden"
          onClick={() => {
            waitVibrate(200, 'low');
            setIsOpenMobileSidebarFalse();
          }}
          open={isOpenMobileSidebar}
        />

        <div
          {...props}
          ref={ref}
          className={`${
            isOpenMobileSidebar ? 'translate-x-0' : '-translate-x-full'
          } md:hidden transition-transform will-change-transform text-sidebar-foreground duration-200 px-4 py-2 z-50 ease-in-out w-6/7 bg-sidebar fixed inset-y-0 border-r border-sidebar-border overflow-hidden`}
        >
          <aside className={`relative size-full rounded-xl overflow-y-auto`}>
            <MiniProfile
              btnAction={
                <ButtonIcon>
                  <Settings />
                </ButtonIcon>
              }
            />
            <div className="h-1 my-4 border-t border-sidebar-border"></div>

            <ul className="flex flex-col gap-2">
              {sideBarLabel.map((s) => (
                <>
                  {s.hiddenOnMobile ? null : (
                    <li key={s.id}>
                      <SideBarTabWrapper>
                        <s.icon className="size-5" /> {s.label}
                      </SideBarTabWrapper>
                    </li>
                  )}
                </>
              ))}
            </ul>
            <div className="absolute inset-x-0 w-full px-2 bottom-2 active:bg-muted">
              <Button
                onClick={async () => await supabase.auth.signOut()}
                size="large"
                className="w-full font-normal border bg-muted text-foreground/90 border-input"
              >
                Logout
              </Button>
            </div>
          </aside>
        </div>
      </>
    );
  }
);

export const DesktopSidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className="fixed inset-y-0 z-20 hidden w-64 border-r text-sidebar-foreground bg-sidebar md:block border-sidebar-border"
      >
        <Logo className="sticky top-0 hidden w-full px-5 py-4 md:flex" />

        <aside className="relative space-y-4 px-3 w-full h-[calc(100%-8%)] overflow-y-auto scrollbar-none">
          <nav className="mt-1 rounded-md">
            <ul className="flex flex-col gap-2">
              <NavTab />
            </ul>
          </nav>

          <div className="h-1 my-2 border-t border-sidebar-border"></div>

          {/* <ToggleTheme /> */}

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 px-3 pb-2 bg-linear-to-b from-transparent via-zinc-950/20 to-zinc-950/10 dark:to-zinc-950/80 min-h-15">
            <div className="w-full active:bg-muted">
              <Button className="w-full bg-secondary text-secondary-foreground">
                <Plus /> Create new note
              </Button>
            </div>
          </div>
        </aside>
      </div>
    );
  }
);
