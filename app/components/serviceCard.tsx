import Image from "next/image"

type ServiceCardProps = {
    highlight?: boolean;
};

export default function ServiceCard({ highlight }: ServiceCardProps) {
    return (
        <div className="relative flex flex-col items-center justify-center w-[500px] h-[400px] rounded-[20px] border-white/40 bg-white/5 backdrop-blur-sm overflow-hidden">
            {highlight && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="2xl:w-[200px] 2xl:h-[200px] xl:w-[150px] xl:h-[150px] lg:w-[200px] lg:h-[200px] lg:mb-[100px] md:w-[150px] md:h-[150px] sm:w-[130px] sm:h-[200px] bg-white/30 blur-3xl rounded-full mt-[-150px]" />
                        <div className="absolute z-0 opacity-30 blur-3xl rounded-full bg-radial from-[#904589] to-transparent 2xl:w-[500px] 2xl:h-[500px] 2xl:ml-[30px] 2xl:mt-[-100px] xl:w-[500px] xl:h-[500px] xl:mt-[-200px] lg:w-[500px] lg:h-[500px] lg:mt-[-250px] sm:w-[500px] sm:h-[500px] sm:mt-[-250px]" />
                </div>
            )}
            <div className="pointer-events-none absolute inset-[1px] rounded-[22px] border border-white/20 bg-gradient-to-b from-white/10 via-white/3 to-transparent" />
            <div className="w-[100px] shadow-[inset_0_0_40px_rgba(255,255,255,0.6)] border border-white/70 flex items-center justify-center rounded-[18px] h-[100px] bg-gradient-to-r from-[#3F9293] to-[#8E4590]">
                <Image
                    src="service.svg"
                    alt="service"
                    width={200}
                    height={200}
                    className="2xl:w-[60px] xl:w-[60px] lg:w-[60px] md:w-[60px] sm:w-[40px]"
                />
            </div>
            <div className="flex items-center mt-[10px] justify-center flex-col max-w-[90%]">
                <p className="2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[20px] text-[20px] font-black sm:text-[28px] text-[28px]">dolor sit amet</p>
                <p className="2xl:text-[16px] xl:text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[16px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
            </div>
        </div>
    );
}