import React from 'react';
import { CategoryCard } from "./CategoryCard";

function Frame5() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fea38e] content-stretch flex items-center justify-center ml-[1080px] mt-0 px-[27px] py-[21px] relative rounded-[30px] cursor-pointer">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f8f5f0] text-[16px] text-nowrap tracking-[-0.32px]">View All Categories</p>
    </div>
  );
}

function CategoriesHeader() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Categories">
      <Frame5 />
      <p className="[grid-area:1_/_1] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] ml-0 mt-[2px] not-italic relative text-[48px] text-black text-nowrap tracking-[-1.92px]">Categories</p>
    </div>
  );
}

export function CategoriesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center overflow-clip px-[72px] py-[64px] relative shrink-0 w-[1512px]" data-name="Partners Section">
      <CategoriesHeader />
      <div className="content-stretch flex gap-[44px] items-center relative shrink-0 overflow-x-auto pb-4">
        {[...Array(6).keys()].map((_, i) => (
          <CategoryCard key={i} title="Nom de la categorie" />
        ))}
      </div>
    </div>
  );
}
