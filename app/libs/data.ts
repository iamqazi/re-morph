import { TokenData } from "./types";

export const tokenData: TokenData[] = [
  {
    id: 1,
    token: "Remorph AI",
    price: "$0.0001307",
    age: "14D",
    txns: 24176,
    volume: "$4.4M",
    makers: 10325,
    fiveM: "14.4%",
    oneH: "-2.6%",
    sixH: "-12.5%",
    twentyFourH: "2,199%",
    liquidity: "$54K",
    mcpa: "$601K",
  },
  {
    id: 2,
    token: "Remorph AI",
    price: "$0.0001307",
    age: "14D",
    txns: 24176,
    volume: "$4.4M",
    makers: 10325,
    fiveM: "14.4%",
    oneH: "-2.6%",
    sixH: "-12.5%",
    twentyFourH: "2,199%",
    liquidity: "$54K",
    mcpa: "$601K",
  },
];
export const tokenData2: TokenData[] = [
  {
    id: 1,
    token: "Remorph AI",
    price: "$0.0001307",
    age: "14D",
    txns: 24176,
    volume: "$4.4M",
    makers: 10325,
    fiveM: "14.4%",
    oneH: "-2.6%",
    sixH: "-12.5%",
    twentyFourH: "2,199%",
    liquidity: "$54K",
    mcpa: "$601K",
  },
  {
    id: 2,
    token: "Remorph AI",
    price: "$0.0001307",
    age: "14D",
    txns: 24176,
    volume: "$4.4M",
    makers: 10325,
    fiveM: "14.4%",
    oneH: "-2.6%",
    sixH: "-12.5%",
    twentyFourH: "2,199%",
    liquidity: "$54K",
    mcpa: "$601K",
  },
];
// Fill in the rest of the data (items 3-18)
for (let i = 3; i <= 50; i++) {
  tokenData.push({
    id: i,
    token: "Remorph AI",
    price: "$0.0001307",
    age: "14D",
    txns: 24176,
    volume: "$4.4M",
    makers: 10325,
    fiveM: "14.4%",
    oneH: "-2.6%",
    sixH: "-12.5%",
    twentyFourH: "2,199%",
    liquidity: "$54K",
    mcpa: "$601K",
  });
}
export const pricingPlans = [
  {
    index: 1,
    id: "team",
    title: "Team",
    price: "$100",
    discount: "-100$",
    badge: "Best Value",
    features: ["Team verification tag", "Overview of your team"],
    buttonText: "Get Started",
    icon: "/icon-1.png",
  },
  {
    index: 2,
    id: "kyc-kyb",
    title: "KYC / KYB",
    price: "Coming soon",
    features: [
      "KYC / KYB verification tag",
      "Featuring on 'Verified Builders' section",
      "Access to Web3 service provider network",
    ],
    buttonText: "Get Started",
    icon: "/icon-2.png",
    bgImage: "/box-bottom.png",
    bgImage2: "/box-top.png",
  },
  {
    index: 3,
    id: "full-package",
    title: "ReMorpheR",
    price: "Coming soon",
    features: [
      "Team verification tag",
      "KYC / KYB",
      "Featuring on 'Verified Builders' section",
      "Access to Web3 service provider network",
    ],
    buttonText: "Get Started",
    icon: "/icon-3.png",
  },
];
export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Team Member",
    designation: "Designation",
    image: "/team-1.png", // Replace with actual image path
  },
  {
    id: 2,
    name: "Team Member",
    designation: "Designation",
    image: "/team-2.png", // Replace with actual image path
  },
  {
    id: 3,
    name: "Team Member",
    designation: "Designation",
    image: "/team-3.png", // Replace with actual image path
  },
];
export interface TimelineItem {
  id: number;
  position: "left" | "right";
  title: string;
  image: string;
  points: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    position: "right",
    title: " 📅  Q1 2025",
    image: "/roadmap.png",

