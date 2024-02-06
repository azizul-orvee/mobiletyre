import HomePage from "@/components/HomePage";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";
import Work from "@/components/Work";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DefaultAccordion } from "@/components/DefaultAccordion";


export default function Home() {
  return (
    <>
      <main>
        <div className="bg-black">
          <HomePage />
        </div>
        <div>
          <Services />
        </div>
        <div className="bg-red-500">
          <Work />
        </div>
        <div className="bg-blue-500">
          <WhyUs />
        </div>
        <div className="bg-blue-500">
          <Testimonial />
        </div>
        <div className="text-center text-3xl ">
          Freq asking ques
        </div>
        <div className="bg-blue-500">
          <DefaultAccordion />
        </div>
        

      </main>
    </>
  );
}
