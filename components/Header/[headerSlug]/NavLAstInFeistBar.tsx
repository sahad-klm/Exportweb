import { lastOneInNav } from '@/lib/data';
import React from "react";


export const NavLAstInFeistBar = () => (
  <div className="ml-4 flex flex-row gap-2">
    {lastOneInNav?.map((item) => (
      <span key={item.id} className='flex items-center cursor-pointer '>
        {item.icon}
        <p className="font-body text-base font-medium text-stone-800 hover:text-emerald-500">
          {item.name}
        </p>
      </span>
    ))}
  </div>
);
export const NavLAstInFeistBar2 = () =>  (
    <div className="flex flex-row gap-1 sm:w-28 w-22 justify-end ">
      {lastOneInNav?.map((item) => (
        <React.Fragment key={item.id}>
          {(item.name === 'Wishlist' || item.name === 'Cart') && (
            <span className="flex items-center scale-125 cursor-pointer">
              {item.icon}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );

