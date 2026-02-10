import Image from "next/image";

export default function Navbar() {
  return (
    <div className="relative z-50 flex flex-col">
      <div className="flex flex-row justify-between items-center h-[56px] bg-[#2E2E2E]">
        <div className="flex items-center justify-center ml-9">
          <div className="flex flex-row gap-2 items-center justify-center h-[40px] pr-4  border-r-1 br-[#E0E0E0]">
            <Image
              src="/phone.svg"
              alt="phone button"
              width={24}
              height={24}
            />
            <p className="text-md">+84 (853 566 556)</p>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center h-[40px] pr-4 pl-4 hidden min-[690px]:flex">
            <Image
              src="/mail.svg"
              alt="mail button"
              width={24}
              height={24}
            />
            <p className="text-md">Info.hcmc@haivantravel.com</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 mr-9">
          <Image src="/socialbutton/facebook.svg" alt="facebook button" width={24} height={24} />
          <Image src="/socialbutton/youtube.svg" alt="youtube button" width={24} height={24} />
          <Image src="/socialbutton/google.svg" alt="google button" width={24} height={24} />
          <Image src="/socialbutton/zalo.svg" alt="zalo button" width={24} height={24} />
        </div>
      </div>
      <div className="relative w-full h-[80px] flex items-center justify-between border-b-[0.1px] border-[#4F4F4F] bg-linear-to-r from-[#121212] to-[#111111]">
        <div className="ml-9">
          <Image
            src="/haivantravellogo.svg"
            alt="logo"
            width={120}
            height={120}
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-2 pr-9 hidden min-[576px]:flex">
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="text-md">Dịch vụ</p>
            <Image
              src="keyboard_arrow_down.svg"
              alt="keyboard arrow down"
              width={24}
              height={24}
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <p className="text-md">Tuyển dụng</p>
            <Image
              src="keyboard_arrow_down.svg"
              alt="keyboard arrow down"
              width={24}
              height={24}
            />
          </div>
          <div className="w-[161px] gap-2 h-[40px] bg-linear-to-r from-[#3F9293] to-[#8E4590] flex justify-center items-center rounded-[12px]">
            <p>Liên hệ tư vấn</p>
            <Image
              src="arrow-circle-right-solid.svg"
              alt="arrow right"
              width={24}
              height={24}
            />
          </div>
        </div>
        <a href="" className="pr-[30px] min-[576px]:hidden">
          <Image
            src="menu-2.svg"
            alt="menu"
            width={24}
            height={24}
            className="block min-[576px]:hidden"
          />
        </a>
      </div>
    </div>
  );
}