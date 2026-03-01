import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-col w-full">

            <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20 px-6 py-12 items-center lg:items-start text-center lg:text-left">

                <div className="flex flex-col items-center lg:items-start">
                    <div className="flex gap-3 items-center">
                        <Image src="/haivantravellogo.svg" alt="logo" width={120} height={120} />
                        <span className="text-2xl font-bold max-w-[100px]">Hải Vân Travel</span>
                    </div>

                    <p className="max-w-[320px] mt-3">
                        Smile Living - Không gian sống đẳng cấp, chất lượng hoàn hảo, uy tín hàng đầu.
                    </p>

                    <div className="flex gap-2 mt-4 justify-center lg:justify-start">
                        <Image src="/socialbutton/fb.svg" alt="facebook" width={28} height={28} />
                        <Image src="/socialbutton/yt.svg" alt="youtube" width={28} height={28} />
                        <Image src="/socialbutton/ig.svg" alt="instagram" width={28} height={28} />
                        <Image src="/socialbutton/in.svg" alt="linkedin" width={28} height={28} />
                    </div>
                </div>

                <div className="space-y-3 flex flex-col items-center lg:items-start">
                    <h1 className="text-2xl font-bold">Các chi nhánh</h1>

                    <div className="flex gap-2">
                        <Image src="/Location.svg" alt="location" width={28} height={28} />
                        <span className="max-w-[300px]">
                            TRỤ SỞ CHÍNH: 154 Phan Văn Hớn, Phường Tân Thới Nhất, Quận 12, TP.HCM.
                        </span>
                    </div>

                    <div className="flex gap-2">
                        <Image src="/Location.svg" alt="location" width={28} height={28} />
                        <span className="max-w-[300px]">
                            CHI NHÁNH TÂN BÌNH: Hẻm 338/67 Âu Cơ, Phường 10, Quận Tân Bình, TP.HCM
                        </span>
                    </div>
                </div>

                <div className="space-y-3 flex flex-col items-center lg:items-start">
                    <h1 className="text-2xl font-bold">Liên hệ</h1>

                    <div className="flex gap-2">
                        <Image src="/Location.svg" alt="location" width={28} height={28} />
                        <span>154 Phan Văn Hớn P. Tân Thới Nhất Quận 12 TP.HCM</span>
                    </div>

                    <div className="flex gap-2">
                        <Image src="/Call.svg" alt="call" width={22} height={22} />
                        <span>0853 566 556</span>
                    </div>

                    <div className="flex gap-2">
                        <Image src="/Message.svg" alt="message" width={28} height={28} />
                        <span>Info.hcmc@haivantravelvn.com</span>
                    </div>
                </div>

                <div className="space-y-3 flex flex-col items-center lg:items-start">
                    <h1 className="text-2xl font-bold">Đăng ký nhận tin</h1>

                    <p className="max-w-[310px]">
                        Đăng ký để nhận thông tin mới nhất về ưu đãi và tour du lịch mới
                    </p>

                    <input
                        type="text"
                        placeholder="0853 566 556"
                        className="w-full max-w-[310px] h-[60px] bg-white rounded-[12px] pl-5 text-[20px] placeholder:text-[#868686]/40 font-semibold"
                    />

                    <button className="w-full max-w-[310px] h-[60px] bg-[#3F9293] rounded-[12px] text-[20px] font-semibold text-white">
                        Đăng ký
                    </button>
                </div>

            </div>

            <div className="w-full border-t border-white/20">
                <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 px-6 py-6 text-center lg:text-left">

                    <span>© 2025 Hải Vân Travel. Tất cả quyền được bảo lưu.</span>

                    <div className="flex gap-6 flex-col items-center gap-2 lg:flex-row lg:gap-6">
                        <p>Điều khoản sử dụng</p>
                        <p>Chính sách bảo mật</p>
                        <p>Sơ đồ trang</p>
                    </div>

                </div>
            </div>

        </div>
    );
}