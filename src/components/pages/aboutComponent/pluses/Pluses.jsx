import mobility from '/mock_images/mobility.png';
import urban from '/mock_images/urban.png';

export const Pluses = () => {
    return (
        <div className="container mb-[170px] mt-[120px]">
            <div className="flex flex-col gap-[160px]">
                <div className="flex justify-between items-center gap-[220px]">
                    <div className="w-[66%]">
                        <h2 className='text-gray-title font-spaceMono text-[48px] font-bold leading-[100%]'>Mobility for the digital era</h2>
                        <p className='text-gray font-lexendDeca text-[15px] mt-[24px] mb-[40px]'>Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
                    </div>
                    <div className="w-[50%] rounded-full overflow-hidden">
                        <img className='w-full' src={mobility} alt="" />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-[220px]">
                    <div className="w-[50%] rounded-full overflow-hidden">
                        <img className='w-full' src={urban} alt="" />
                    </div>
                    <div className="w-[50%]">
                        <h2 className='text-gray-title font-spaceMono text-[48px] font-bold leading-[100%]'>Better urban living</h2>
                        <p className='text-gray font-lexendDeca text-[15px] mt-[24px] mb-[40px]'>We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
