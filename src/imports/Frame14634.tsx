import svgPaths from "./svg-n1s2bt9r7k";
import imgHands2 from "@/assets/5e60311268eac808eaade0b025715f79f24ade31.png";
import imgFb112 from "@/assets/75d098edacfd94c1bce6468b9eff3779ea74f979.png";
import imgRemoveBg1 from "@/assets/07b35ab1de6cca52d52120a93c6191bf7086177d.png";
import imgYtb112 from "@/assets/050a18f88ed7ea85f0983ec1fc11f43b07aed07b.png";
import imgInst112 from "@/assets/86dcefb9477f61f9ce7296bd5cfb47bd9bc77b13.png";
import imgImage25 from "@/assets/59ba0d40ae079fb4994abba251d7610744b0f8db.png";
import imgImageOuVideoDuServices from "@/assets/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgImagePdp from "@/assets/3fc899ea58b6508f7ebd2ba03a7b82b8b9efa9e9.png";
import imgWoman1 from "@/assets/3f18a1bcb3010a7cb832c06c549b570cad163eb1.png";
import imgHands3 from "@/assets/f9775a8a04adfbb6d9f112f67f6d0d93c731f708.png";
import imgLike111 from "@/assets/02a650a1a1ca32c4ad6e82400109d4d30e0ebc47.png";
import imgImage from "@/assets/c4e1c40e7c8803235b3fb411339615a2cd0704eb.png";
import imgImage1 from "@/assets/8560c92425087dc2482892462124a91a6e2561a3.png";
import imgRemoveBg3 from "@/assets/eb549fcf1ece6a1956966c10b8e089c5ab16408f.png";
import imgImage2 from "@/assets/e756a21ccab6e1b57f3af24b667128d58da9d275.png";
import imgFrame30 from "@/assets/8252dff074bbf2ed399496a6b6867770170d23e9.png";
import imgFrame31 from "@/assets/40b3aec0e9ebe12c9f96933d3bfd8b1f78255053.png";
import imgFrame32 from "@/assets/47f132f5a5ce986409076ef1a924e3ff187e23cc.png";

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

function Frame19() {
  return (
    <div className="content-stretch flex gap-[211px] items-center relative shrink-0 w-full">
      <Logo1 />
      <Menu />
      <Button />
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

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame22 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1192px]">
      <Frame24 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0.62%_80.26%_-0.88%_-9.39%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440.488 804.036">
        <g id="Group">
          <path d={svgPaths.p328e8880} fill="var(--fill-0, #FEA38E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Line() {
  return (
    <div className="absolute contents inset-[0.62%_80.26%_-0.88%_-9.39%]" data-name="Line">
      <Group />
    </div>
  );
}

