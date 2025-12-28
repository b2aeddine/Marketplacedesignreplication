import React from 'react';
import svgPaths from "../../../imports/svg-n1s2bt9r7k";

function Logo() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0001 32">
        <g clipPath="url(#clip0_3_1252)" id="Logo">
          <path d={svgPaths.p2a898800} fill="var(--fill-0, #FFADF2)" fillOpacity="0.5" id="Rectangle 31" />
          <path d={svgPaths.pa67ee80} fill="var(--fill-0, #FFADF2)" fillOpacity="0.8" id="Rectangle 30" />
          <path d={svgPaths.p3a348360} fill="var(--fill-0, #FF60E6)" id="Rectangle 29" />
        </g>
        <defs>
          <clipPath id="clip0_3_1252">
            <rect fill="white" height="32" width="32.0001" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo">
      <Logo />
      <p className="font-['Kulim_Park:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1f392c] text-[24px] text-nowrap">The Creator</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex font-['SF_Pro_Text:Medium',sans-serif] gap-[32px] items-start leading-[24px] not-italic relative shrink-0 text-[#1f392c] text-[20px] text-nowrap" data-name="Menu">
      <p className="relative shrink-0">Partners</p>
      <p className="relative shrink-0">How we Work</p>
      <p className="relative shrink-0">Review</p>
      <p className="relative shrink-0">Charity</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fea38e] content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f8f5f0] text-[18px] text-center text-nowrap tracking-[0.18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">S’inscrire</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="h-0 relative shrink-0 w-[1122px]" data-name="Title">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1122 1">
          <g id="Title">
            <line id="Line 4" stroke="var(--stroke-0, black)" strokeOpacity="0.2" x2="1122" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Menu1() {
  return (
    <div className="content-stretch flex font-['SF_Pro_Text:Medium',sans-serif] gap-[32px] items-start leading-[24px] not-italic relative shrink-0 text-[#1f392c] text-[20px] text-nowrap" data-name="Menu">
      <p className="relative shrink-0">Partners</p>
      <p className="relative shrink-0">How we Work</p>
      <p className="relative shrink-0">Review</p>
      <p className="relative shrink-0">Charity</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[50px] items-center relative shrink-0">
      {[...Array(2).keys()].map((_, i) => (
        <Menu1 key={i} />
      ))}
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[1122px]">
      <Title />
      <Frame20 />
      <div className="h-0 relative shrink-0 w-[1021px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1021 1">
            <line id="Line 5" stroke="var(--stroke-0, black)" strokeOpacity="0.2" x2="1021" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[211px] items-center relative shrink-0 w-full justify-between">
      <Logo1 />
      <Menu />
      <Button />
    </div>
  );
}

export function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame22 />
    </div>
  );
}
