import { Button } from "../../../common/Button/Button"

export const Hero = () => {
    return (
        <div className="container bg-gray-title py-[153px]">
            <div className="w-[50%]">
                <h1 className="text-[56px] font-bold  font-spaceMono text-[white] leading-[100%] mb-10">Scooter sharing made simple</h1>
                <div className="ml-[110px]">
                    <p className="text-[white] text-[15px] font-lexendDeca mb-10">Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                    <Button>Get Scootin</Button>
                </div>
            </div>
        </div>
    )
}