function Search() {
  return (
    <div className="h-[18.008px] relative shrink-0 w-[18.007px]" data-name="search">
      <div className="absolute inset-[0_-4%_-4%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7273 18.728">
          <g id="search" opacity="0.5">
            <path clipRule="evenodd" d={svgPaths.pd731a80} fillRule="evenodd" id="Oval" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44" />
            <path d={svgPaths.p10f87bc0} id="Path" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#fea38e] content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-[24px] shrink-0" data-name="Button">
      <Search />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex items-baseline justify-between pl-[24px] pr-[8px] py-0 relative size-full">
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#d4d4d4] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[24px]">{`Que cherchez-vous ? Par exemple : story `}</p>
          </div>
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white content-stretch flex items-center pl-[16px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[567px]" data-name="Input">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Content />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0" data-name="Content">
      <div className="absolute h-[129px] left-[9.5px] top-[103px] w-[974px]" data-name="Line">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 974 129">
          <path d={svgPaths.p2ddaf200} fill="var(--fill-0, #FEA38E)" id="Line" />
        </svg>
      </div>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[112px] relative shrink-0 text-[#1f392c] text-[80px] text-center w-[977px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        VENDEZ VOS SERVICES SANS PROSPECTER GRACE A L’AFFILIATION
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#1f392c] text-[20px] text-center w-[773px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Our team combines strategy, design, and technology to breathe life into your brand. Collaborate with us to leave a lasting impression on your audience. `}</p>
      <Input />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[26.06%_-8.95%_10.68%_84.06%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376.388 507.353">
        <g id="Group">
          <path d={svgPaths.pb8e0a00} fill="var(--fill-0, #FEA38E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Line1() {
  return (
    <div className="absolute contents inset-[26.06%_-8.95%_10.68%_84.06%]" data-name="Line">
      <Group1 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-[#f8f5f0] content-stretch flex flex-col gap-[8px] items-center justify-center px-[160px] py-[140px] relative shrink-0 w-[1512px]" data-name="Hero Section">
      <div className="absolute flex h-[740.706px] items-center justify-center left-[-100px] top-[857px] w-[856.121px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[300deg]">
          <div className="h-[742.138px] relative w-[426.82px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 426.82 742.138">
              <path d={svgPaths.p302c4980} fill="var(--fill-0, #FEA38E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Line />
      <div className="absolute h-[426px] left-[1243.5px] top-[415px] w-[403px]" data-name="hands_2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[150.09%] left-[-118.58%] max-w-none top-[-50.09%] w-[218.58%]" src={imgHands2} />
        </div>
      </div>
      <div className="absolute h-[217px] left-[-142.5px] top-[-8px] w-[414px]" data-name="hands_2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[252.75%] left-0 max-w-none top-0 w-[182.09%]" src={imgHands2} />
        </div>
      </div>
      <Content1 />
      <div className="absolute flex h-[41.798px] items-center justify-center left-[1459px] top-[140px] w-[42.352px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[21.853deg]">
          <div className="h-[31.858px] relative w-[32.854px]" data-name="fb (1) (1) 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[159.68%] left-[-53.92%] max-w-none top-[-22.01%] w-[204.78%]" src={imgFb112} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[114.186px] items-center justify-center left-[1255px] top-[236px] w-[81.683px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[351.383deg]">
          <div className="h-[105.391px] relative w-[66.644px]" data-name="Remove-bg 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[136.73%] left-[-60.66%] max-w-none top-[-22.45%] w-[219.67%]" src={imgRemoveBg1} />
            </div>
          </div>
        </div>
      </div>
      <Line1 />
      <div className="absolute flex h-[78.817px] items-center justify-center left-[207px] top-[257px] w-[60.678px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[345deg]">
          <div className="h-[69.775px] relative w-[44.122px]" data-name="Remove-bg 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[136.73%] left-[-60.66%] max-w-none top-[-22.45%] w-[219.67%]" src={imgRemoveBg1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[67.249px] items-center justify-center left-[132px] top-[699px] w-[68.328px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[342.356deg]">
          <div className="h-[53.139px] relative w-[54.8px]" data-name="fb (1) (1) 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[159.68%] left-[-53.92%] max-w-none top-[-22.01%] w-[204.78%]" src={imgFb112} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[40.124px] items-center justify-center left-[1309px] top-[643.87px] w-[45.039px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[25.588deg]">
          <div className="h-[26.695px] relative w-[37.153px]" data-name="ytb (1) (1) 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[187.79%] left-[-17.71%] max-w-none top-[-43.04%] w-[134.53%]" src={imgYtb112} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[34.42px] items-center justify-center left-[35.49px] top-[336.39px] w-[34.701px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[157.752deg] scale-y-[-100%]">
          <div className="h-[26.243px] relative w-[26.757px]" data-name="inst (1) (1) 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[158.57%] left-[-54.11%] max-w-none top-[-21.85%] w-[205.48%]" src={imgInst112} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fea38e] content-stretch flex items-center justify-center ml-[1080px] mt-0 px-[27px] py-[21px] relative rounded-[30px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f8f5f0] text-[16px] text-nowrap tracking-[-0.32px]">View All Categories</p>
    </div>
  );
}

function Categories() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Categories">
      <Frame5 />
      <p className="[grid-area:1_/_1] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] ml-0 mt-[2px] not-italic relative text-[48px] text-black text-nowrap tracking-[-1.92px]">Categories</p>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[202px] relative shrink-0 w-[180px]" data-name="Component 2">
      <div className="absolute bg-gradient-to-b from-[rgba(254,163,142,0)] inset-[24.75%_0_0_0] rounded-[30px] to-[rgba(254,163,142,0.7)]" />
      <div className="absolute inset-[0_22.22%_50.5%_22.22%]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage25} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[74.26%_3.89%_14.85%_2.78%] leading-[normal] not-italic text-[18px] text-black text-nowrap tracking-[-0.36px]">Nom de la categorie</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[202px] relative shrink-0 w-[180px]" data-name="Component 3">
      <div className="absolute bg-gradient-to-b from-[rgba(254,163,142,0)] inset-[24.75%_0_0_0] rounded-[30px] to-[rgba(254,163,142,0.7)]" />
      <div className="absolute inset-[0_22.22%_50.5%_22.22%]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage25} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[74.26%_3.89%_14.85%_2.78%] leading-[normal] not-italic text-[18px] text-black text-nowrap tracking-[-0.36px]">Nom de la categorie</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[202px] relative shrink-0 w-[180px]" data-name="Component 4">
      <div className="absolute bg-gradient-to-b from-[rgba(254,163,142,0)] inset-[24.75%_0_0_0] rounded-[30px] to-[rgba(254,163,142,0.7)]" />
      <div className="absolute inset-[0_22.22%_50.5%_22.22%]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage25} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[74.26%_3.89%_14.85%_2.78%] leading-[normal] not-italic text-[18px] text-black text-nowrap tracking-[-0.36px]">Nom de la categorie</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[202px] relative shrink-0 w-[180px]" data-name="Component 5">
      <div className="absolute bg-gradient-to-b from-[rgba(254,163,142,0)] inset-[24.75%_0_0_0] rounded-[30px] to-[rgba(254,163,142,0.7)]" />
      <div className="absolute inset-[0_22.22%_50.5%_22.22%]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage25} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[74.26%_3.89%_14.85%_2.78%] leading-[normal] not-italic text-[18px] text-black text-nowrap tracking-[-0.36px]">Nom de la categorie</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="h-[202px] relative shrink-0 w-[180px]" data-name="Component 7">
      <div className="absolute bg-gradient-to-b from-[rgba(254,163,142,0)] inset-[24.75%_0_0_0] rounded-[30px] to-[rgba(254,163,142,0.7)]" />
      <div className="absolute inset-[0_22.22%_50.5%_22.22%]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage25} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[74.26%_3.89%_14.85%_2.78%] leading-[normal] not-italic text-[18px] text-black text-nowrap tracking-[-0.36px]">Nom de la categorie</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[202px] relative shrink-0 w-[180px]" data-name="Component 6">
      <div className="absolute bg-gradient-to-b from-[rgba(254,163,142,0)] inset-[24.75%_0_0_0] rounded-[30px] to-[rgba(254,163,142,0.7)]" />
      <div className="absolute inset-[0_22.22%_50.5%_22.22%]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage25} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[74.26%_3.89%_14.85%_2.78%] leading-[normal] not-italic text-[18px] text-black text-nowrap tracking-[-0.36px]">Nom de la categorie</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[44px] items-center relative shrink-0">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component5 />
      <Component4 />
    </div>
  );
}

function PartnersSection() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center justify-center overflow-clip px-[72px] py-[64px] relative shrink-0 w-[1512px]" data-name="Partners Section">
      <Categories />
      <Frame30 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-end p-[10px] relative shrink-0">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Parcourez les createurs en vedettes!
      </p>
      <div className="absolute flex h-[76.678px] items-center justify-center left-[571.5px] top-[47.99px] w-[410.729px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
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

function Frame14() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start left-0 p-[10px] top-0">
      <div className="absolute h-[179px] left-0 rounded-tl-[15px] rounded-tr-[15px] top-0 w-[389px]" data-name="image ou video du services">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-20 pointer-events-none rounded-tl-[15px] rounded-tr-[15px] size-full" src={imgImageOuVideoDuServices} />
      </div>
      <div className="absolute h-[204px] left-0 rounded-bl-[15px] rounded-br-[15px] shadow-[29px_70px_21px_0px_rgba(0,0,0,0),19px_45px_19px_0px_rgba(0,0,0,0.01),11px_25px_16px_0px_rgba(0,0,0,0.05),5px_11px_12px_0px_rgba(0,0,0,0.09),1px_3px_7px_0px_rgba(0,0,0,0.1)] top-[179px] w-[389px]" style={{ backgroundImage: "linear-gradient(179.769deg, rgb(254, 163, 142) 125.39%, rgb(248, 245, 240) 76.177%)" }} />
    </div>
  );
}

function ImagePdp() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[40px]" data-name="image pdp">
      <div className="absolute inset-0 overflow-hidden rounded-[40px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImagePdp} />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[40px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Label">
      <div className="absolute left-[-4px] rounded-[44px] size-[88px] top-[-4px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(225deg, rgb(254, 163, 142) 0%, rgb(254, 163, 142) 37.55%, rgba(254, 163, 142, 0.5) 63.2%, rgba(254, 163, 142, 0.3) 100%)" }} />
      <div className="absolute left-[-4px] rounded-[44px] size-[88px] top-[-4px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(225deg, rgb(254, 163, 142) 0%, rgb(254, 163, 142) 37.55%, rgba(254, 163, 142, 0.5) 63.2%, rgba(254, 163, 142, 0.3) 100%)" }} />
      <ImagePdp />
    </div>
  );
}

