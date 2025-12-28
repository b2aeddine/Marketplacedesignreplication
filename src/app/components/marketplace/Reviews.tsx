import React from 'react';
import svgPaths from "../../../imports/svg-n1s2bt9r7k";
import imgFrame30 from "figma:asset/8252dff074bbf2ed399496a6b6867770170d23e9.png";
import imgFrame31 from "figma:asset/40b3aec0e9ebe12c9f96933d3bfd8b1f78255053.png";
import imgFrame32 from "figma:asset/47f132f5a5ce986409076ef1a924e3ff187e23cc.png";

function ReviewCard({ title, bgColor, textColor = "#313d4f", buttonTextColor = "#fea38e" }: { title: string, bgColor: string, textColor?: string, buttonTextColor?: string }) {
  return (
    <div className={`content-stretch flex flex-col gap-[16px] h-[352px] items-start overflow-clip px-[56px] py-[24px] relative rounded-[16px] shrink-0 w-[508px]`} style={{ backgroundColor: bgColor }} data-name="Review Card">
      <p className={`font-['DM_Sans:Medium',sans-serif] font-medium leading-[40px] min-w-full relative shrink-0 text-[${textColor}] text-[32px] tracking-[-0.32px] w-[min-content]`} style={{ fontVariationSettings: "'opsz' 14", color: textColor }}>
        {title}
      </p>
      <p className={`font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] min-w-full relative shrink-0 text-[${textColor}] text-[20px] w-[min-content]`} style={{ fontVariationSettings: "'opsz' 14", color: textColor }}>
        The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.
      </p>
      <div className="bg-[#f8f5f0] content-stretch flex h-[42px] items-center justify-center px-0 py-[7px] relative rounded-[100px] shadow-[0px_5px_6px_2px_rgba(0,0,0,0.25)] shrink-0 w-[217px]">
        <p className={`font-['DM_Sans:ExtraBold_Italic',sans-serif] font-extrabold italic leading-[normal] relative shrink-0 text-[${buttonTextColor}] text-[20px] text-center text-nowrap`} style={{ fontVariationSettings: "'opsz' 14", color: buttonTextColor }}>
          S’inscrire
        </p>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Title">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Rejoignez `}</p>
        <div className="relative rounded-[16px] shrink-0 size-[64px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgFrame30} />
        </div>
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`les 3000 createurs `}</p>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
        <div className="absolute h-[61px] left-[328px] top-[12px] w-[417px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 417 61">
            <path d={svgPaths.p3361cc80} fill="var(--fill-0, #FEA38E)" id="Vector" />
          </svg>
        </div>
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          qui
        </p>
        <div className="relative rounded-[16px] shrink-0 size-[64px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgFrame31} />
        </div>
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          utilise notre plateforme
        </p>
        <div className="relative rounded-[16px] shrink-0 size-[64px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgFrame32} />
        </div>
      </div>
    </div>
  );
}

function IconButtons() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Icon Buttons">
      <div className="relative rounded-[40px] shrink-0" data-name="Icon Button">
        <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[inherit]">
          <div className="relative shrink-0 size-[24px]" data-name="arrow-narrow-left">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="arrow-narrow-left">
                <path d={svgPaths.pd646200} id="Icon" stroke="var(--stroke-0, #FEA38E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#fea38e] border-solid inset-0 pointer-events-none rounded-[40px]" />
      </div>
      <div className="bg-[#fea38e] content-stretch flex items-start overflow-clip p-[8px] relative rounded-[40px] shrink-0" data-name="Icon Button">
        <div className="relative shrink-0 size-[24px]" data-name="arrow-narrow-right">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="arrow-narrow-right">
              <path d={svgPaths.p31f1e900} id="Icon" stroke="var(--stroke-0, #F8F5F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <div className="h-[1043px] relative shrink-0 w-full" data-name="Review Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start px-[160px] py-[64px] relative size-full">
          <Title1 />
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] w-[922px] text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
              Commence dés maintenant !!!
            </p>
            <div className="h-[12px] relative shrink-0 w-[496px]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 496 12">
                <path d={svgPaths.p36179980} fill="var(--fill-0, #FEA38E)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1272px]" data-name="Subtitle & Icon Buttons">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[32px] w-[416px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Que voulez-vous faire sur collabmarket :
            </p>
            <IconButtons />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 overflow-x-auto w-full" data-name="Cards">
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0 pb-4">
              <ReviewCard title="Vendre des services" bgColor="rgba(254,163,142,0.8)" />
              <ReviewCard title="Trouver des " bgColor="#ffadf2" textColor="#1f392c" />
              <ReviewCard title="Monetiser son contenue" bgColor="rgba(254,163,142,0.8)" />
              <ReviewCard title="Monetiser son contenue" bgColor="#ffadf2" textColor="#1f392c" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
