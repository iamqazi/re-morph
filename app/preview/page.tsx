import GraphSection from "../components/graph-section";
import GraphFooter from "../components/shared-ui/graph-cta";
import NavBar from "../components/shared-ui/navbar";
import { TokenTable } from "../components/trending-section";
import { tokenData } from "../libs/data";

export default function Graphpage() {
  return (
    <div className="bg-[#040128] min-[1440px] relative">
      {/* Fixed Navbar with gap below */}
      <div className="absolute top-[40px] xl:px-0 px-[16px] flex justify-center items-center mx-auto left-0 right-0 z-20">
        <NavBar />
      </div>
      <div className="pt-32">
        <GraphSection />
      </div>
      <TokenTable data={tokenData} itemsPerPage={10} />
      <GraphFooter />
    </div>
  );
}
