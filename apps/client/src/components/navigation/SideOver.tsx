import { MiniProfile } from '@/components/users/MiniProfile';
import { cn } from '@/lib/utils';
import { supabase } from '@/services/auth-client.service';
import { X } from 'lucide-react';
import { Button, ButtonIcon } from '../ui/button';
import { sideBarLabel } from './navigation.label';
import { Overlay } from './Overlay';
import { SideBarTabWrapper } from './sideBarTab';
import { useUX } from '@/contexts/UXContext';

export const SideOver = () => {
  const { openSideOver, toggleOpenSideOver } = useUX();

  return (
    <>
      <Overlay
        onClick={toggleOpenSideOver}
        className="hidden z-199 md:block"
        open={openSideOver}
      />

      <nav
        className={cn(
          openSideOver ? 'translate-x-0' : 'translate-x-full',
          'fixed inset-y-0 right-0 md:w-1/3 lg:w-1/4 hidden md:flex flex-col transition-transform ease-in-out duration-200 px-3 pr-1 py-2 border-l z-200 bg-sidebar text-sidebar-foreground border-input'
        )}
      >
        <MiniProfile
          btnAction={
            <ButtonIcon onClick={toggleOpenSideOver}>
              <X />
            </ButtonIcon>
          }
        />
        <ul className="flex flex-col gap-2 grow">
          {sideBarLabel.map((s) => (
            <li key={s.id}>
              <SideBarTabWrapper>
                <s.icon className="size-5" /> {s.label}
              </SideBarTabWrapper>
            </li>
          ))}
          <div className="w-full mt-auto">
            <Button
              onClick={async () => await supabase.auth.signOut()}
              size="medium"
              className="w-full font-normal border bg-muted text-foreground/90 border-input"
            >
              Log out
            </Button>
          </div>
        </ul>
      </nav>
    </>
  );
};
