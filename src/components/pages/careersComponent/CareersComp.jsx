import { Button } from "../../common/Button/Button"
import { Head } from "../../layout/Head/Head"
import { Jobs } from "./jobs/Jobs";
import { JoinUs } from "./joinUs/JoinUs";
import headerImg from '/mock_images/header-img.png'
import mission from '/mock_images/mission.png';

export const CareersComp = () => {
    return (
        <div>
            <Head backImg={headerImg}>Careers</Head>
            <div className="container mt-[170px] mb-[120px]">
                <div className="flex justify-between items-center gap-[220px]">
                    <div className="w-[56%]">
                        <h2 className='text-gray-title font-spaceMono text-[48px] font-bold leading-[100%]'>Care to join our mission?</h2>
                        <p className='text-gray font-lexendDeca text-[15px] mt-[24px] mb-[40px]'>We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
                        <Button>Say Hello</Button>
                    </div>
                    <div className="w-[50%] rounded-full overflow-hidden">
                        <img className='w-full' src={mission} alt="" />
                    </div>
                </div>
            </div>
            <JoinUs />
            <Jobs />
        </div>
    )
}