function PhotoDeProfil() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-[40px] shrink-0" data-name="photo de profil">
      <Label />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[206px]">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[24.807px] leading-[normal] relative shrink-0 text-[#1f392c] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        nom du service
      </p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-full">{`livraison `}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 206 1">
            <line id="Line 3" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="206" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[15.36px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.36 15.36">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p2255ad80} fill="var(--fill-0, #222325)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[3.84px] h-[24px] items-center relative shrink-0 w-[78.45px]" data-name="Rating">
      <Svg />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[23.04px] justify-center leading-[0] not-italic relative shrink-0 text-[#222325] text-[14.496px] w-[23.664px]">
        <p className="leading-[23.04px]">4,9</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15.36px] justify-center leading-[0] not-italic relative shrink-0 text-[#74767e] text-[0px] w-[28.608px]">
        <p className="leading-[23.04px] text-[14.304px]">
          (<span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">49</span>)
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
      <PhotoDeProfil />
      <Frame7 />
      <Rating />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-semibold items-start relative shrink-0 w-[84px]">
      <p className="font-['DM_Sans:SemiBold',sans-serif] h-[24.807px] relative shrink-0 text-[#1f392c] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Prenom
      </p>
      <p className="font-['Inter:Semi_Bold',sans-serif] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] w-full">{`Ville `}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[2px] items-start leading-[normal] relative shrink-0 w-full">
      <Frame9 />
      <p className="font-['Inter:Medium_Italic',sans-serif] font-medium h-[47px] italic relative shrink-0 text-[#3e2522] text-[12px] w-[292px]">{`BIO decrivez ce que vous représenter en quelque ligne `}</p>
    </div>
  );
}

function IconYoutube() {
  return (
    <div className="[grid-area:1_/_1] ml-[5px] mt-[5px] relative size-[15px]" data-name="icon/youtube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="icon/youtube">
          <path clipRule="evenodd" d={svgPaths.p1cfe9e80} fill="var(--fill-0, #36363A)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Youtube() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[33px] mt-0 place-items-start relative" data-name="Youtube">
      <div className="[grid-area:1_/_1] bg-[rgba(217,217,217,0)] border-2 border-[#f1f4ef] border-solid ml-0 mt-0 rounded-[5px] size-[25px]" />
      <IconYoutube />
    </div>
  );
}

function IconInstagram() {
  return (
    <div className="[grid-area:1_/_1] ml-[5px] mt-[5px] relative size-[15px]" data-name="icon/instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="icon/instagram">
          <path clipRule="evenodd" d={svgPaths.p22815b80} fill="var(--fill-0, #36363A)" fillRule="evenodd" id="vector" />
          <path clipRule="evenodd" d={svgPaths.p4aba200} fill="var(--fill-0, #36363A)" fillRule="evenodd" id="vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Instagram">
      <div className="[grid-area:1_/_1] bg-[rgba(217,217,217,0)] border-2 border-[#f1f4ef] border-solid ml-0 mt-0 rounded-[5px] size-[25px]" />
      <IconInstagram />
    </div>
  );
}

function IconTiktok() {
  return (
    <div className="[grid-area:1_/_1] ml-[6px] mt-[6px] relative size-[13px]" data-name="icon/tiktok">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="icon/tiktok">
          <path d={svgPaths.p1325fb00} fill="var(--fill-0, #36363A)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Tiktok() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[66px] mt-0 place-items-start relative" data-name="Tiktok">
      <div className="[grid-area:1_/_1] bg-[rgba(217,217,217,0)] border-2 border-[#f1f4ef] border-solid ml-0 mt-0 rounded-[5px] size-[25px]" />
      <IconTiktok />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Social Media">
      <Youtube />
      <Instagram />
      <Tiktok />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#fea38e] content-stretch flex h-[36px] items-center justify-center relative rounded-[10px] shrink-0 w-[126px]">
      <div className="flex flex-col font-['DM_Sans:ExtraBold_Italic',sans-serif] font-extrabold italic justify-center leading-[0] relative shrink-0 text-[#f8f5f0] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Voir les details</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[165px]">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[45px] leading-[normal] not-italic relative shrink-0 text-[#1f392c] text-[20px] w-full">A partir de 10 $</p>
      <Frame6 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[125px] items-end relative shrink-0 w-[366px]">
      <SocialMedia />
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[380.45px]">
      <Frame8 />
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[383px] items-start justify-end px-[4px] py-[5px] relative shrink-0 w-[389px]">
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[85px] items-center relative shrink-0 w-full">
      {[...Array(3).keys()].map((_, i) => (
        <Frame15 key={i} />
      ))}
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-center p-[10px] relative shrink-0 w-[1357px]">
      <Frame26 />
      <Frame16 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[89px] items-center relative shrink-0 w-[1354px]">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#1f392c] text-[56px] text-center w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Comment ca marche Collabmarket ?
      </p>
      <div className="absolute flex h-[16.394px] items-center justify-center left-[797px] top-[64.99px] w-[326.132px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.228deg]">
          <div className="h-[12px] relative w-[326px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 12">
              <path d={svgPaths.p3fe32600} fill="var(--fill-0, #FEA38E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[635px] relative rounded-[30px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImageOuVideoDuServices} />
      </div>
    </div>
  );
}

function IllustrationImage() {
  return (
    <div className="h-[515px] overflow-clip relative shrink-0 w-[891px]" data-name="Illustration & Image">
      <div className="absolute h-[323.5px] left-[484px] top-[185.5px] w-[162.5px]">
        <div className="absolute inset-[-2.47%_-4.92%_-2.47%_-0.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171.076 339.501">
            <path d={svgPaths.p1c136480} fill="var(--stroke-0, #FEA38E)" id="Vector 2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[349.5px] left-[163px] top-[144px] w-[137px]">
        <div className="absolute inset-[-2.13%_-5.84%_-2.29%_-5.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152.535 364.929">
            <path d={svgPaths.p2b2c8c80} fill="var(--stroke-0, #FEA38E)" id="Vector 3" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#fea38e] h-[88px] left-[256px] top-[133px] w-[177px]" />
      <div className="absolute h-[164.035px] left-[192px] top-[24.97px] w-[313.447px]">
        <div className="absolute inset-[-4.88%_-2.55%_-0.14%_-1.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326.153 172.254">
            <path d={svgPaths.pd470500} id="Vector 1" stroke="var(--stroke-0, #FEA38E)" strokeWidth="16" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 h-[515px] left-1/2 translate-x-[-50%] w-[773px]" data-name="woman 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWoman1} />
      </div>
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(248,245,240,0)] h-[158px] left-0 mix-blend-lighten to-[#f8f5f0] w-[891px]" />
      <div className="absolute flex h-[41.798px] items-center justify-center left-[664.01px] top-[231.11px] w-[42.352px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[21.853deg]">
          <div className="h-[31.858px] relative w-[32.854px]" data-name="fb (1) (1) 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[159.68%] left-[-53.92%] max-w-none top-[-22.01%] w-[204.78%]" src={imgFb112} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[21.602px] items-center justify-center left-[526px] top-[17px] w-[21.781px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[30deg]">
          <div className="h-[15.635px] relative w-[16.123px]" data-name="fb (1) (1) 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[159.68%] left-[-53.92%] max-w-none top-[-22.01%] w-[204.78%]" src={imgFb112} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[77.117px] items-center justify-center left-[644px] top-[369px] w-[77.887px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[17.91deg]">
          <div className="h-[60.958px] relative w-[62.153px]" data-name="inst (1) (1) 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[158.57%] left-[-54.11%] max-w-none top-[-21.85%] w-[205.48%]" src={imgInst112} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[14.706px] items-center justify-center left-[817px] top-[147px] w-[14.852px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[17.91deg]">
          <div className="h-[11.624px] relative w-[11.852px]" data-name="inst (1) (1) 4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[158.57%] left-[-54.11%] max-w-none top-[-21.85%] w-[205.48%]" src={imgInst112} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[57.207px] items-center justify-center left-[110.95px] top-[261.88px] w-[57.675px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[157.752deg] scale-y-[-100%]">
          <div className="h-[43.617px] relative w-[44.472px]" data-name="inst (1) (1) 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[158.57%] left-[-54.11%] max-w-none top-[-21.85%] w-[205.48%]" src={imgInst112} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[17.483px] items-center justify-center left-[11.96px] top-[142.47px] w-[17.69px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[346.215deg]">
          <div className="h-[14.4px] relative w-[14.682px]" data-name="inst (1) (1) 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[158.57%] left-[-54.11%] max-w-none top-[-21.85%] w-[205.48%]" src={imgInst112} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[19.521px] items-center justify-center left-[40px] top-[379px] w-[19px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[340.979deg]">
          <div className="h-[15.571px] relative w-[14.729px]" data-name="ytb (1) (1) 4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[187.79%] left-[-17.71%] max-w-none top-[-43.04%] w-[134.53%]" src={imgYtb112} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HowWeWorkSection() {
  return (
    <div className="bg-[#f8f5f0] content-stretch flex flex-col gap-[64px] items-end overflow-clip px-[295px] py-[64px] relative shrink-0" data-name="How we Work Section - 1">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] text-center w-[922px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Vendez vos services sans prospecter grace a l’affiliation
      </p>
      <IllustrationImage />
      <div className="absolute flex h-[109.112px] items-center justify-center left-[933px] top-[301px] w-[126.553px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.685deg]">
          <div className="h-[76.455px] relative w-[106.406px]" data-name="ytb (1) (1) 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[187.79%] left-[-17.71%] max-w-none top-[-43.04%] w-[134.53%]" src={imgYtb112} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[24.166px] items-center justify-center left-[1098px] top-[607px] w-[28.029px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.685deg]">
          <div className="h-[16.933px] relative w-[23.566px]" data-name="ytb (1) (1) 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[187.79%] left-[-17.71%] max-w-none top-[-43.04%] w-[134.53%]" src={imgYtb112} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[55.762px] items-center justify-center left-[505px] top-[670px] w-[65.435px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[340.979deg]">
          <div className="h-[39.858px] relative w-[55.473px]" data-name="ytb (1) (1) 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[187.79%] left-[-17.71%] max-w-none top-[-43.04%] w-[134.53%]" src={imgYtb112} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HowWeWorkSection1() {
  return (
    <div className="bg-[#f8f5f0] content-stretch flex flex-col gap-[64px] items-center px-[295px] py-[64px] relative shrink-0" data-name="How we Work Section - 2">
      <div className="absolute h-[701.954px] left-[-75px] top-0 w-[593.656px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 593.656 701.954">
          <path d={svgPaths.pd41fd00} fill="var(--fill-0, #FEA38E)" id="Vector" />
        </svg>
      </div>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] text-center w-[922px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Difficulté à se développer sur n'importe quelle plateforme Nous le faisons pour vous.`}</p>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[32px] text-center w-[922px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Des créateur et influenceurs promouvois vos services en echange d’un pourcentage a l’achat
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#1f392c] text-[20px] text-center w-[691px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`L’affiliation est a titre optionel comme pour le pourcentage qui vous est reglabe par vous meme `}</p>
      <div className="absolute flex h-[496.11px] items-center justify-center left-[-88px] top-[-134.2px] w-[439.761px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[332.922deg]">
          <div className="h-[412.496px] relative w-[283.013px]" data-name="hands_3">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[206.55%] left-0 max-w-none top-0 w-[200.5%]" src={imgHands3} />
              </div>
              <div className="absolute inset-0 mix-blend-screen overflow-hidden">
                <img alt="" className="absolute h-[206.55%] left-0 max-w-none top-0 w-[200.5%]" src={imgHands3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[433px] left-[1195px] top-[333px] w-[317px]" data-name="hands_3">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[185.45%] left-[-68.71%] max-w-none top-[-85.45%] w-[168.71%]" src={imgHands3} />
          </div>
          <div className="absolute inset-0 mix-blend-screen overflow-hidden">
            <img alt="" className="absolute h-[185.45%] left-[-68.71%] max-w-none top-[-85.45%] w-[168.71%]" src={imgHands3} />
          </div>
        </div>
      </div>
      <div className="absolute h-[464.841px] left-[1263px] top-[130px] w-[366.668px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 366.668 464.841">
          <path d={svgPaths.pb8d1770} fill="var(--fill-0, #FEA38E)" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex h-[128.604px] items-center justify-center left-[210px] top-[280px] w-[141.971px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[345.661deg]">
          <div className="h-[101.942px] relative w-[120.477px]" data-name="like (1) (1) 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[201.71%] left-[-58.18%] max-w-none top-[-55.67%] w-[218.18%]" src={imgLike111} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[128.604px] items-center justify-center left-[1146px] top-[215px] w-[141.971px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[194.339deg] scale-y-[-100%]">
          <div className="h-[101.942px] relative w-[120.477px]" data-name="like (1) (1) 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[201.71%] left-[-58.18%] max-w-none top-[-55.67%] w-[218.18%]" src={imgLike111} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#1f392c]" data-name="Title & Description">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[40px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        1# Vous recherchez des talents
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] w-[396px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Our agency's research-driven approach involves gathering insights into our clients' industries, competitors, and target audiences to develop tailored strategies that deliver exceptional results. This deep understanding allows us to create innovative and effective campaigns that resonate with our clients' audiences. `}</p>
    </div>
  );
}

function Illustration() {
  return (
    <div className="h-[515px] overflow-clip relative shrink-0 w-[518px]" data-name="Illustration">
      <div className="absolute h-[403.5px] left-[145.5px] top-[108.5px] w-[277.5px]">
        <div className="absolute inset-[-1.87%_-2.88%_0_-2.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 293.501 411.027">
            <path d={svgPaths.p1553a900} fill="var(--stroke-0, #FEA38E)" id="Vector 4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[234px] left-[76.5px] top-[269.5px] w-[101px]">
        <div className="absolute inset-[-3.42%_-2.8%_-3.42%_-7.65%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.546 250.001">
            <path d={svgPaths.p26640ec0} id="Vector 5" stroke="var(--stroke-0, #FEA38E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 h-[515px] left-[calc(50%+0.5px)] translate-x-[-50%] w-[518px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-24.57%] max-w-none top-0 w-[149.13%]" src={imgImage} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(248,245,240,0)] h-[158px] left-[calc(50%+0.5px)] mix-blend-lighten to-[#f8f5f0] translate-x-[-50%] w-[518px]" />
      <div className="absolute flex h-[82.513px] items-center justify-center left-[360.5px] top-[198px] w-[73.415px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[30.477deg]">
          <div className="h-[69.775px] relative w-[44.122px]" data-name="Remove-bg 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[136.73%] left-[-60.66%] max-w-none top-[-22.45%] w-[219.67%]" src={imgRemoveBg1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[122.713px] items-center justify-center left-[36.5px] top-[109px] w-[101.372px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[337.921deg]">
          <div className="h-[105.391px] relative w-[66.644px]" data-name="Remove-bg 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[136.73%] left-[-60.66%] max-w-none top-[-22.45%] w-[219.67%]" src={imgRemoveBg1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Step">
      <TitleDescription />
      <Illustration />
    </div>
  );
}

function Illustration1() {
  return (
    <div className="h-[515px] overflow-clip relative shrink-0 w-[518px]" data-name="Illustration">
      <div className="absolute h-[402.5px] left-[11px] top-[110.5px] w-[458px]">
        <div className="absolute inset-[-1.85%_-1.75%_-1.99%_-1.46%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472.701 417.933">
            <path d={svgPaths.p1e6e5b00} id="Vector 6" stroke="var(--stroke-0, #FEA38E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 h-[431px] left-1/2 translate-x-[-50%] w-[518px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-12.4%] max-w-none top-0 w-[124.81%]" src={imgImage1} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(248,245,240,0)] h-[158px] left-1/2 mix-blend-lighten to-[#f8f5f0] translate-x-[-50%] w-[518px]" />
      <div className="absolute left-[67px] size-[189px] top-[190px]" data-name="Remove-bg 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRemoveBg3} />
      </div>
    </div>
  );
}

function TitleDescription1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#1f392c]" data-name="Title & Description">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[40px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        2# Monetiser votre audience<span style={{ fontVariationSettings: "'opsz' 14" }}>:</span>
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] w-[396px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Based on the brief and research, the agency's creative team generates ideas for the campaign. These concepts are presented to the client for feedback and refinement.`}</p>
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Step">
      <Illustration1 />
      <TitleDescription1 />
    </div>
  );
}

function TitleDescription2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#1f392c]" data-name="Title & Description">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[40px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span>{`3# Vendre des services? `}</span>
        <span style={{ fontVariationSettings: "'opsz' 14" }}>:</span>
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[20px] w-[396px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Once the concept is approved, the agency's designers and developers  bring it to life. This includes creating visual assets, writing copy, and developing multimedia content.`}</p>
    </div>
  );
}

function Figma() {
  return (
    <div className="h-[108.256px] relative w-[72.347px]" data-name="figma-1 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.3469 108.256">
        <g clipPath="url(#clip0_3_1204)" id="figma-1 1">
          <path d={svgPaths.p1ade3900} fill="var(--fill-0, #0ACF83)" id="path0 fill" />
          <path d={svgPaths.p1d562c90} fill="var(--fill-0, #A259FF)" id="path1 fill" />
          <path d={svgPaths.p130d8620} fill="var(--fill-0, #F24E1E)" id="path1 fill 1" />
          <path d={svgPaths.p3083f500} fill="var(--fill-0, #FF7262)" id="path2 fill" />
          <path d={svgPaths.p6d20900} fill="var(--fill-0, #1ABCFE)" id="path3 fill" />
        </g>
        <defs>
          <clipPath id="clip0_3_1204">
            <rect fill="white" height="108.256" width="72.3469" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents h-[128.296px] left-[62.97px] top-[71.84px] w-[110.038px]">
      <div className="absolute flex h-[128.296px] items-center justify-center left-[62.97px] top-[71.84px] w-[110.038px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[336.071deg]">
          <Figma />
        </div>
      </div>
    </div>
  );
}

function Illustration2() {
  return (
    <div className="h-[515px] overflow-clip relative shrink-0 w-[518px]" data-name="Illustration">
      <div className="absolute h-[475.925px] left-[43px] top-[37.07px] w-[402px]">
        <div className="absolute inset-[-1.68%_-1.48%_-1.68%_-1.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 413.263 491.94">
            <path d={svgPaths.p33d00500} id="Vector 7" stroke="var(--stroke-0, #FEA38E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 h-[515px] left-[calc(50%+0.5px)] translate-x-[-50%] w-[518px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-24.66%] max-w-none top-0 w-[149.13%]" src={imgImage2} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(248,245,240,0)] h-[158px] left-[calc(50%+0.5px)] mix-blend-lighten to-[#f8f5f0] translate-x-[-50%] w-[518px]" />
      <Group2 />
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Step">
      <TitleDescription2 />
      <Illustration2 />
    </div>
  );
}

function HowWeWorkSection2() {
  return (
    <div className="relative shrink-0 w-full" data-name="How we Work Section - 3">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center px-[245px] py-[64px] relative w-full">
          <Step />
          <Step1 />
          <Step2 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[64px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgFrame30} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Rejoignez `}</p>
      <Frame />
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`les 3000 createurs `}</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[64px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgFrame31} />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[64px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgFrame32} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="absolute h-[61px] left-[328px] top-[12px] w-[417px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 417 61">
          <path d={svgPaths.p3361cc80} fill="var(--fill-0, #FEA38E)" id="Vector" />
        </svg>
      </div>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        qui
      </p>
      <Frame3 />
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        utilise notre plateforme
      </p>
      <Frame4 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Title">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[56px] w-[922px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Commence dés maintenant !!!
      </p>
      <div className="h-[12px] relative shrink-0 w-[496px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 496 12">
          <path d={svgPaths.p36179980} fill="var(--fill-0, #FEA38E)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ArrowNarrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-narrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-narrow-left">
          <path d={svgPaths.pd646200} id="Icon" stroke="var(--stroke-0, #FEA38E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="relative rounded-[40px] shrink-0" data-name="Icon Button">
      <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[inherit]">
        <ArrowNarrowLeft />
      </div>
      <div aria-hidden="true" className="absolute border border-[#fea38e] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function ArrowNarrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-narrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-narrow-right">
          <path d={svgPaths.p31f1e900} id="Icon" stroke="var(--stroke-0, #F8F5F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[#fea38e] content-stretch flex items-start overflow-clip p-[8px] relative rounded-[40px] shrink-0" data-name="Icon Button">
      <ArrowNarrowRight />
    </div>
  );
}

function IconButtons() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Icon Buttons">
      <IconButton />
      <IconButton1 />
    </div>
  );
}

function SubtitleIconButtons() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1272px]" data-name="Subtitle & Icon Buttons">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f392c] text-[32px] w-[416px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Que voulez-vous faire sur collabmarket :
      </p>
      <IconButtons />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#f8f5f0] content-stretch flex h-[42px] items-center justify-center px-0 py-[7px] relative rounded-[100px] shadow-[0px_5px_6px_2px_rgba(0,0,0,0.25)] shrink-0 w-[217px]">
      <p className="font-['DM_Sans:ExtraBold_Italic',sans-serif] font-extrabold italic leading-[normal] relative shrink-0 text-[#fea38e] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        S’inscrire
      </p>
    </div>
  );
}

function ReviewCard() {
  return (
    <div className="bg-[rgba(254,163,142,0.8)] content-stretch flex flex-col gap-[16px] h-[352px] items-start overflow-clip px-[56px] py-[24px] relative rounded-[16px] shrink-0 w-[508px]" data-name="Review Card">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[40px] min-w-full relative shrink-0 text-[#313d4f] text-[32px] tracking-[-0.32px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Vendre des services
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] min-w-full relative shrink-0 text-[#313d4f] text-[20px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.
      </p>
      <Frame17 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#f8f5f0] content-stretch flex h-[42px] items-center justify-center px-0 py-[7px] relative rounded-[100px] shadow-[0px_5px_6px_2px_rgba(0,0,0,0.25)] shrink-0 w-[217px]">
      <p className="font-['DM_Sans:ExtraBold_Italic',sans-serif] font-extrabold italic leading-[normal] relative shrink-0 text-[#fea38e] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        S’inscrire
      </p>
    </div>
  );
}

function ReviewCard1() {
  return (
    <div className="bg-[#ffadf2] content-stretch flex flex-col gap-[16px] h-[352px] items-start overflow-clip px-[56px] py-[24px] relative rounded-[16px] shrink-0 w-[508px]" data-name="Review Card">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[40px] min-w-full relative shrink-0 text-[#1f392c] text-[32px] tracking-[-0.32px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Trouver des `}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] min-w-full relative shrink-0 text-[#1f392c] text-[20px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.
      </p>
      <Frame28 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#f8f5f0] content-stretch flex h-[42px] items-center justify-center px-0 py-[7px] relative rounded-[100px] shadow-[0px_5px_6px_2px_rgba(0,0,0,0.25)] shrink-0 w-[217px]">
      <p className="font-['DM_Sans:ExtraBold_Italic',sans-serif] font-extrabold italic leading-[normal] relative shrink-0 text-[#fea38e] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        S’inscrire
      </p>
    </div>
  );
}

function ReviewCard2() {
  return (
    <div className="bg-[rgba(254,163,142,0.8)] content-stretch flex flex-col gap-[16px] h-[352px] items-start overflow-clip px-[56px] py-[24px] relative rounded-[16px] shrink-0 w-[508px]" data-name="Review Card">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[40px] min-w-full relative shrink-0 text-[#1f392c] text-[32px] tracking-[-0.32px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Monetiser son contenue
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] min-w-full relative shrink-0 text-[#1f392c] text-[20px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.
      </p>
      <Frame18 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f8f5f0] content-stretch flex h-[42px] items-center justify-center px-0 py-[7px] relative rounded-[100px] shadow-[0px_5px_6px_2px_rgba(0,0,0,0.25)] shrink-0 w-[217px]">
      <p className="font-['DM_Sans:ExtraBold_Italic',sans-serif] font-extrabold italic leading-[normal] relative shrink-0 text-[#fea38e] text-[20px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        S’inscrire
      </p>
    </div>
  );
}

function ReviewCard3() {
  return (
    <div className="bg-[#ffadf2] content-stretch flex flex-col gap-[16px] h-[352px] items-start overflow-clip px-[56px] py-[24px] relative rounded-[16px] shrink-0 w-[508px]" data-name="Review Card">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[40px] min-w-full relative shrink-0 text-[#1f392c] text-[32px] tracking-[-0.32px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Monetiser son contenue
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] min-w-full relative shrink-0 text-[#1f392c] text-[20px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.
      </p>
      <Frame29 />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Cards">
      <ReviewCard />
      <ReviewCard1 />
      <ReviewCard2 />
      <ReviewCard3 />
    </div>
  );
}

function Cards1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Cards">
      <Cards />
    </div>
  );
}

function ReviewSection() {
  return (
    <div className="h-[1043px] relative shrink-0 w-full" data-name="Review Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start px-[160px] py-[64px] relative size-full">
          <Title1 />
          <Frame23 />
          <SubtitleIconButtons />
          <Cards1 />
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] h-[38.151px] ml-0 mt-0 relative w-[35.756px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7558 38.1514">
        <g id="Group 39518">
          <path d={svgPaths.p142d2900} fill="var(--fill-0, #FEA38E)" id="Rectangle 4483" />
          <path d={svgPaths.p19da5000} fill="var(--fill-0, #4CBFFF)" id="Rectangle 4484" />
          <path d={svgPaths.p44a3400} fill="var(--fill-0, #702DFF)" id="Rectangle 4485" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group7 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo - #3">
      <p className="[grid-area:1_/_1] font-['DM_Sans:Bold',sans-serif] font-bold leading-[31.099px] ml-[46.6px] mt-[3.66px] relative text-[#170f49] text-[29.463px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Logo
      </p>
      <Group6 />
    </div>
  );
}

function SocialMediaIconSquareFacebook() {
  return (
    <div className="h-[19px] relative shrink-0 w-[11px]" data-name="Social Media Icon Square/Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 19">
        <g id="Social Media Icon Square/Facebook">
          <path d={svgPaths.p20b41a00} fill="var(--fill-0, #FEA38E)" id="Facebook" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediaIconSquareTwitter() {
  return (
    <div className="h-[15px] relative shrink-0 w-[19px]" data-name="Social Media Icon Square/Twitter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 15">
        <g id="Social Media Icon Square/Twitter">
          <path d={svgPaths.p36775500} fill="var(--fill-0, #FEA38E)" id="Twitter" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediaIconSquareInstagram() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Social Media Icon Square/Instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Social Media Icon Square/Instagram">
          <path d={svgPaths.p1c699180} fill="var(--fill-0, #FEA38E)" id="Instagram" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[4.58%_0.79%_0.19%_4.47%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17.1429">
        <g id="Group 73">
          <path d={svgPaths.p2b9b7100} fill="var(--fill-0, #FEA38E)" id="LinkedIn" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediaIconSquareLinkedIn() {
  return (
    <div className="h-[18px] relative shrink-0 w-[19px]" data-name="Social Media Icon Square/LinkedIn">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[2.64%_1.19%_4.04%_4.52%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8 13.9966">
        <g id="Group 73">
          <path d={svgPaths.p282ebb0} fill="var(--fill-0, #FEA38E)" id="YouTube" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediaIconSquareYouTube() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]" data-name="Social Media Icon Square/YouTube">
      <Group4 />
    </div>
  );
}

function SocialMediaContainer() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0" data-name="Social Media Container">
      <SocialMediaIconSquareFacebook />
      <SocialMediaIconSquareTwitter />
      <SocialMediaIconSquareInstagram />
      <SocialMediaIconSquareLinkedIn />
      <SocialMediaIconSquareYouTube />
    </div>
  );
}

function Component24Px() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[99px] top-[120px]" data-name="24px">
      <Logo2 />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#6f6c90] text-[18px] w-[310.356px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
      </p>
      <SocialMediaContainer />
    </div>
  );
}

function MasterLink() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Getting started
      </p>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink />
    </div>
  );
}

function MasterLink1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Help center
      </p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink1 />
    </div>
  );
}

function MasterLink2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Server status
      </p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink2 />
    </div>
  );
}

function MasterLink3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Report a bug
      </p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink3 />
    </div>
  );
}

function MasterLink4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Chat support
      </p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink4 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0" data-name="Footer Links">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function FooterColumn() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[882px] top-[120px]" data-name="Footer Column">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#170f49] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Support
      </p>
      <FooterLinks />
    </div>
  );
}

function MasterLink5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        About
      </p>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink5 />
    </div>
  );
}

function MasterLink6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contact us
      </p>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink6 />
    </div>
  );
}

function MasterLink7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Careers
      </p>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink7 />
    </div>
  );
}

