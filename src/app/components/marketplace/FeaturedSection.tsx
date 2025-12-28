import React from 'react';
import svgPaths from "../../../imports/svg-n1s2bt9r7k";
import { ServiceCard } from "./ServiceCard";

function Frame26() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center p-[10px] relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[clamp(28px,5vw,56px)] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
        Parcourez les createurs en vedettes!
      </p>
      <div className="absolute hidden lg:flex h-[76.678px] items-center justify-center left-[571.5px] top-[47.99px] w-[410.729px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[3.307deg]">
          <div className="h-[53.212px] relative w-[408.34px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 408.34 53.2121">
              <path d={svgPaths.p328b95f0} fill="var(--fill-0, #FEA38E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedSection() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-center p-[10px] relative shrink-0 w-full max-w-[1357px] px-4">
      <Frame26 />
      <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[40px] xl:gap-[85px] items-center relative shrink-0 w-full justify-center">
        {[...Array(3).keys()].map((_, i) => (
          <ServiceCard key={i} />
        ))}
      </div>
    </div>
  );
}
