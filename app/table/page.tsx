import RemorphCard from "../components/builder-section";
import { TokenTable } from "../components/trending-section";
import { tokenData } from "../libs/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-950 p-4 bg-[#030128]">
      <TokenTable data={tokenData} itemsPerPage={10} />
      <RemorphCard />
    </div>
  );
}
