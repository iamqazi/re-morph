import RemorphApplicationForm from "../components/application-form";
import CTASection from "../components/cta-section";
import Footer from "../components/shared-ui/footer";

export default function Home() {
  return (
    <div className="bg-[#030128]">
      <RemorphApplicationForm />
      <div className="mt-94px">
        <CTASection />
      </div>
      <div className="mt-[94px]">
        <Footer />
      </div>
    </div>
  );
}
