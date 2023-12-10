import { Head } from "../../layout/Head/Head";
import { FAQs } from "./faqs/FAQs";
import { OurValues } from "./our values/OurValues";
import { Pluses } from "./pluses/Pluses";
import about from '/mock_images/about-img.png'

export const AboutComp = () => {
    return (
        <div>
            <Head backImg={about}>About</Head>
            <Pluses />
            <h2 className="text-gray-title text-center text-[48px] font-spaceMono font-bold mb-[100px]">Our values</h2>
            <OurValues />
            <FAQs />
        </div>
    )
}
