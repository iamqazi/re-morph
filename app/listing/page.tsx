import NewListings from '../components/listing-section'
import NavBar from '../components/shared-ui/navbar'

export default function ListingPage() {
  return (
    <div className='bg-[#030128] min-[1440px] relative'>
      {/* Fixed Navbar with gap below */}
      <div className='absolute top-[40px] flex justify-center items-center mx-auto left-0 right-0 z-20 '>
        <NavBar />
      </div>
      <div className='pt-20'>
        <NewListings />
      </div>
    </div>
  )
}