function MasterLink8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Culture
      </p>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink8 />
    </div>
  );
}

function MasterLink9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Blog
      </p>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink9 />
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0" data-name="Footer Links">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function FooterColumn1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[693px] top-[120px]" data-name="Footer Column">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#170f49] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Company
      </p>
      <FooterLinks1 />
    </div>
  );
}

function MasterLink10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Features
      </p>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink10 />
    </div>
  );
}

function MasterLink11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Pricing
      </p>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink11 />
    </div>
  );
}

function MasterLink12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Case studies
      </p>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink12 />
    </div>
  );
}

function MasterLink13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Reviews
      </p>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink13 />
    </div>
  );
}

function MasterLink14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Updates
      </p>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink14 />
    </div>
  );
}

function FooterLinks2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0" data-name="Footer Links">
      <Link10 />
      <Link11 />
      <Link12 />
      <Link13 />
      <Link14 />
    </div>
  );
}

function FooterColumn2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[490px] top-[120px]" data-name="Footer Column">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#170f49] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Product
      </p>
      <FooterLinks2 />
    </div>
  );
}

function FooterRight() {
  return (
    <div className="absolute contents left-[490px] top-[120px]" data-name="Footer Right">
      <FooterColumn2 />
    </div>
  );
}

