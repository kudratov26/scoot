import { Advantages } from "./advantages/Advantages"
import { Hero } from "./hero/Hero"
import { Steps } from "./steps/Steps"

export const HomeComp = () => {
    return (
        <div className="">
            <Hero />
            <Steps />
            <Advantages />
        </div>
    )
}
