import { Logo } from "../../../icons/Logo"
import { Button } from "../../common/Button/Button"

export const Navbar = () => {
    return (
        <div className="container flex justify-between items-center py-[22px]">
            <div className="flex gap-[58.2px]">
                <Logo />
                <ul className="flex gap-8 items-center">
                    <li className="text-[15px] font-bold text-gray">About</li>
                    <li className="text-[15px] font-bold text-gray">Location</li>
                    <li className="text-[15px] font-bold text-gray">Careers</li>
                </ul>
            </div>
            <div className="">
                <Button>Get Scootin</Button>
            </div>
        </div>
    )
}