import React from 'react';
import imgImage25 from "@/assets/59ba0d40ae079fb4994abba251d7610744b0f8db.png";

interface CategoryCardProps {
  title?: string;
  image?: string;
}

export function CategoryCard({ title = "Nom de la categorie", image = imgImage25 }: CategoryCardProps) {
  return (
    <div className="h-[202px] relative shrink-0 w-[180px]" data-name="Component 1">
      <div className="absolute bg-gradient-to-b from-[rgba(254,163,142,0)] inset-[24.75%_0_0_0] rounded-[30px] to-[rgba(254,163,142,0.7)]" />
      <div className="absolute inset-[0_22.22%_50.5%_22.22%]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={image} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[74.26%_3.89%_14.85%_2.78%] leading-[normal] not-italic text-[18px] text-black text-nowrap tracking-[-0.36px]">
        {title}
      </p>
    </div>
  );
}
