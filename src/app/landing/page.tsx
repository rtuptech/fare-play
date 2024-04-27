import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="relative w-full bg-gradient-to-b from-transparent to-black lg:bg-inherit">
      <div className="w-full grid place-items-center mt-48 lg:block lg:mt-0 lg:absolute lg:top-0 lg:right-72 lg:w-[310px]">
        <div className="block">
          <h2 className="font-pixeboy text-5xl text-white not-italic font-normal">
            gamble for free
          </h2>
          <h3 className="font-pixeboy text-[#4AF5D3] text-6xl not-italic font-normal">
            earn points
          </h3>
        </div>
        <div className="flex flex-col items-center justify-start">
          <ul className="flex flex-col gap-y-2 pr-10 mt-1 font-medium font-gohu text-lg lg:text-sm not-italic">
            <li className="flex gap-x-2">
              <Image
                src={"/img/skull.svg"}
                width={18}
                height={18}
                alt="skull"
              />
              <span className="text-white">Click LAUNCH APP</span>
            </li>
            <li className="flex gap-x-2">
              <Image
                src={"/img/skull.svg"}
                width={18}
                height={18}
                alt="skull"
              />
              <span className="text-white">Connect your wallet</span>
            </li>
            <li className="flex gap-x-2">
              <Image
                src={"/img/skull.svg"}
                width={18}
                height={18}
                alt="skull"
              />
              <span className="text-white">Enter your invite code</span>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-x-7 mt-5">
            <button className="border border-[#4AF5D3] bg-[#4AF5D3]/25 shadow shadow-[#4AF5D3] rounded-md h-10 lg:h-8 w-[120px] font-medium font-gohu uppercase text-white text-base lg:text-xs transition-all hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">
              launch app
            </button>
            <button className="border border-[#410DFF] bg-[#410DFF]/25 shadow shadow-[#410DFF] rounded-md h-10 lg:h-8 w-[120px] font-medium font-gohu uppercase text-white text-base lg:text-xs transition-all hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