function Email() {
  return (
    <div className="absolute inset-[19.33%_8.33%_18.17%_8.33%]" data-name="Email">
      <div className="absolute inset-[-5.6%_-4.2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0667 13.9">
          <g id="Email">
            <path d={svgPaths.p1ee39700} id="Vector" stroke="var(--stroke-0, #170F49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            <path d={svgPaths.p2abb4100} id="Vector_2" stroke="var(--stroke-0, #170F49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedEmail() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Line Rounded/Email">
      <Email />
    </div>
  );
}

function MasterLink15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <LineRoundedEmail />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        contact@company.com
      </p>
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute content-stretch flex items-start left-[1113px] top-[184px]" data-name="Link">
      <MasterLink15 />
    </div>
  );
}

function FooterColumn3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1113px] top-[120px]" data-name="Footer Column">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#170f49] text-[20px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contacts us
      </p>
    </div>
  );
}

function Phone() {
  return (
    <div className="absolute inset-[6.83%_8.32%_9.84%_8.33%]" data-name="Phone">
      <div className="absolute inset-[-4.2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0684 18.0667">
          <g id="Phone">
            <path d={svgPaths.p14698000} id="Vector" stroke="var(--stroke-0, #170F49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedPhone() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Line Rounded/Phone">
      <Phone />
    </div>
  );
}

