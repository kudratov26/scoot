import { Logo } from "../../../icons/Logo"
import { Button } from "../../common/Button/Button"

export const Navbar = () => {
    return (
        <div className="container flex justify-between items-center py-[22px]">
            <div className="flex gap-[58.2px]">
                <Logo fillColor="red" />
                <ul className="flex gap-8 items-center">
                    <li className="text-[15px] font-bold text-gray"><a href="/about">About</a></li>
                    <li className="text-[15px] font-bold text-gray"><a href="/location">Location</a></li>
                    <li className="text-[15px] font-bold text-gray"><a href="/careers">Careers</a></li>
                </ul>
            </div>
            <div className="">
                <Button>Get Scootin</Button>
            </div>
        </div>
    )
}