import { Button } from '../../common/Button/Button';
import map from '/mock_images/map.png';
export const LocationsComp = () => {
    return (
        <div className="container flex flex-col">
            <div className="my-[120px]">
                <img src={map} alt="" />
            </div>
            <div className="flex items-center justify-between mb-[120px]">
                <h2 className='w-[351px] text-gray-title text-[48px] font-bold font-spaceMono leading-[100%]'>Your city not listed?</h2>
                <p className='w-[445px] text-gray text-[15px] font-lexendDeca leading-[166.6%]'>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                <Button>Message Us</Button>
            </div>
        </div>
    )
}