function MasterLink16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <LineRoundedPhone />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6f6c90] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        (414) 687 - 5892
      </p>
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute content-stretch flex items-start left-[1113px] top-[226px]" data-name="Link">
      <MasterLink16 />
    </div>
  );
}

function Mark() {
  return (
    <div className="absolute inset-[8.33%_15.7%]" data-name="Mark">
      <div className="absolute inset-[-4.2%_-5.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1215 18.0667">
          <g id="Mark">
            <path d={svgPaths.p3b0b1200} id="Vector" stroke="var(--stroke-0, #170F49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
            <path d={svgPaths.p361d3180} id="Vector_2" stroke="var(--stroke-0, #170F49)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedMark() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-[5.7px] overflow-clip relative size-[20px]" data-name="Line Rounded/Mark">
      <Mark />
    </div>
  );
}

function SpacerIconWrapper() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Spacer Icon Wrapper">
      <LineRoundedMark />
      <div className="[grid-area:1_/_1] bg-white h-[10.464px] ml-[1.41px] mt-0 opacity-0 w-[16.743px]" data-name="Spacer" />
    </div>
  );
}

function Component8Px() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start leading-[0] left-[1113px] top-[268px]" data-name="8px">
      <SpacerIconWrapper />
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#6f6c90] text-[18px] w-[197.617px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">794 Mcallister St</p>
        <p>San Francisco, 94102</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[1113px] top-[120px]">
      <Link15 />
      <FooterColumn3 />
      <Link16 />
      <Component8Px />
    </div>
  );
}

