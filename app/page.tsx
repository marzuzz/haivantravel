"use client"
import Navbar from "./components/Navbar";
import Image from "next/image";
import PartnerCard from "./components/partnetCard";
import AutoScrollPartners from "./components/AutoScrollPartners";
import ServiceCard from "./components/serviceCard";
import { useState, useRef } from "react";
import InfinityGallery from "./components/InfinityGallery";
import Footer from "./components/Footer";


export default function Home() {
  const [images, setImages] = useState([
    "/bg.svg", "/img7.svg", "/img4.svg", "/img5.svg", "/img6.svg"
  ])

  const scrollImages = [
    "/slider/img1.png", "/slider/img2.png", "/slider/img3.png", "/slider/img4.png", "/slider/img5.png"
  ]
  const [current, setCurrent] = useState(0)
  const [active, setActive] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleNext = () => {
    setImages(prev => {
      const arr = [...prev]
      const first = arr.shift()
      arr.push(first || "")
      return arr
    })

    setCurrent(prev => (prev + 1) % images.length)
  }

  const handlePrevious = () => {
    setImages(prev => {
      const arr = [...prev]
      const last = arr.pop()
      arr.unshift(last || "")
      return arr
    })

    setCurrent(prev => (prev - 1 + images.length) % images.length)
  }


  return (
    <div className="min-h-screen w-full flex flex-col bg-[#121212] overflow-x-hidden overflow-y-visible">
      <Navbar />
      <header className="relative h-[640px] sm:min-h-[720px] lg:min-h-[820px] overflow-hidden flex items-center justify-center sm:items-start sm:block
                         bg-[url('/image1.svg')] bg-[length:200%_200%] bg-center bg-no-repeat sm:bg-none sm:bg-cover bg-[#121212]">

        <div className="absolute inset-0 bg-black/75 z-10 sm:hidden"></div>

        <Image
          src="/background.svg"
          alt="background"
          width={2000}
          height={2000}
          className="absolute right-0 z-0 h-auto w-[520px] sm:w-[900px] xl:w-[1700px] 2xl:w-[1900px] hidden sm:block md:w-[750px] lg:w-[1300px]"
        />
        <Image
          src="/background1.svg"
          alt="background1"
          width={1700}
          height={1900}
          className="absolute left-0 z-0 h-auto w-[520px] sm:w-[800px] md:w-[1100px] lg:w-[1400px] xl:w-[1600px] 2xl:w-[1700px] hidden sm:block"
        />
        <Image
          src="/lighten.svg"
          alt="lighten"
          width={1280}
          height={1000}
          className="absolute z-20 h-auto w-[340px] min-[576px]:w-[340px] sm:w-[500px] md:w-[500px] lg:w-[770px] xl:w-[1000px] 2xl:w-[1200px] hidden sm:block"
        />

        <div className="flex 2xl:justify-between xl:justify-between lg:justify-between flex-row sm:flex sm:flex-col md:mt-[-100px] sm:items-center w-full h-full sm:h-auto sm:mt-[-100px]">
          <div className="relative py-2 z-10 pb-4 sm:py-0 sm:pt-[160px] lg:mr-[130px] px-6 md:px-12 lg:pl-[180px] flex flex-col items-center justify-center sm:items-start sm:justify-start w-full text-center sm:text-left min-[576px]:pt-[30px] z-20 -mt-8 sm :mt-0 2xl:ml-[160px] xl:ml-[70px] lg:ml-[70px] md:ml-[180px] lg:mt-[50px sm:ml-[100px] 2xl:mt-[50px]">
            <h1 className="relative z-30 font-black text-[17px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] bg-gradient-to-r from-[#C4C4C4] to-[#747474] bg-clip-text text-transparent">
              Về chúng tôi
            </h1>
            <h3 className="relative z-30 font-black text-[30px] md:text-[34px] lg:text-[44px] xl:text-[50px] 2xl:text-[70px] bg-gradient-to-r from-[#C4C4C4] to-[#747474] bg-clip-text text-transparent">
              Hải Vân Travel
            </h3>
            <p className="relative z-10 max-w-[600px] text-[13px] md:text-[11px] lg:text-[14px] lg:max-w-[330px] xl:max-w-[460px] xl:text-[15px] 2xl:text-[17px] 2xl:max-w-[600px] leading-relaxed mt-4 text-[#9B9B9B] md:max-w-[260px] sm:max-w-[230px]">
              Với đội ngũ trẻ đầy nhiệt huyết,{" "}
              <span className="font-bold text-[#F4F4F4]">Hải Vân Travel</span> tự hào là cầu nối gắn kết doanh nghiệp qua những hành trình giàu cảm xúc. Chúng tôi lấy khách hàng làm trọng tâm, cam kết kiến tạo giá trị qua sự chuyên nghiệp và chất lượng dịch vụ đỉnh cao.
            </p>
            <button className="relative z-30 mt-6 px-6 py-3 md:px-4 md:py-2 sm:px-2 sm:py-1 sm:mt-[10px] bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white rounded-[12px] border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-3 transition-all duration-300 group">
              <span className="text-[14px] md:text-[12px] lg:text-[16px] sm:text-[10px] font-medium">Về chúng tôi</span>
              <Image
                src="/play.svg"
                alt="play"
                width={15}
                height={15}
                className="relative z-10"
              />
            </button>
          </div>
          <Image
            src="/image1.svg"
            alt="image1"
            width={900}
            height={900}
            className="hero-image absolute z-0 h-auto 
                     top-[144px] right-4 
                     w-[260px] md:w-[410px] md:pr-[50px] lg:w-[500px] lg:pr-[100px] xl:w-[780px] xl:pr-[100px] 2xl:w-[870px] 
                     pointer-events-none
                     md:pl-[50px] md:mt-[-80px]
                     lg:w-[620px] lg:mt-[-50px]
                     lg:right-0
                     sm:w-[300px]
                     sm:mt-[-80px]
                     hidden sm:block
                     "
          />
        </div>
      </header>
      <div className="w-full mt-[-80px] lg:mt-[-180px] xl:mt-0 2xl:mt-0 md:mt-[-100px] sm:mt-[-400px] bg-[#121212] z-10">
        <div className="relative w-full">
          <Image
            src="background2.svg"
            alt="background2"
            fill
            className="-z-10 opacity 2xl:mt-0 xl:mt-[80px] lg:mt-[120px] md:mt-[120px] sm:mt-[200px]"
          />

          <div className="relative z-10 flex flex-col pt-[80px] pb-[20px] sm:pb-[80px] xl:mt-[-100px] 2xl:mt-0 lg:mt-[-150px] md:mt-[-300px]">
            <div className="flex flex-col items-center justify-center sm:items-center sm:justify-start md:items-start md:justify-start md:ml-[60px] 2xl:items-start 2xl:justify-start 2xl:ml-[180px] w-full 2xl:w-auto xl:ml-[160px] lg:ml-[150px] md:ml-[140px] lg:mt-[50px]">
              <h1 className="bg-gradient-to-r from-[#4B7171] to-[#8ED6D7] bg-clip-text text-transparent text-[28px] sm:text-[30px] md:text-[24px] lg:text-[26px] xl:text-[35px] 2xl:text-[35px] font-black text-center md:text-left">
                Khách hàng đã tin tưởng
              </h1>
              <h3 className="bg-gradient-to-r from-[#4B7171] to-[#8ED6D7] bg-clip-text text-transparent text-[32px] md:text-[32px] lg:text-[33px] xl:text-[65px] 2xl:text-[65px] font-black text-center md:text-left">
                Chúng tôi
              </h3>
            </div>
            <div className="flex flex-row justify-between w-full gap-6 md:gap-20 items-center">
              <div className="relative flex items-center justify-center w-[65px] h-[200px] rounded-[31px] border border-white overflow-hidden bg-transparent hidden sm:flex 2xl:w-[65px] 2xl:h-[200px] 2xl:ml-[50px] md:w-[55px] md:h-[100px] md:ml-[30px] lg:w-[55px] lg:h-[150px] sm:h-[100px]">
                <div className="pointer-events-none absolute inset-0 rounded-[31px] bg-linear-to-b from-white/40 via-white/28 to-white/18" />
                <Image
                  src="/arrow-backward.svg"
                  alt="arrow backward"
                  width={24}
                  height={24}
                  className="relative z-10 sm:w-[18px]"
                />
              </div>
              <div className="w-full">
                <AutoScrollPartners className="sm:hidden" />
                <div className="hidden sm:grid w-full xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-6 pt-[50px]">
                  <PartnerCard />
                  <PartnerCard />
                  <PartnerCard />
                  <PartnerCard />
                  <div className="hidden md:block">
                    <PartnerCard />
                  </div>
                  <div className="hidden md:block">
                    <PartnerCard />
                  </div>
                  <div className="hidden lg:block">
                    <PartnerCard />
                  </div>
                  <div className="hidden lg:block">
                    <PartnerCard />
                  </div>
                  <div className="hidden xl:block">
                    <PartnerCard />
                  </div>
                  <div className="hidden xl:block">
                    <PartnerCard />
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-[65px] h-[200px] rounded-[31px] border border-white overflow-hidden bg-transparent hidden sm:flex 2xl:w-[65px] 2xl:h-[200px] 2xl:mr-[50px] md:w-[55px] md:h-[100px] md:mr-[30px] lg:w-[55px] lg:h-[150px] sm:h-[100px]">
                <div className="pointer-events-none absolute inset-0 rounded-[31px] bg-linear-to-b from-white/40 via-white/28 to-white/18" />
                <Image
                  src="/arrow-forward.svg"
                  alt="arrow foward"
                  width={35}
                  height={35}
                  className="relative z-10 sm:w-[26px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen sm:min-h-[calc(100vh-400px)] xl:min-h-[calc(100vh-300px)] lg:min-h-[calc(100vh-300px)] 2xl:min-h-[calc(100vh-150px)] 2xl:mt-[100px] bg-[#121212] flex flex-row justify-center 2xl:gap-[130px] xl:gap-[80px] lg:gap-[50px] md:gap-[50px] sm:gap-[30px] items-center sm:items-start pt-[20px] sm:pt-[100px] relative -mt-[60px] sm:mt-0">
        <div className="absolute inset-0 bg-[url('/image2.svg')] bg-cover bg-center bg-no-repeat opacity-20 sm:hidden z-0"></div>
        <div className="relative hidden sm:block">
          <div className="absolute w-[200px] h-[200px] right-0 bg-white/30 blur-3xl rounded-full mt-[-150px] left-[-100px] opacity-50" />
          <div className="absolute w-[200px] h-[200px] right-0 bg-white/30 blur-3xl rounded-full mt-[90px] left-[-100px] opacity-50" />
          <div className="absolute w-[200px] h-[200px] right-0 bg-white/30 blur-3xl rounded-full mt-[-100px] left-[100px] opacity-50" />
          <div className="absolute opacity-30 blur-3xl rounded-full bg-radial from-[#904589] to-transparent w-[700px] h-[700px] z-3 ml-[-400px] mt-[-300px]" />
        </div>
        <div className="relative md:pb-[200px] xl:pb-[100px] lg:pb-[100px] md:pb-[100px] sm:pb-[100px] hidden sm:block">
          <Image src="image2.svg" alt="image2" width={0} height={0} className="2xl:w-[1300px] z-10 xl:w-[950px] lg:w-[800px] md:w-[700px] sm:w-[600px]" />
          <Image src="image3.svg" alt="image3" width={0} height={0} className="absolute z-20 w-[60%] left-[44%] 2xl:top-[47%] lg:top-[47%] md:top-[37%] sm:top-[40%]" />
        </div>
        <div className="md:pb-[200px] w-full max-h-[calc(100%-400px)] sm:max-w-none z-10 px-4 sm:px-0">
          <h3 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C4C4C4] to-[#747474] text-center sm:text-left 2xl:text-[50px] 2xl:max-w-[800px] xl:text-[48px] xl:max-w-[700px] lg:max-w-[600px] lg:text-[38px] md:max-w-[600px] md:text-[36px] sm:max-w-[500px] sm:text-[30px] text-[30px]">Tổng quan về doanh nghiệp của chúng tôi</h3>
          <p className="mt-[10px] border-b-1 pb-[20px] text-center sm:text-left 2xl:max-w-[700px] 2xl:text-[16px] xl:text-[16px] xl:max-w-[700px] lg:max-w-[600px] lg:text-[14px] md:text-[13px] md:max-w-[570px] sm:max-w-[430px] sm:text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <p className="text-center sm:text-left 2xl:max-w-[680px] 2xl:text-[16px] xl:max-w-[680px] xl:text-[16px] lg:max-w-[600px] pt-[20px] lg:text-[14px] md:max-w-[570px] md:text-[13px] sm:max-w-[430px] sm:text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="min-h-screen w-full relative border-t-1 border-[#1D1C1C] z-10">
        <div className="absolute right-0 bg-white/30 blur-3xl rounded-full w-[200px] h-[200px] mt-[50px] hidden sm:block" />
        <div className="absolute w-[200px] h-[200px] right-0 bg-white/30 blur-3xl rounded-full mt-[-150px] hidden sm:block" />
        <div className="absolute z-0 opacity-25 blur-3xl rounded-full bg-radial from-[#904589] to-transparent w-[700px] h-[700px] right-[-10%] top-[-30%] hidden sm:block" />
        <div className="flex flex-col items-center justify-center mt-[50px]">
          <h1 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C4C4C4] to-[#747474] 2xl:text-[50px] xl:text-[50px] lg:text-[40px] md:text-[37px] sm:text-[40px] text-[37px] text-center">
            Dịch vụ của chúng tôi
          </h1>
          <p className="2xl:text-[17px] mt-[10px] text-[17px] text-center sm:max-w-[500px] 2xl:max-w-[700px] xl:max-w-[700px] lg:max-w-[600px] md:max-w-[570px] max-w-[430px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-[50px] justify-center gap-10">
          <ServiceCard />
          <ServiceCard highlight />
          <ServiceCard />
        </div>
      </div>
      <div className="relative overflow-hidden min-h-screen 2xl:translate-y-[-200px] xl:translate-y-[-200px] lg:translate-y-[-200px] md:translate-y-[-200px] sm">
        <Image
          src="bgg.svg"
          alt="bgg"
          width={0}
          height={0}
          className="w-[80%] absolute right-0 top-0 z-0"
        />
        <div className="relative">
          <Image
            src="img4.svg"
            alt="img4"
            width={0}
            height={0}
            className="w-[35%] absolute left-[20%] 2xl:top-[80px] z-20 xl:top-[80px] lg:top-[80px] md:top-[60px] sm:top-[40px]"
          />
          <Image
            src="img5.svg"
            alt="img5"
            width={0}
            height={0}
            className="w-[25%] absolute left-[10%] 2xl:top-[250px] z-10 xl:top-[200px] lg:top-[180px] md:top-[140px] sm:top-[100px]"
          />
          <Image
            src="img6.svg"
            alt="img6"
            width={0}
            height={0}
            className="w-[20%] absolute left-[40%] 2xl:top-[200px] z-30 xl:top-[150px] lg:top-[120px] md:top-[110px] sm:top-[70px]"
          />
        </div>
        <div className="absolute right-[8%] top-[25%] flex z-40 flex-col 2xl:mt-[-120px] 2xl:mr-[-10px] items-end xl:mt-[-160px] xl:mr-[-40px] lg:mt-[-180px] lg:mr-[-20px] md:mt-[-175px] md:mr-[10px] sm:mt-[-200px] sm:mr-[24px]">
          <h3 className="font-black text-transparent inline-block bg-clip-text bg-gradient-to-r from-[#8ED6D7] to-[#4B7171] 2xl:text-[120px] xl: text-[100px] lg:text-[80px] md:text-[60px] sm:text-[40px]">
            Lorem ipsum
          </h3>
          <p className="font-black 2xl:text-[40px] xl:text-[33px] lg:text-[27px] md:text-[20px] sm:text-[13px]">
            Lorem ipsum dolor sit amet, consectur
          </p>
          <p className="2xl:text-[16px] 2xl:max-w-[520px] text-right ml-[230px] xl:max-w-[520px] xl:text-[15px] lg:text-[13px] lg:max-w-[420px] md:text-[11px] md:max-w-[360px] sm:text-[8px] sm:max-w-[260px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="w-[200px] gap-2 h-[50px] bg-linear-to-r from-[#3F9293] to-[#8E4590] flex justify-center items-center rounded-[12px] mt-6 ml-auto">
            <p className="text-[20px] font-medium">Liên hệ ngay</p>
            <Image src="phonebold.svg" alt="phone bold" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-[-200px]">
        <div className="bg-linear-to-r from-[#3F9293] to-[#8E4590] w-[84%] h-[160px] rounded-[20px] flex flex-row items-center justify-center gap-[130px]">
          <p className="text-black flex flex-row items-center justify-center gap-[20px]">
            <span className="2xl:text-[45px] font-black bg-clip-text text-transparent bg-gradient-to-r from-[#121212] to-[#4D4D4D]">100+</span>
            <span className="2xl:text-[30px] font-bold">Lorem</span>
          </p>
          <p className="text-black flex flex-row items-center justify-center gap-[20px]">
            <span className="2xl:text-[50px] font-black bg-clip-text text-transparent bg-gradient-to-r from-[#121212] to-[#4D4D4D]">300+</span>
            <span className="2xl:text-[30px] font-bold">Ipsum dolor</span>
          </p>
          <p className="text-black flex flex-row items-center justify-center gap-[20px]">
            <span className="2xl:text-[45px] font-black bg-clip-text text-transparent bg-gradient-to-r from-[#121212] to-[#4D4D4D]">95%</span>
            <span className="2xl:text-[30px] font-bold">Dolor sit amet</span>
          </p>
          <p className="text-black flex flex-row items-center justify-center gap-[20px]">
            <span className="2xl:text-[45px] font-black bg-clip-text text-transparent bg-gradient-to-r from-[#121212] to-[#4D4D4D]">10+</span>
            <span className="2xl:text-[30px] font-bold">Lorem</span>
          </p>
        </div>
      </div>
      <div className="relative min-h-screen flex flex-row items-center w-full border-t-1 border-[#1D1C1C] mt-[100px]">
        <div className="flex flex-row items-center justify-between mx-[160px] w-full">
          <div className="flex flex-col gap-y-[20px] max-w-[50%] mt-[-100px]">
            <h3 className="2xl:text-[65px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8ED6D7] to-[#z4B7171] inline-block">Dự án đã thực hiện</h3>
            <p className="font-black 2xl:text-[38px] mt-[-20px]">Lorem ipsum dolor sit amet, consectur</p>
            <p className="2xl:max-w-[530px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button className="flex flex-row items-center justify-center bg-gradient-to-r from-[#3F9293] to-[#8E4590] w-[200px] h-[50px] rounded-[12px] gap-x-[10px]">
              <p className="text-[20px]">Tìm hiểu thêm</p>
              <Image src="arrow-circle-right-solid.svg" alt="arrow circle right" width={24} height={24} />
            </button>
          </div>
          <div className="max-w-[50%]">
            <div className="relative">
              <div className="relative w-[900px] h-[600px]">

                {images.map((src, i) => {
                  let style = ""
                  if (i === active) {
                    style = "w-[750px] left-0 top-0 z-30"
                  }
                  else if (i === (active + 1) % images.length) {
                    style = "w-[450px] left-[500px] top-[80px] z-20"
                  }
                  else {
                    style = "w-[300px] left-[650px] top-[160px] z-10"
                  }

                  return (
                    <Image
                      key={i}
                      src={src}
                      alt=""
                      width={0}
                      height={0}
                      className={`
        absolute
        transition-all duration-700 ease-in-out
        ${style}
      `}
                    />
                  )
                })}

              </div>
            </div>
            <div className="flex flex-row items-center justify-center z=100 relative gap-[20px] mr-[-670px]">
              <button className="relative z-30 mt-6 px-6 py-5 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white rounded-[12px] border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-3 transition-all duration-300 group" onClick={handlePrevious}>
                <Image
                  src="/pre.svg"
                  alt="play"
                  width={16}
                  height={15}
                  className="relative z-10"
                />
              </button>
              <p className="font-black text-[30px] mt-[20px]">
                {current + 1}/{images.length}
              </p>
              <button className="relative z-30 mt-6 px-6 py-5 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white rounded-[12px] border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-3 transition-all duration-300 group" onClick={handleNext}>
                <Image
                  src="/nex.svg"
                  alt="play"
                  width={20}
                  height={0}
                  className="relative z-10"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-t border-[#1D1C1C] min-h-screen overflow-hidden relative border-b-1 border-[#1D1C1C]">
        <h3 className="2xl:text-[65px] font-black text-transparent translate-y-[200px] bg-clip-text bg-gradient-to-r from-[#8ED6D7] to-[#4B7171] relative z-30">
          Hình ảnh về chúng tôi
        </h3>
        <InfinityGallery />
        <div className="absolute w-[4000px] h-[4000px] bg-[#121212] rounded-full left-1/2 -translate-x-1/2 mt-[-3250px] z-20 top-[-350px] " />
        <div className="absolute w-[4000px] h-[4000px] bg-[#121212] rounded-full left-1/2 -translate-x-1/2 z-20 mb-[-3250px] bottom-[-350px] " />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
