import icon from '@/assets/icon.svg';

export function HomeScreenLoader({ raison }: { raison?: boolean }) {
  if (!raison) return null;

  return (
    <div className="inset-0 flex items-center justify-center px-4 min-h-dvh z-100">
      <div className="relative flex items-center justify-center p-1 rounded-full bg-primary/20 md:size-16 size-20">
        <div
          id="home-screen"
          className="overflow-hidden rounded-full size-full"
        >
          <img src={icon} alt="logo_icon" className="size-full" />
        </div>
        <span className="absolute border-4 border-transparent rounded-full border-t-primary animate-spin size-full"></span>
      </div>
    </div>
  );
}