    points: [
      "Expand AI tool capabilities",
      "Gofundmeme API integration",
      "AI for creating visual materials for Dex tools and Dex screener",
    ],
  },
  {
    id: 2,
    position: "left",
    title: " 📅  Q2 2025",
    image: "/roadmap.png",
    points: [
      "Develop AI-powered BD assistance",
      "Partner with more launchpads",
      "Onboard first projects into the ReMorph Fund",
    ],
  },
  {
    id: 3,
    position: "right",
    title: " 📅  Q3 2025",
    image: "/roadmap.png",
    points: [
      "Expand AI tool capabilities",
      "Gofundmeme API integration",
      "AI for creating visual materials for Dex tools and Dex screener",
    ],
  },
  {
    id: 4,
    position: "left",
    title: " 📅  Q4 2025",
    image: "/roadmap.png",
    points: [
      "Establish ReMorph AI as the #1 Web3 business development platform",
      "Expand to multi-chain support beyond Solana",
    ],
  },
];

export interface newListingItem {
  id: string;
  title: string;
  img: string;
  desc: string;
  liquidity: string;
  volume: string;
  MC: string;
  favourite: string;
}

export const newListing: newListingItem[] = [
  {
    id: "2879242",
    title: "Created by RemorphAI",
    desc: "ReMorph AI is a cutting-edge Web3 AI platform designed to empower developers, creators, and traders by combining AI-driven tools with on-chain utility.",
    img: "/newListing.svg",
    liquidity: "",
    volume: "",
    MC: "",
    favourite: "",
  },
  {
    id: "2930242",
    title: "Created by RemorphAI",
    desc: "ReMorph AI is a cutting-edge Web3 AI platform designed to empower developers, creators, and traders by combining AI-driven tools with on-chain utility.",
    img: "/newListing.svg",
    liquidity: "",
    volume: "",
    MC: "",
    favourite: "",
  },
  {
    id: "2879243",
    title: "Created by RemorphAI",
    desc: "ReMorph AI is a cutting-edge Web3 AI platform designed to empower developers, creators, and traders by combining AI-driven tools with on-chain utility.",
    img: "/newListing.svg",
    liquidity: "",
    volume: "",
    MC: "",
    favourite: "",
  },
  {
    id: "4892189",
    title: "",
    desc: "",
    img: "/newListing.svg",
    liquidity: "$400K",
    volume: "$13.4M",
    MC: "$100M",
    favourite: "341",
  },
  {
    id: "4894389",
    title: "",
    desc: "",
    img: "/newListing.svg",
    liquidity: "$400K",
    volume: "$13.4M",
    MC: "$100M",
    favourite: "341",
  },
  {
    id: "4898089",
    title: "",
    desc: "",
    img: "/newListing.svg",
    liquidity: "$400K",
    volume: "$13.4M",
    MC: "$100M",
    favourite: "341",
  },
  {
    id: "5879242",
    title: "Created by RemorphAI",
    desc: "ReMorph AI is a cutting-edge Web3 AI platform designed to empower developers, creators, and traders by combining AI-driven tools with on-chain utility.",
    img: "/newListing.svg",
    liquidity: "",
    volume: "",
    MC: "",
    favourite: "",
  },
  {
    id: "6930242",
    title: "Created by RemorphAI",
    desc: "ReMorph AI is a cutting-edge Web3 AI platform designed to empower developers, creators, and traders by combining AI-driven tools with on-chain utility.",
    img: "/newListing.svg",
    liquidity: "",
    volume: "",
    MC: "",
    favourite: "",
  },
  {
    id: "9879243",
    title: "Created by RemorphAI",
    desc: "ReMorph AI is a cutting-edge Web3 AI platform designed to empower developers, creators, and traders by combining AI-driven tools with on-chain utility.",
    img: "/newListing.svg",
    liquidity: "",
    volume: "",
    MC: "",
    favourite: "",
  },
];
// Define the transaction data type
export interface Transaction {
  id: string;
  time: string;
  type: "Buy" | "Sell";
  usd: number;
  usdProgress: number; // percentage for background indicator
  rmphAi: number;
  sol: number;
  price: number;
  maker: string;
  makerType: "orange" | "blue" | "green" | "teal";
  txnHash: string;
}

