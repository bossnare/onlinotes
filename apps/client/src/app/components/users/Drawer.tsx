import { cn } from '@/app/lib/utils';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { IconCheck } from '@tabler/icons-react';
import { useSearchParams } from 'react-router-dom';

export function FilterDrawer({
  isOpen,
  setIsOpen,
}: {
  isOpen?: boolean;
  setIsOpen: () => void;
}) {
  const sortLabel = [
    { id: 1, label: 'date', sort: 'createdAt', order: 'desc' },
    { id: 2, label: 'title', sort: 'title', order: 'asc' },
    { id: 3, label: 'update', sort: 'updatedAt', order: 'desc' },
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const activeSort = searchParams.get('sort') ?? 'createdAt';

  const setFilter = (next: Record<string, string>) => {
    setSearchParams(
      (prev) => ({
        ...Object.fromEntries(prev),
        ...next,
      }),
      {
        replace: true,
      }
    );
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="dark:bg-muted rounded-t-3xl">
        <div className="w-full max-w-md mx-auto">
          <DrawerHeader>
            <DrawerTitle className="text-[20px]">Sort notes</DrawerTitle>
            {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
          </DrawerHeader>
          <div className="pb-8">
            <ul className="space-y-1">
              {sortLabel.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() =>
                      setFilter({
                        sort: `${s.sort}`,
                        order: `${s.order}`,
                        drawer: 'undefined',
                      })
                    }
                    className={cn(
                      activeSort === s.sort ? 'text-chart-2' : '',
                      'flex items-center justify-between w-full p-4 cursor-pointer active:bg-muted-foreground/30'
                    )}
                  >
                    <span className="text-lg font-medium">By {s.label}</span>

                    {activeSort === s.sort && (
                      <span>
                        <IconCheck className="stroke-3" />
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
