import ChooseUsSection from "./components/ChooseUsSection";
import ProductSection from "./components/ProductSection";
import ServiceSection from "./components/ServiceSection";
import TeamSection from "./components/TeamSection";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center py-5">Home page</h2>
      <section className="py-8">
        <ServiceSection />
        <div></div>
      </section>
      <section className="py-8">
        <ProductSection />
        <div></div>
      </section>
      <section className="py-8">
        <TeamSection />
        <div></div>
      </section>
      <section className="py-8">
        <ChooseUsSection />
        <div></div>
      </section>
      <section className="py-8">
        <TestimonialSection />
        <div></div>
      </section>
    </div>
  );
}