function FooterContent() {
  return (
    <div className="absolute contents font-['DM_Sans:Regular',sans-serif] font-normal left-[109.4px] text-[#6f6c90] text-nowrap top-[486.86px]" data-name="Footer Content">
      <p className="absolute leading-[30px] left-[109.4px] text-[18px] top-[486.86px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Copyright © 2022 BRIX Templates
      </p>
      <p className="absolute leading-[30px] left-[1326.93px] text-[0px] text-[18px] text-right top-[486.86px] translate-x-[-100%]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span style={{ fontVariationSettings: "'opsz' 14" }}>{`All Rights Reserved | `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#fea38e] underline" style={{ fontVariationSettings: "'opsz' 14" }}>
          Terms and Conditions
        </span>
        <span style={{ fontVariationSettings: "'opsz' 14" }}>{` | `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#fea38e] underline" style={{ fontVariationSettings: "'opsz' 14" }}>
          Privacy Policy
        </span>
      </p>
    </div>
  );
}

function FooterV() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f8f5f0] h-[541px] ml-0 mt-0 overflow-clip relative w-[1518px]" data-name="Footer v1">
      <div className="absolute flex h-0 items-center justify-center left-0 top-0 w-[1440px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[1440px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
                <line id="Divider" stroke="var(--stroke-0, #EFF0F7)" x2="1440" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Component24Px />
      <div className="absolute h-0 left-[99px] top-[461.76px] w-[1241px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1241 1">
            <line id="Line 135" stroke="var(--stroke-0, #D9DBE9)" x2="1241" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FooterColumn />
      <FooterColumn1 />
      <FooterRight />
      <Group5 />
      <FooterContent />
    </div>
  );
}

function FooterV1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Footer v1">
      <FooterV />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-[1518px]">
      <Frame21 />
      <HeroSection />
      <PartnersSection />
      <Frame25 />
      <Frame27 />
      <HowWeWorkSection />
      <HowWeWorkSection1 />
      <HowWeWorkSection2 />
      <ReviewSection />
      <FooterV1 />
    </div>
  );
}

export default function Frame32() {
  return (
    <div className="bg-[#f5f5f0] relative size-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative size-full">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}