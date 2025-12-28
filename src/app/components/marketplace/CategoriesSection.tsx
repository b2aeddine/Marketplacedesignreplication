import React from 'react';
import { CategoryCard } from "./CategoryCard";

function Frame5() {
  return (
    <div className="bg-[#fea38e] content-stretch flex items-center justify-center px-4 md:px-[27px] py-3 md:py-[21px] relative rounded-[30px] cursor-pointer">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f8f5f0] text-[14px] md:text-[16px] text-nowrap tracking-[-0.32px]">View All Categories</p>
    </div>
  );
}

function CategoriesHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4" data-name="Categories">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative text-[clamp(32px,5vw,48px)] text-black text-nowrap tracking-[-1.92px]">Categories</p>
      <Frame5 />
    </div>
  );
}

export function CategoriesSection() {
  return (
    <div className="content-stretch flex flex-col gap-8 md:gap-[64px] items-center justify-center overflow-clip px-4 md:px-8 lg:px-[72px] py-8 md:py-[64px] relative shrink-0 w-full max-w-[1512px]" data-name="Partners Section">
      <CategoriesHeader />
      <div className="content-stretch flex gap-4 md:gap-[44px] items-center relative shrink-0 overflow-x-auto pb-4 w-full">
        {[...Array(6).keys()].map((_, i) => (
          <CategoryCard key={i} title="Nom de la categorie" />
        ))}
      </div>
    </div>
  );
}
