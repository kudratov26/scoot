import { Apple } from "../../../icons/Apple"
import { Facebook } from "../../../icons/Facebook"
import { GooglePlay } from "../../../icons/GooglePlay"
import { Instagram } from "../../../icons/Instagram"
import { Logo } from "../../../icons/Logo"
import { Twitter } from "../../../icons/Twitter"

export const Footer = () => {
    return (
        <footer className="bg-gray-title">
            <div className="container flex justify-between py-[102px]">
                <h2 className="text-[white] font-spaceMono text-[48px] leading-[100%] w-[40%]">Sign up and Scoot off today</h2>
                <div className="flex gap-[18px] items-center">
                    <div className="bg-snow flex px-[16px] py-[8px] gap-[12px] items-center rounded-[4px]">
                        <Apple />
                        <div className="flex flex-col">
                            <p className="text-[10px] font-bold font-spaceMono text-gray-title">Available on the</p>
                            <span className="text-gray-title text-[20px] font-bold font-spaceMono leading-[120%]">AppStore</span>
                        </div>
                    </div>
                    <div className="bg-snow flex px-[16px] py-[8px] gap-[12px] items-center rounded-[4px]">
                        <GooglePlay />
                        <div className="flex flex-col">
                            <p className="text-[10px] font-bold font-spaceMono text-gray-title">Get it on</p>
                            <span className="text-gray-title text-[20px] font-bold font-spaceMono leading-[120%]">GooglePlay</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#333A44]">
                <div className="container flex justify-between py-[35px]">
                    <div className="flex gap-[58.2px]">
                        <Logo fillColor="white" />
                        <ul className="flex gap-8 items-center">
                            <li className="text-[15px] font-bold text-gray"><a href="about">About</a></li>
                            <li className="text-[15px] font-bold text-gray"><a href="location">Location</a></li>
                            <li className="text-[15px] font-bold text-gray"><a href="careers">Careers</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-[30px]">
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </div>
                </div>
            </div>
        </footer>
    )
}
