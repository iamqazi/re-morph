import RemorphCard from "../components/builder-section";
import NewListings from "../components/listing-section";
import SearchBar from "../components/search-bar";
import Footer from "../components/shared-ui/footer";
import NavBar from "../components/shared-ui/navbar";
import { TokenTable } from "../components/trending-section";
import { tokenData } from "../libs/data";

export default function ListingPage() {
  return (
    <div className="bg-[#030128] min-[1440px] relative ">
      {/* Fixed Navbar with gap below */}
      <div className="absolute top-[40px] flex justify-center items-center mx-auto left-0 right-0 z-20 ">
        <NavBar />
      </div>
      <div className="pt-20">
        <SearchBar />
        <NewListings />
        <RemorphCard />
      </div>
      <TokenTable data={tokenData} itemsPerPage={10} />
      <Footer />
    </div>
  );
}
