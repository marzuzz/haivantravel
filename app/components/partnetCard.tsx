import Image from "next/image";

export default function PartnerCard() {
    return (
        <div className="relative w-[200px] h-[220px] sm:w-full sm:h-auto flex flex-col items-center justify-start rounded-[24px] border border-white/40 bg-white/5 backdrop-blur-sm overflow-hidden">
            <div className="pointer-events-none absolute inset-[1px] rounded-[22px] border border-white/20 bg-gradient-to-b from-white/10 via-white/3 to-transparent" />
            <div className="relative z-10 flex flex-col items-center w-full h-full pt-6">
                <div className="flex flex-col items-center justify-between h-full">
                    <Image
                        src="/jolibee.svg"
                        alt="Jolibee logo"
                        width={0}  
                        height={0} 
                        className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] object-contain"
                    />
                    <div className="mt-auto border border-white rounded-[8px] 2xl:w-[150px] 2xl:h-[60px] flex items-center justify-center mb-[20px] xl:w-[130px] xl:h-[40px] lg:w-[150px] lg:h-[45px] md:w-[130px] md:h-[30px] sm:w-[150px] sm:h-[50px] w-[130px] h-[35px]">
                        <p>Bất động sản</p>
                    </div>
                </div>
            </div>
        </div>
    );  
}
