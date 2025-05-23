import ChooseUsSection from "./components/ChooseUsSection";
import ProductSection from "./components/ProductSection";
import ServiceSection from "./components/ServiceSection";
import TeamSection from "./components/TeamSection";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center py-5">Home page</h2>
      <ServiceSection />
      <ProductSection />
      <TeamSection />
      <ChooseUsSection />
      <TestimonialSection />
    </div>
  );
}
