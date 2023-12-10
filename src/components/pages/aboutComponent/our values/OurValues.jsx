import tech from '/public/mock_images/tech.png'
import integrity from '/mock_images/integrity.png'
import community from '/mock_images/community.png'
export const OurValues = () => {
    return (
        <div className="container mb-[120px]">
            <div className="flex gap-[30px]">
                <div className="flex flex-col items-center w-1/3">
                    <div className="relative">
                        <img src={tech} alt="" />
                        <span className="absolute -bottom-[40px] right-[35%] px-[24px] py-[20px] bg-orange rounded-[50%] text-gray-title text-center font-spaceMono text-[20px] font-bold">01</span>
                    </div>
                    <h3 className="text-gray-title text-[24px] font-spaceMono font-bold text-center mt-[58px] mb-[22px]">Our tech</h3>
                    <p className="text-gray text-[15px] font-lexendDeca text-center">We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
                </div>
                <div className="flex flex-col items-center w-1/3">
                    <div className="relative">
                        <img src={integrity} alt="" />
                        <span className="absolute -bottom-[40px] right-[35%] px-[24px] py-[20px] bg-orange rounded-[50%] text-gray-title text-center font-spaceMono text-[20px] font-bold">02</span>
                    </div>
                    <h3 className="text-gray-title text-[24px] font-spaceMono font-bold text-center mt-[58px] mb-[22px]">Our integrity</h3>
                    <p className="text-gray text-[15px] font-lexendDeca text-center">We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
                </div>
                <div className="flex flex-col items-center w-1/3">
                    <div className="relative">
                        <img src={community} alt="" />
                        <span className="absolute -bottom-[40px] right-[35%] px-[24px] py-[20px] bg-orange rounded-[50%] text-gray-title text-center font-spaceMono text-[20px] font-bold">03</span>
                    </div>
                    <h3 className="text-gray-title text-[24px] font-spaceMono font-bold text-center mt-[58px] mb-[22px]">Our community</h3>
                    <p className="text-gray text-[15px] font-lexendDeca text-center">We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
                </div>
            </div>
        </div>
    )
}
