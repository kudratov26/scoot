import usingPhone from '/mock_images/phone-using.png';
import city from '/mock_images/city.png';
import zeroPayment from '/mock_images/zero-payment.png';
import { Button } from '../../../common/Button/Button'
export const Advantages = () => {
    return (
        <div className="container mb-[170px]">
            <div className="flex flex-col gap-[160px]">
                <div className="flex justify-between items-center gap-[220px]">
                    <div className="w-[66%]">
                        <h2 className='text-gray-title font-spaceMono text-[48px] font-bold leading-[100%]'>Easy to use riding telemetrys</h2>
                        <p className='text-gray font-lexendDeca text-[15px] mt-[24px] mb-[40px]'>The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                        <Button>Learn More</Button>
                    </div>
                    <div className="w-[50%] rounded-full overflow-hidden">
                        <img className='w-full' src={usingPhone} alt="" />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-[220px]">
                    <div className="w-[50%] rounded-full overflow-hidden">
                        <img className='w-full' src={city} alt="" />
                    </div>
                    <div className="w-[50%]">
                        <h2 className='text-gray-title font-spaceMono text-[48px] font-bold leading-[100%]'>Coming to a city near you</h2>
                        <p className='text-gray font-lexendDeca text-[15px] mt-[24px] mb-[40px]'>Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
                        <Button>Learn More</Button>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-[220px]">
                    <div className="w-[50%]">
                        <h2 className='text-gray-title font-spaceMono text-[48px] font-bold leading-[100%]'>Zero hassle payments</h2>
                        <p className='text-gray font-lexendDeca text-[15px] mt-[24px] mb-[40px]'>Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
                        <Button>Learn More</Button>
                    </div>
                    <div className="w-[50%] rounded-full overflow-hidden">
                        <img className='w-full' src={zeroPayment} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
