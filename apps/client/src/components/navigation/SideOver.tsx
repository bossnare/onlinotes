import { MiniProfile } from '@/components/users/MiniProfile';
import { X } from 'lucide-react';
import { ButtonIcon, Button } from '../ui/button';
import { Overlay } from './Overlay';
import { cn } from '@/lib/utils';
import { supabase } from '@/services/auth-client.service';

export const SideOver = ({
  openSideOver,
  toggleOpenSideOver,
}: {
  openSideOver: boolean;
  toggleOpenSideOver: () => void;
}) => {
  return (
    <>
      <Overlay
        onClick={toggleOpenSideOver}
        className="hidden z-199 md:block"
        conditionValue={openSideOver}
      />

      <nav
        className={cn(
          openSideOver ? 'translate-x-0' : 'translate-x-full',
          'fixed inset-y-0 right-0 w-1/4 hidden md:flex flex-col transition-transform ease-in-out duration-200 px-3 py-2 border-l z-200 bg-sidebar text-sidebar-foreground border-input'
        )}
      >
        <MiniProfile
          btnAction={
            <ButtonIcon onClick={toggleOpenSideOver}>
              <X />
            </ButtonIcon>
          }
        />
        <div className="flex flex-col gap-3 grow">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full h-10 rounded-md bg-muted"></div>
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
        </div>
      </nav>
    </>
  );
};
