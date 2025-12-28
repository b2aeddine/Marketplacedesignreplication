import React from 'react';
import svgPaths from "../../../imports/svg-n1s2bt9r7k";

function Logo2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo - #3">
      <p className="[grid-area:1_/_1] font-['DM_Sans:Bold',sans-serif] font-bold leading-[31.099px] ml-[46.6px] mt-[3.66px] relative text-[#170f49] text-[29.463px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Logo
      </p>
      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
        <div className="[grid-area:1_/_1] h-[38.151px] ml-0 mt-0 relative w-[35.756px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7558 38.1514">
            <g id="Group 39518">
              <path d={svgPaths.p142d2900} fill="var(--fill-0, #FEA38E)" id="Rectangle 4483" />
              <path d={svgPaths.p19da5000} fill="var(--fill-0, #4CBFFF)" id="Rectangle 4484" />
              <path d={svgPaths.p44a3400} fill="var(--fill-0, #702DFF)" id="Rectangle 4485" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function SocialMediaContainer() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0" data-name="Social Media Container">
      <div className="h-[19px] relative shrink-0 w-[11px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 19">
          <path d={svgPaths.p20b41a00} fill="var(--fill-0, #FEA38E)" id="Facebook" />
        </svg>
      </div>
      <div className="h-[15px] relative shrink-0 w-[19px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 15">
          <path d={svgPaths.p36775500} fill="var(--fill-0, #FEA38E)" id="Twitter" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[19px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgPaths.p1c699180} fill="var(--fill-0, #FEA38E)" id="Instagram" />
        </svg>
      </div>
      <div className="h-[18px] relative shrink-0 w-[19px]">
        <div className="absolute inset-[4.58%_0.79%_0.19%_4.47%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.1429">
            <path d={svgPaths.p2b9b7100} fill="var(--fill-0, #FEA38E)" id="LinkedIn" />
          </svg>
        </div>
      </div>
      <div className="h-[15px] relative shrink-0 w-[21px]">
        <div className="absolute inset-[2.64%_1.19%_4.04%_4.52%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8 13.9966">
            <path d={svgPaths.p282ebb0} fill="var(--fill-0, #FEA38E)" id="YouTube" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FooterLink({ text }: { text: string }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          {text}
        </p>
      </div>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start" data-name="Footer Column">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#170f49] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        {title}
      </p>
      <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0" data-name="Footer Links">
        {links.map((link, i) => <FooterLink key={i} text={link} />)}
      </div>
    </div>
  );
}

function ContactLink({ iconPath, text, iconViewBox, iconSize }: { iconPath: string, text: string, iconViewBox: string, iconSize: string }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Line Rounded/Icon">
        <div className="absolute inset-0 flex items-center justify-center">
           <svg className="block" style={{ width: iconSize, height: iconSize }} fill="none" preserveAspectRatio="none" viewBox={iconViewBox}>
             <path d={iconPath} stroke="var(--stroke-0, #170F49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
           </svg>
        </div>
      </div>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-[#f8f5f0] h-[541px] overflow-clip relative w-full" data-name="Footer v1">
      <div className="absolute flex h-0 items-center justify-center left-0 top-0 w-full">
        <div className="flex-none rotate-[180deg] w-full">
          <div className="h-0 relative w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
                <line id="Divider" stroke="var(--stroke-0, #EFF0F7)" x2="1440" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[99px] top-[120px]" data-name="24px">
        <Logo2 />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#6f6c90] text-[18px] w-[310.356px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
        </p>
        <SocialMediaContainer />
      </div>

      <div className="absolute h-0 left-[99px] top-[461.76px] w-[1241px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1241 1">
            <line id="Line 135" stroke="var(--stroke-0, #D9DBE9)" x2="1241" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      <div className="absolute left-[490px] top-[120px]">
        <FooterColumn title="Product" links={["Features", "Pricing", "Case studies", "Reviews", "Updates"]} />
      </div>
      
      <div className="absolute left-[693px] top-[120px]">
        <FooterColumn title="Company" links={["About", "Contact us", "Careers", "Culture", "Blog"]} />
      </div>

      <div className="absolute left-[882px] top-[120px]">
        <FooterColumn title="Support" links={["Getting started", "Help center", "Server status", "Report a bug", "Chat support"]} />
      </div>

      <div className="absolute left-[1113px] top-[120px] flex flex-col gap-[24px]">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#170f49] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Contacts us
        </p>
        <div className="flex flex-col gap-[18px]">
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[-5.6%_-4.2%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0667 13.9">
                            <path d={svgPaths.p1ee39700} stroke="var(--stroke-0, #170F49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                            <path d={svgPaths.p2abb4100} stroke="var(--stroke-0, #170F49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                        </svg>
                    </div>
                </div>
                <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    contact@company.com
                </p>
            </div>
            
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[-4.2%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0684 18.0667">
                            <path d={svgPaths.p14698000} stroke="var(--stroke-0, #170F49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                        </svg>
                    </div>
                </div>
                <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    (414) 687 - 5892
                </p>
            </div>

            <div className="content-stretch flex gap-[8px] items-start leading-[0]">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] ml-0 mt-[5.7px] overflow-clip relative size-[20px]">
                        <div className="absolute inset-[-4.2%_-5.1%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1215 18.0667">
                                <path d={svgPaths.p3b0b1200} stroke="var(--stroke-0, #170F49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                                <path d={svgPaths.p361d3180} stroke="var(--stroke-0, #170F49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#6f6c90] text-[18px] w-[197.617px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="mb-0">794 Mcallister St</p>
                    <p>San Francisco, 94102</p>
                </div>
            </div>
        </div>
      </div>

      <div className="absolute font-['DM_Sans:Regular',sans-serif] font-normal text-[#6f6c90] text-nowrap left-[109.4px] top-[486.86px] w-[1241px] flex justify-between items-center">
        <p className="leading-[30px] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Copyright © 2022 BRIX Templates
        </p>
        <p className="leading-[30px] text-[18px] text-right" style={{ fontVariationSettings: "'opsz' 14" }}>
          <span style={{ fontVariationSettings: "'opsz' 14" }}>{`All Rights Reserved | `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#fea38e] underline cursor-pointer" style={{ fontVariationSettings: "'opsz' 14" }}>
            Terms and Conditions
          </span>
          <span style={{ fontVariationSettings: "'opsz' 14" }}>{` | `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#fea38e] underline cursor-pointer" style={{ fontVariationSettings: "'opsz' 14" }}>
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
}
