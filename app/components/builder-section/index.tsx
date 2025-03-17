import Image from "next/image";
import React from "react";

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  menuItems: string[];
}

const RemorphCard: React.FC = () => {
  // Sample data for the cards
  const cardsData: CardData[] = [
    {
      id: 1,
      title: "REMORPH AI",
      subtitle: "RemorphAI",
      buttonText: "Buy Now",
      menuItems: ["KYC", "DOX", "TEAM"],
    },
    {
      id: 2,
      title: "REMORPH AI",
      subtitle: "RemorphPro",
      buttonText: "Buy Now",
      menuItems: ["KYC", "DOX", "TEAM"],
    },
    {
      id: 3,
      title: "REMORPH AI",
      subtitle: "RemorphPlus",
      buttonText: "Buy Now",
      menuItems: ["KYC", "DOX", "TEAM"],
    },
  ];

  return (
    <div className=" max-w-[1220px]  mx-auto xl:px-0 px-[16px] py-[100px]">
      <h1 className="text-white text-[24px] md:text-[48px] xl:text-[60px] font-jakarta  font-[500] mb-[48px]">
        Verified Builders
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div
      style={{
        boxShadow: "0px 0px 20px 0px #FFFFFF33 inset",
      }}
      className="rounded-[6px] border border-white/20 overflow-hidden relative bg-white/5"
    >
      {/* Background graphic curves */}
      <div className="absolute bottom-0 right-0 ">
        <Image src={"/line.png"} height={100} width={270} alt="line" />{" "}
      </div>
      <div className="absolute top-0 right-0 ">
        <Image src={"/glow-box.png"} height={200} width={400} alt="line" />{" "}
      </div>

      {/* Top logo */}
      <div className="p-5 relative z-10">
        <div className="flex items-center">
          <div className="w-12 h-12 mr-3">
            <Image src={"/logo-box.png"} height={65} width={58} alt="line" />{" "}
          </div>
          <div>
            <h2 className="text-white font-bold text-[20px]">REMORPH AI</h2>
            <p className="text-cyan-400 text-[12px]">RESHAPE VISION</p>
          </div>
        </div>
      </div>

      {/* Menu buttons */}
      <div className="flex max-w-[330px] gap-2  relative z-10 justify-between px-4 mt-4">
        {data.menuItems.map((item, index) => (
          <button
            style={{ boxShadow: "0px 0px 20px 0px #FFFFFF33 inset" }}
            key={index}
            className="cursor-pointer bg-[#7E61FF0D] w-[90px] text-[16px] h-[34px] bg-opacity-50 text-white px-6  rounded-[6px] hover:bg-opacity-70 transition duration-300"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Card title */}
      <div className="px-4 relative z-10 mb-[24px]">
        <h1 className="text-[#C5B8FF] md:text-[30px] text-[20px] font-[700] mt-[12px] ">
          {data.title}
        </h1>
        <p className="text-[#F4EAEA] text-[16px]">{data.subtitle}</p>
      </div>

      {/* Buy now button */}
      <div className="px-4 mb-[20px] relative z-10">
        <button
          style={{
            border: "1px solid #FFFFFF26",
            boxShadow: " 0px 0px 20px 0px #FFFFFF33 inset",
          }}
          className="cursor-pointer bg-white/5  text-[#DEDDFF] w-[100px] h-[34px] text-[16px] px-4 rounded-[12px] hover:bg-opacity-70 transition duration-300 "
        >
          {data.buttonText}
        </button>
      </div>
    </div>
  );
};

export default RemorphCard;