// Sample data based on the image
export const transactions: Transaction[] = [
  {
    id: "1",
    time: "3m ago",
    type: "Buy",
    usd: 199.54,
    usdProgress: 30,
    rmphAi: 678210,
    sol: 1.48,
    price: 0.00002942,
    maker: "z1yw09",
    makerType: "orange",
    txnHash: "",
  },
  {
    id: "2",
    time: "6m ago",
    type: "Buy",
    usd: 0.59,
    usdProgress: 5,
    rmphAi: 2050.76,
    sol: 0.004467,
    price: 0.00002919,
    maker: "YJ6PwL",
    makerType: "green",
    txnHash: "",
  },
  {
    id: "3",
    time: "6m ago",
    type: "Sell",
    usd: 293.25,
    usdProgress: 45,
    rmphAi: 1000000,
    sol: 2.18,
    price: 0.00002932,
    maker: "z1yw09",
    makerType: "orange",
    txnHash: "",
  },
  {
    id: "4",
    time: "10m ago",
    type: "Buy",
    usd: 66.94,
    usdProgress: 15,
    rmphAi: 225406,
    sol: 0.4995,
    price: 0.0000297,
    maker: "s824ju",
    makerType: "blue",
    txnHash: "",
  },
  {
    id: "5",
    time: "11m ago",
    type: "Buy",
    usd: 93.8,
    usdProgress: 20,
    rmphAi: 317225,
    sol: 0.6993,
    price: 0.00002957,
    maker: "89PTQf",
    makerType: "blue",
    txnHash: "",
  },
  {
    id: "6",
    time: "19m ago",
    type: "Sell",
    usd: 23.97,
    usdProgress: 10,
    rmphAi: 81507,
    sol: 0.1783,
    price: 0.00002941,
    maker: "9PSyEv",
    makerType: "orange",
    txnHash: "",
  },
  {
    id: "7",
    time: "19m ago",
    type: "Buy",
    usd: 26.55,
    usdProgress: 10,
    rmphAi: 89838,
    sol: 0.1975,
    price: 0.00002955,
    maker: "pctafg",
    makerType: "blue",
    txnHash: "",
  },
  {
    id: "8",
    time: "19m ago",
    type: "Sell",
    usd: 691.18,
    usdProgress: 85,
    rmphAi: 2300000,
    sol: 5.14,
    price: 0.00003005,
    maker: "9W1bbj",
    makerType: "teal",
    txnHash: "",
  },
  {
    id: "9",
    time: "22m ago",
    type: "Sell",
    usd: 53.02,
    usdProgress: 15,
    rmphAi: 172361,
    sol: 0.3947,
    price: 0.00003076,
    maker: "DfqfWY",
    makerType: "orange",
    txnHash: "",
  },
  {
    id: "10",
    time: "29m ago",
    type: "Buy",
    usd: 201.25,
    usdProgress: 30,
    rmphAi: 854825,
    sol: 1.5,
    price: 0.00003073,
    maker: "HxT4u1",
    makerType: "orange",
    txnHash: "",
  },
  {
    id: "11",
    time: "35m ago",
    type: "Buy",
    usd: 150.75,
    usdProgress: 25,
    rmphAi: 510000,
    sol: 1.12,
    price: 0.00002954,
    maker: "j7Kd2P",
    makerType: "green",
    txnHash: "",
  },
  {
    id: "12",
    time: "42m ago",
    type: "Sell",
    usd: 310.56,
    usdProgress: 45,
    rmphAi: 1050000,
    sol: 2.31,
    price: 0.00002958,
    maker: "m8Xr3T",
    makerType: "blue",
    txnHash: "",
  },
  {
    id: "13",
    time: "45m ago",
    type: "Buy",
    usd: 42.3,
    usdProgress: 12,
    rmphAi: 143000,
    sol: 0.315,
    price: 0.00002959,
    maker: "p9Lc6F",
    makerType: "teal",
    txnHash: "",
  },
  {
    id: "14",
    time: "50m ago",
    type: "Buy",
    usd: 75.85,
    usdProgress: 18,
    rmphAi: 257000,
    sol: 0.565,
    price: 0.00002952,
    maker: "w4Vg8H",
    makerType: "orange",
    txnHash: "",
  },
  {
    id: "15",
    time: "55m ago",
    type: "Sell",
    usd: 127.2,
    usdProgress: 22,
    rmphAi: 430000,
    sol: 0.95,
    price: 0.00002958,
    maker: "z5Bn9J",
    makerType: "blue",
    txnHash: "",
  },
];
