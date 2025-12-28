import React from 'react';
import svgPaths from "../../../imports/svg-eqw8jkd85m";
import imgImageOuVideoDuServices from "@/assets/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import img from "@/assets/3fc899ea58b6508f7ebd2ba03a7b82b8b9efa9e9.png";

interface ServiceCardProps {
  serviceImage?: string;
  profileImage?: string;
  name?: string;
  city?: string;
  title?: string;
  category?: string;
  rating?: string;
  reviewCount?: number;
  price?: string;
  bio?: string;
}

export function ServiceCard({
  serviceImage = imgImageOuVideoDuServices,
  profileImage = img,
  name = "Prenom",
  city = "Ville",
  title = "nom du service",
  category = "livraison",
  rating = "4,9",
  reviewCount = 49,
  price = "10 $",
  bio = "BIO decrivez ce que vous représenter en quelque ligne"
}: ServiceCardProps) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-end px-[4px] py-[5px] relative shrink-0 w-full max-w-[389px] min-h-[383px]">
      {/* Frame7: Service Image */}
      <div className="absolute content-stretch flex gap-[10px] items-start left-0 p-[10px] top-0 w-full">
        <div className="absolute h-[179px] left-0 rounded-tl-[15px] rounded-tr-[15px] top-0 w-full" data-name="image ou video du services">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-20 pointer-events-none rounded-tl-[15px] rounded-tr-[15px] size-full" src={serviceImage} />
        </div>
        <div className="absolute h-[204px] left-0 rounded-bl-[15px] rounded-br-[15px] shadow-[29px_70px_21px_0px_rgba(0,0,0,0),19px_45px_19px_0px_rgba(0,0,0,0.01),11px_25px_16px_0px_rgba(0,0,0,0.05),5px_11px_12px_0px_rgba(0,0,0,0.09),1px_3px_7px_0px_rgba(0,0,0,0.1)] top-[179px] w-full" style={{ backgroundImage: "linear-gradient(179.769deg, rgb(254, 163, 142) 125.39%, rgb(248, 245, 240) 76.177%)" }} />
      </div>

      {/* Frame6: Content */}
      <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full">
        {/* Frame1: Profile, Title, Rating */}
        <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
          {/* PhotoDeProfil */}
          <div className="bg-white content-stretch flex items-center relative rounded-[80px] shrink-0" data-name="photo de profil">
            <div className="relative shrink-0 size-[80px]" data-name="Label">
              <div className="absolute left-[-4px] rounded-[88px] size-[88px] top-[-4px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(225deg, rgb(254, 163, 142) 0%, rgb(254, 163, 142) 37.55%, rgba(254, 163, 142, 0.5) 63.2%, rgba(254, 163, 142, 0.3) 100%)" }} />
              <div className="absolute left-[-4px] rounded-[88px] size-[88px] top-[-4px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(225deg, rgb(254, 163, 142) 0%, rgb(254, 163, 142) 37.55%, rgba(254, 163, 142, 0.5) 63.2%, rgba(254, 163, 142, 0.3) 100%)" }} />
              <div className="absolute inset-0 pointer-events-none rounded-[80px]" data-name="image pdp">
                <div className="absolute inset-0 overflow-hidden rounded-[80px]">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={profileImage} />
                </div>
                <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[80px]" />
              </div>
            </div>
          </div>
          
          {/* Frame: Title & Category */}
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 flex-1 min-w-0">
            <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[24.807px] leading-[normal] relative shrink-0 text-[#1f392c] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
              {title}
            </p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-full">{category}</p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 206 1">
                  <line id="Line 3" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="206" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="content-stretch flex gap-[3.84px] h-[24px] items-center relative shrink-0 w-[78.45px]" data-name="Rating">
            <div className="relative shrink-0 size-[15.36px]" data-name="SVG">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.36 15.36">
                <g id="SVG">
                  <path clipRule="evenodd" d={svgPaths.p2255ad80} fill="var(--fill-0, #222325)" fillRule="evenodd" id="Vector" />
                </g>
              </svg>
            </div>
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[23.04px] justify-center leading-[0] not-italic relative shrink-0 text-[#222325] text-[14.496px] w-[23.664px]">
              <p className="leading-[23.04px]">{rating}</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15.36px] justify-center leading-[0] not-italic relative shrink-0 text-[#74767e] text-[0px] w-[28.608px]">
              <p className="leading-[23.04px] text-[14.304px]">
                (<span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">{reviewCount}</span>)
              </p>
            </div>
          </div>
        </div>

        {/* Frame3: Bio */}
        <div className="content-stretch flex gap-[2px] items-start leading-[normal] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col font-semibold items-start relative shrink-0 w-[84px]">
            <p className="font-['DM_Sans:SemiBold',sans-serif] h-[24.807px] relative shrink-0 text-[#1f392c] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
              {name}
            </p>
            <p className="font-['Inter:Semi_Bold',sans-serif] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-full">{city}</p>
          </div>
          <p className="font-['Inter:Medium_Italic',sans-serif] font-medium min-h-[47px] italic relative shrink-0 text-[#3e2522] text-[12px] flex-1">{bio}</p>
        </div>

        {/* Frame5: Socials & Price */}
        <div className="content-stretch flex flex-wrap gap-4 lg:gap-8 items-end justify-between relative shrink-0 w-full">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Social Media">
            {/* Youtube */}
            <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[33px] mt-0 place-items-start relative" data-name="Youtube">
              <div className="[grid-area:1_/_1] bg-[rgba(217,217,217,0)] border-2 border-[#f1f4ef] border-solid ml-0 mt-0 rounded-[5px] size-[25px]" />
              <div className="[grid-area:1_/_1] ml-[5px] mt-[5px] overflow-clip relative size-[15px]" data-name="icon/youtube">
                <div className="absolute inset-[20.8%_8.33%]" data-name="vector">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(54, 54, 58, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 8.76123">
                      <path clipRule="evenodd" d={svgPaths.p3f80a940} fill="var(--fill-0, #36363A)" fillRule="evenodd" id="vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Instagram */}
            <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Instagram">
              <div className="[grid-area:1_/_1] bg-[rgba(217,217,217,0)] border-2 border-[#f1f4ef] border-solid ml-0 mt-0 rounded-[5px] size-[25px]" />
              <div className="[grid-area:1_/_1] ml-[5px] mt-[5px] overflow-clip relative size-[15px]" data-name="icon/instagram">
                <div className="absolute inset-[12.5%]" data-name="vector">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(54, 54, 58, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
                      <path clipRule="evenodd" d={svgPaths.p5385b00} fill="var(--fill-0, #36363A)" fillRule="evenodd" id="vector" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[25.82%_25.12%_30.73%_30.73%]" data-name="vector">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(54, 54, 58, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.62362 6.51844">
                      <path clipRule="evenodd" d={svgPaths.p3957efd0} fill="var(--fill-0, #36363A)" fillRule="evenodd" id="vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Tiktok */}
            <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[66px] mt-0 place-items-start relative" data-name="Tiktok">
              <div className="[grid-area:1_/_1] bg-[rgba(217,217,217,0)] border-2 border-[#f1f4ef] border-solid ml-0 mt-0 rounded-[5px] size-[25px]" />
              <div className="[grid-area:1_/_1] ml-[6px] mt-[6px] overflow-clip relative size-[13px]" data-name="icon/tiktok">
                <div className="absolute inset-[8.33%_13.66%]" data-name="vector">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(54, 54, 58, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.4473 10.8333">
                      <path d={svgPaths.p1b642f00} fill="var(--fill-0, #36363A)" id="vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="content-stretch flex flex-col items-end relative shrink-0 w-[165px]">
            <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[45px] leading-[normal] not-italic relative shrink-0 text-[#1f392c] text-[20px] w-full">A partir de {price}</p>
            <div className="bg-[#fea38e] content-stretch flex h-[36px] items-center justify-center relative rounded-[10px] shrink-0 w-[126px]">
              <div className="flex flex-col font-['DM_Sans:ExtraBold_Italic',sans-serif] font-extrabold italic justify-center leading-[0] relative shrink-0 text-[#f8f5f0] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[normal]">Voir les details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
