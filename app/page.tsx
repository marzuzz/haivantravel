import Navbar from "./components/Navbar";
import Image from "next/image";
import PartnerCard from "./components/partnetCard";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <header className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[820px] overflow-hidden flex items-start justify-center sm:block">
        <Image
          src="/background.svg"
          alt="background"
          width={1900}
          height={1600}
          className="absolute right-0 z-0 h-auto w-[520px] sm:w-[900px] md:w-[1200px] lg:w-[1500px] xl:w-[1700px] 2xl:w-[1900px]"
        />
        <Image
          src="/background1.svg"
          alt="background1"
          width={1700}
          height={1900}
          className="absolute left-0 z-0 h-auto w-[520px] sm:w-[800px] md:w-[1100px] lg:w-[1400px] xl:w-[1600px] 2xl:w-[1700px]"
        />
        <Image
          src="/lighten.svg"
          alt="lighten"
          width={1280}
          height={1000}
          className="absolute left-0 z-20 h-auto w-[340px] min-[576px]:w-[340px] sm:w-[700px] md:w-[900px] lg:w-[1000px] xl:w-[1100px] 2xl:w-[1280px]"
        />

        <div className="flex flex-row sm: flex sm: flex-col sm: items-center sm:justify-center">
          <div className="relative pt-4 pb-10 sm:py-0 sm:pt-[160px] px-6 md:px-12 lg:pl-[180px] flex flex-col items-center sm:items-start justify-center w-full text-center sm:text-left min-[576px]:pt-[30px]">
          <h1 className="relative z-30 font-black text-[22px] md:text-[28px] lg:text-[32px] xl:text-[30px] 2xl:text-[40px] bg-gradient-to-r from-[#C4C4C4] to-[#747474] bg-clip-text text-transparent">
              Về chúng tôi
            </h1>

            <h3 className="relative z-30 font-black text-[30px] md:text-[42px] lg:text-[52px] xl:text-[50px] 2xl:text-[70px] bg-gradient-to-r from-[#C4C4C4] to-[#747474] bg-clip-text text-transparent">
              Hải Vân Travel
            </h3>
            <p className="relative z-10 max-w-[600px] text-[13px] md:text-[14px] lg:text-[15px] lg:max-w-[400px] xl:max-w-[450px] xl:text-[15px] 2xl:text-[17px] 2xl:max-w-[600px] leading-relaxed mt-4 text-[#9B9B9B] md:max-w-[350px] sm:max-w-[300px]">
              Với đội ngũ trẻ đầy nhiệt huyết,{" "}
              <span className="font-bold text-[#F4F4F4]">Hải Vân Travel</span> tự hào là cầu nối gắn kết doanh nghiệp qua những hành trình giàu cảm xúc. Chúng tôi lấy khách hàng làm trọng tâm, cam kết kiến tạo giá trị qua sự chuyên nghiệp và chất lượng dịch vụ đỉnh cao.
            </p>
          </div>
          <Image
            src="/image1.svg"
            alt="image1"
            width={900}
            height={900}
            className="hero-image absolute z-0 h-auto 
                     top-[144px] right-4 
                     w-[260px] md:w-[500px] md:pr-[50px] lg:w-[500px] lg:pr-[100px] xl:w-[620px] xl:pr-[100px] 2xl:w-[820px] 
                     pointer-events-none
                     hidden sm:block
                     md:pl-[50px]
                     lg:w-[620px]
                     "
          />
        </div>
      </header>
      <div className="">
        <Image
          src="background2.svg"
          alt="background2"
          width={1900}
          height={1000}
          className="absolute left-0"
        />
        <div className="flex flex-col">
          <div className="flex flex-col mt-[100px] ml-[180px]">
            <h1 className="bg-gradient-to-r from-[#4B7171] to-[#8ED6D7] bg-clip-text text-transparent text-[22px] md:text-[28px] lg:text-[32px] xl:text-[30px] 2xl:text-[35px] font-black">
              Khách hàng đã tin tưởng
            </h1>
            <h3 className="bg-gradient-to-r from-[#4B7171] to-[#8ED6D7] bg-clip-text text-transparent text-[22px] md:text-[28px] lg:text-[32px] xl:text-[30px] 2xl:text-[65px] font-black">
              Chúng tôi
            </h3>
          </div>
          <div className="flex flex-row gap-10 justify-center w-full ">
            <div className="relative flex items-center justify-center w-[65px] h-[200px] rounded-[31px] border border-white mt-[280px] overflow-hidden bg-transparent">
              <div className="pointer-events-none absolute inset-0 rounded-[31px] bg-linear-to-b from-white/40 via-white/28 to-white/18" />
              <Image
                src="/arrow-backward.svg"
                alt="arrow backward"
                width={24}
                height={24}
                className="relative z-10"
              />
            </div>
            <div className="grid grid-cols-5 gap-6 pt-[50px]">
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
            </div>
            <div className="relative flex items-center justify-center w-[65px] h-[200px] rounded-[31px] border border-white mt-[280px] overflow-hidden bg-transparent">
              <div className="pointer-events-none absolute inset-0 rounded-[31px] bg-linear-to-b from-white/40 via-white/28 to-white/18" />
              <Image
                src="/arrow-forward.svg"
                alt="arrow foward"
                width={24}
                height={24}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
