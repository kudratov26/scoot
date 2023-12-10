import { Button } from "../../../common/Button/Button"

export const Jobs = () => {
    return (
        <div className="container flex flex-col gap-6 mb-[160px]">
            <div className="pl-10 pr-16 py-8 flex justify-between items-center bg-snow">
                <div className="flex flex-col gap-2">
                    <h3 className="text-gray-title text-[24px] font-bold font-spaceMono">General Manager</h3>
                    <span className="text-gray-title text-[15px] font-lexendDeca">Jakarta, Indonesia</span>
                </div>
                <Button>Apply</Button>
            </div>
            <div className="pl-10 pr-16 py-8 flex justify-between items-center bg-snow">
                <div className="flex flex-col gap-2">
                    <h3 className="text-gray-title text-[24px] font-bold font-spaceMono">UI/UX Designer</h3>
                    <span className="text-gray-title text-[15px] font-lexendDeca">Yokohama, Japan</span>
                </div>
                <Button>Apply</Button>
            </div>
            <div className="pl-10 pr-16 py-8 flex justify-between items-center bg-snow">
                <div className="flex flex-col gap-2">
                    <h3 className="text-gray-title text-[24px] font-bold font-spaceMono">Blog Content Copywriter</h3>
                    <span className="text-gray-title text-[15px] font-lexendDeca">New York, United States</span>
                </div>
                <Button>Apply</Button>
            </div>
            <div className="pl-10 pr-16 py-8 flex justify-between items-center bg-snow">
                <div className="flex flex-col gap-2">
                    <h3 className="text-gray-title text-[24px] font-bold font-spaceMono">Graphic Designer</h3>
                    <span className="text-gray-title text-[15px] font-lexendDeca">New York, United States</span>
                </div>
                <Button>Apply</Button>
            </div>
            <div className="pl-10 pr-16 py-8 flex justify-between items-center bg-snow">
                <div className="flex flex-col gap-2">
                    <h3 className="text-gray-title text-[24px] font-bold font-spaceMono">Fleet Supervisor</h3>
                    <span className="text-gray-title text-[15px] font-lexendDeca">Jakarta, Indonesia</span>
                </div>
                <Button>Apply</Button>
            </div>
            <div className="pl-10 pr-16 py-8 flex justify-between items-center bg-snow">
                <div className="flex flex-col gap-2">
                    <h3 className="text-gray-title text-[24px] font-bold font-spaceMono">UX Analyst</h3>
                    <span className="text-gray-title text-[15px] font-lexendDeca">London, United Kingdom </span>
                </div>
                <Button>Apply</Button>
            </div>

        </div>
    )
}
