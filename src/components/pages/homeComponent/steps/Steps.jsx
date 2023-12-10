import { MobileApp } from "../../../../icons/MobileApp"
import { Ride } from "../../../../icons/Ride"
import { Scooter } from "../../../../icons/Scooter"

export const Steps = () => {
    return (
        <div className="container mt-[160px] mb-[200px]">
            <div className="relative flex gap-[30px]">
                <div className="flex flex-col w-[33.3%]">
                    <MobileApp />
                    <h3 className="text-gray-title font-spaceMono text-[24px] font-bold leading-[28px] mt-[40px] mb-[27px]">Locate with app</h3>
                    <p className="text-gray font-lexendDeca text-[15px] leading-[25px]">Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
                </div>
                <div className="flex flex-col w-[33.3%]">
                    <Scooter />
                    <h3 className="text-gray-title font-spaceMono text-[24px] font-bold leading-[28px] mt-[40px] mb-[27px]">Pick your scooter</h3>
                    <p className="text-gray font-lexendDeca text-[15px] leading-[25px]">We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
                </div>
                <div className="flex flex-col w-[33.3%]">
                    <Ride />
                    <h3 className="text-gray-title font-spaceMono text-[24px] font-bold leading-[28px] mt-[40px] mb-[27px]">Enjoy the ride</h3>
                    <p className="text-gray font-lexendDeca text-[15px] leading-[25px]">Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
                </div>
                <div className="absolute w-[150%] h-5 bg-[#e5ecf4] right-[30%] top-[40px] -z-10"></div>
            </div>
        </div>
    )
}
