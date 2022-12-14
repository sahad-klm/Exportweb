import { Icon } from '@/lib/icon';
import React from 'react';
import { ButtonAdd, ButtonAddToCart } from '@/ui/button';
import { Rating } from '@/ui/rating';
import RateOfProduct from '@/ui/rate';

type Props = {
  id: React.Key;
  name: string;
  rating?: number | any;
  tags?: string;
  rate?: number | any;
  offer?: number | any;
  picture?: string | any;
};
function ProductWithTimer({
  id,
  name,
  rate,
  rating,
  tags,
  offer,
  picture,
}: Props): any {
  return (
    <div className="group/body relative flex xl:min-w-[310px] lg:min-w-full flex-1 flex-col overflow-hidden rounded-[18px] xl:w-[310px] min-w-[310px]">
      <div className="relative -z-[1] mb-[20%] flex h-[310px] max-w-full overflow-hidden rounded-[18px]">
        <img src={picture} alt="" className="min-h-full w-full object-cover" />
      </div>
      <div className="absolute bottom-4 flex w-full flex-col items-center justify-center transition-transform duration-300 group-hover/body:-translate-y-1">
        <div className="mb-2 flex w-full flex-row items-center justify-center gap-1 rounded md:mb-3">
          <div className="flex w-12 flex-col items-center justify-center rounded-md bg-white p-3">
            <p className="font-head text-lg leading-5 text-emerald-500 md:text-xl md:leading-6">
              55
            </p>
            <p className="text-body text-sm text-gray-700 md:text-base">Days</p>
          </div>
          <div className="flex w-12 flex-col items-center justify-center rounded-md bg-white p-3">
            <p className="font-head text-lg leading-5 text-emerald-500 md:text-xl md:leading-6">
              55
            </p>
            <p className="text-body text-sm text-gray-700 md:text-base">
              Hours
            </p>
          </div>
          <div className="flex w-12 flex-col items-center justify-center rounded-md bg-white p-3">
            <p className="font-head text-lg leading-5 text-emerald-500 md:text-xl md:leading-6">
              55
            </p>
            <p className="text-body text-sm text-gray-700 md:text-base">Mins</p>
          </div>
          <div className="flex w-12 flex-col items-center justify-center rounded-md bg-white p-3">
            <p className="font-head text-lg leading-5 text-emerald-500 md:text-xl md:leading-6">
              55
            </p>
            <p className="text-body text-sm text-gray-700 md:text-base">Secs</p>
          </div>
        </div>
        <div className="mx-7 rounded-[18px] bg-white shadow-lg p-3">
          <h4 className="mx-5 pb-[8px] font-head text-sm text-gray-700 transition-all duration-200 hover:text-emerald-500 md:pb-[10px] md:text-base">
            {name}
          </h4>
          <Rating rating={rating} />
          <div
            className="mx-5 mb-5 flex flex-row flex-wrap items-center gap-1 justify-between 
         "
          >
            <RateOfProduct rate={rate} offer={offer} />
            <ButtonAdd />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductWithTimer;
