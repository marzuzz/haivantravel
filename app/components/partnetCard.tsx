import Image from "next/image";

export default function PartnerCard() {
    return (
        <div className="relative flex flex-col items-center justify-start 2xl:w-[290px] 2xl:h-[310px] rounded-[24px] border border-white/40 bg-white/5 backdrop-blur-sm overflow-hidden xl:w-[240px] xl:h-[260px]">
            <div className="pointer-events-none absolute inset-[1px] rounded-[22px] border border-white/20 bg-linear-to-b from-white/10 via-white/3 to-transparent" />
            <div className="relative z-10 flex flex-col items-center w-full h-full pt-6">
            <div className="flex flex-col items-center justify-between h-full">
                <Image
                    src="/jolibee.svg"                        
                    alt="logo"
                    width={250}
                    height={250}
                    className=""
                />
                <div className="mt-auto border border-white rounded-[8px] w-[150px] h-[60px] flex items-center justify-center mb-[20px]">
                    <p>Bất động sản</p>
                </div>
            </div>
            </div>
        </div>
    );  
}