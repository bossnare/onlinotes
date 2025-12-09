import { Search, BellIcon, Layers, Tags } from 'lucide-react';
// import { NavLink } from 'react-router-dom';

export function NavTab() {
  return (
    <>
      <li>
        <button className="flex items-center w-full gap-2 px-2 font-semibold text-white rounded-md cursor-pointer bg-zinc-900 md:px-3 h-9">
          <Layers className="md:size-5" />{' '}
          <span className="hidden md:block">Overview</span>
        </button>
      </li>
      <li>
        <button className="flex items-center w-full gap-2 px-2 font-medium cursor-pointer md:px-3 md:hover:opacity-80 text-zinc-400 h-9">
          <Search className="md:size-5" />{' '}
          <span className="hidden md:block">Search</span>
        </button>
      </li>
      <li>
        <button className="flex items-center w-full gap-2 px-2 font-medium cursor-pointer md:px-3 md:hover:opacity-80 text-zinc-400 h-9">
          <BellIcon className="md:size-5" />{' '}
          <span className="hidden md:block">Notifications</span>
        </button>
      </li>
      <li>
        <button className="flex items-center w-full gap-2 px-2 font-medium cursor-pointer md:px-3 md:hover:opacity-80 text-zinc-400 h-9">
          <Tags className="md:size-5" />{' '}
          <span className="hidden md:block">Tags</span>
        </button>
      </li>
    </>
  );
}
