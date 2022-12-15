
import { useCategoryProductsFind } from '@/lib/helpers';
import CategorySmallBox from '@/ui/categorySmallBox';
import FilterByC_T_R from '@/ui/filterByC_T_R';
import {
  OneProductWithOffer,
} from '@/ui/OneProductWithOffer';
import Pagination from '@/ui/Pagination';
import  {
  DealsOfTheDayInCollection,
} from 'components/deals/Page';
import { AnimatePresence, m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useMemo, useState } from 'react';
import { fadeAnim } from 'utils/motion';
import Head from './Head';
import HeadingWithFilter from './headingWithFilter';
import NewProducts from './newProducts';

let PageSize = 9;
const CollationSlug = () => {
  const pathName = usePathname();
  const [filteringCount, setFilteringCount] = React.useState<any>({
    count: 15,
    filterBy: 'Best selling',
  });
  const [mouseOver, setMouseOver] = React.useState<boolean>(false);

  const name = pathName
    ?.split('/')
    .slice(2)
    .map((item) => item.toString());

  const products: any = useCategoryProductsFind(name);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageRange = firstPageIndex + PageSize;
    return products?.slice(firstPageIndex, lastPageRange);
  }, [currentPage]);

  return (
    <AnimatePresence mode="wait">
      <m.div
        initial="hide"
        animate="show"
        exit="hide"
        variants={fadeAnim}
        className="relative mx-4 mt-[100px] flex flex-col items-center justify-center lg:mt-5"
      >
        <Head headName={products[0].category} tags={products[0].tags} />
        <div className="mt-[40px] mb-7 flex w-full flex-col items-start justify-center gap-4 xl:flex-row">
          <div className=" flex w-full flex-col items-center justify-between gap-6">
            <HeadingWithFilter filteringCount={filteringCount} products={products} setFilteringCount={filteringCount}/>

            <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {currentTableData?.map(
                (
                  item: JSX.IntrinsicAttributes & {
                    id?: React.Key | undefined;
                    name?: any;
                    rating?: any;
                    tags?: string | undefined;
                    rate?: any;
                    offer?: any;
                    picture?: any;
                    bacPicture?: any;
                    mouseOver?: any;
                    setMouseOver?: any;
                    buttonStyle?: any;
                    classNameForPic?: any;
                    classNameForTotal?: any;
                  },
                ) => (
                  <OneProductWithOffer
                    mouseOver={mouseOver}
                    setMouseOver={setMouseOver}
                    key={item.id}
                    {...item}
                    buttonStyle="add"
                    classNameForTotal="xl:w-auto xl:h-auto w-[250px] h-[483px] mx-auto w-auto"
                    classNameForPic="p-4  "
                  />
                ),
              )}
            </div>
            <Pagination
              className="pagination-bar mt-4 mb-[50px] items-center"
              currentPage={currentPage}
              totalCount={Math.ceil(products.length / PageSize)}
              pageSize={PageSize}
              onPageChange={(page: any) => setCurrentPage(page)}
            />
            <DealsOfTheDayInCollection />
          </div>

          <div className="hidden w-full shrink-0 flex-col gap-10 lg:flex xl:w-min">
            <CategorySmallBox />

            <FilterByC_T_R />

            <NewProducts />

            <div className="relative z-0 flex flex-col  justify-center gap-1 overflow-hidden rounded-xl bg-cyan-200 p-12 shadow-md max-xl:h-[70vh]">
              <small className="font-body text-gray-600">Organic</small>
              <p className="font-head text-2xl leading-8">
                Save 17% on <span className="text-emerald-500">Organic</span>{' '}
                Juice
              </p>

              <img
                src="https://mailtrap.io/wp-content/uploads/2020/10/nbsp-and-HTML-Space-Challenges-and-Tricks_small-1.png"
                alt=""
                className="absolute bottom-0 -right-[30%] -z-10 h-full object-cover"
              />
            </div>
          </div>
        </div>
      </m.div>
    </AnimatePresence>
  );
};

export default CollationSlug;
