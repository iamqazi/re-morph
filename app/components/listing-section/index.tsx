import { newListing } from "@/app/libs/data";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { IoIosArrowDropright } from "react-icons/io";

export default function NewListings() {
  return (
    <div className=" text-white mt-[50px] max-w-[1220px] mx-auto xl:px-0 px-[16px]">
      <h3 className="mb-[48px] mt-[50px] xl:text-6xl text-5xl  text-center lg:text-start font-jakarta ">
        New listings
      </h3>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12 justify-items-center">
        {newListing.map((el) => {
          return (
            <article
              key={el.id}
              className="grid grid-rows-[auto_1fr] xl:max-w-[384px] lg:max-w-[354px] md:max-w-full  w-full border-[#c5b9f6]/20 border-1 rounded-[18px] shadow-[inset_0px_0px_55px_0px_#C5B9F626] "
            >
              <div className="relative sm:m-[12px] m-2 ">
                <Image
                  src={el.img}
                  alt="image"
                  width={371}
                  height={261}
                  className="bg-no-repeat w-full"
                />
                <span className=" absolute top-0 right-0 rounded-2xl rounded-tl-none rounded-br-none bg-gradient-to-b from-[#ffffff]/10 to-[#ffffff]/5 flex text-white md:px-[20px] sm:px-[15px] px-[10px] md:py-[15px] sm:py-[10px] py-[8px] border border-white/12 gap-2 items-center ">
                  <BiHeart className="text-xl" /> 341
                </span>
              </div>
              <div className="lg:mx-[28px] sm:mx-[18px] mx-[14px] mb-[8px] grid grid-rows-[1fr_auto] ">
                <div>
                  <div className="md:mb-[24px] sm:mb-[18px] mb-[10px] flex gap-2 ">
                    <span
                      className={`rounded-[6px] lg:py-[6px] py-[3px] w-full text-center ${
                        el.desc
                          ? "bg-[#7E61FF]"
                          : "bg-transparent shadow-[inset_0px_0px_8px_0px_#ffffff1A] border border-white/15 "
                      } `}
                    >
                      KYC
                    </span>
                    <span
                      className={`rounded-[6px] lg:py-[6px] py-[3px] w-full text-center ${
                        el.desc
                          ? "bg-[#1BA4E5]"
                          : "bg-transparent shadow-[inset_0px_0px_8px_0px_#ffffff1A] border border-white/15 "
                      } `}
                    >
                      DOX
                    </span>
                    <span
                      className={`rounded-[6px]  lg:py-[6px] py-[3px] w-full text-center ${
                        el.desc
                          ? "bg-[#94209D]"
                          : "bg-transparent shadow-[inset_0px_0px_8px_0px_#ffffff1A] border border-white/15 "
                      } `}
                    >
                      TEAM
                    </span>
                  </div>
                  {el.title && (
                    <h5 className="font-jakarta text-[#C5B9F6] xl:text-[27px] md:text-2xl text-xl font-[700] mb-2 ">
                      {el.title}
                    </h5>
                  )}
                  {el.desc && (
                    <p className=" text-[#ffffff]/70 text-sm ">{el.desc}</p>
                  )}
                  <div className="  gap-6 justify-between flex ">
                    {el.liquidity && (
                      <p className="text-lg">LIQUIDITY: {el.liquidity}</p>
                    )}
                    <div className="flex flex-col items-end ">
                      {el.MC && (
                        <span className="flex justify-center  gap-1 lg:text-xl text-lg uppercase">
                          <Image
                            alt="ethereum"
                            width={20}
                            height={20}
                            src={"/ethereum.svg"}
                          />{" "}
                          {el.MC} MC
                        </span>
                      )}
                      <span className="sm:text-sm text-[12px]">
                        {el.volume && `Volume: ${el.volume}`}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  style={{ boxShadow: "0px 0px 20px 0px #FFFFFF33 inset" }}
                  className="cursor-pointer text-white duration-300 backdrop-blur-sm hover:-translate-y-1 bg-[#7E61FF0D] h-fi flex gap-2 items-center justify-center rounded-xl w-full py-[6px] lg:my-[24px] md:my-[18px] sm:my-[14px] my-[12px] font-[600] text-lg md:hover:scale-105 transition-all "
                >
                  Buy Now <IoIosArrowDropright className="text-xl" />{" "}
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
