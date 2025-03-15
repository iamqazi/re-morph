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
    description: "per user/month, billed annually",
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
    description: "per user/month, billed annually",
    bgImage: "/box-bottom.png",
    bgImage2: "/box-top.png",
  },
  {
    index: 3,
    id: "full-package",
    title: "Full Package",
    price: "Coming soon",
    features: [
      "Team verification tag",
      "KYC / KYB",
      "Featuring on 'Verified Builders' section",
      "Access to Web3 service provider network",
    ],
    buttonText: "Get Started",
    icon: "/icon-3.png",
    description: "per user/month, billed annually",
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
  MC:string;
  favourite: string;
}

export const newListing:newListingItem[]=[
  {
    id:'2879242',
    title:'Created by RemorphAI',
    desc:'ReMorph AI is a cutting-edge Web3 AI platform designed to empower developers, creators, and traders by combining AI-driven tools with on-chain utility.',
    img:'/newListing.svg',
    liquidity:'',
    volume:'',
    MC:'',
    favourite:''
  },
  {
    id:'2930242',
    title:'Created by RemorphAI',
    desc:'ReMorph AI is a cutting-edge Web3 AI platform designed to empower developers, creators, and traders by combining AI-driven tools with on-chain utility.',
    img:'/newListing.svg',
    liquidity:'',
    volume:'',
    MC:'',
    favourite:''
  },
  {
    id:'2879243',
    title:'Created by RemorphAI',
    desc:'ReMorph AI is a cutting-edge Web3 AI platform designed to empower developers, creators, and traders by combining AI-driven tools with on-chain utility.',
    img:'/newListing.svg',
    liquidity:'',
    volume:'',
    MC:'',
    favourite:''
  },
  {
    id:'4892189',
    title:'',
    desc:'',
    img:'/newListing.svg',
    liquidity:'$400K',
    volume:'$13.4M',
    MC:'$100M',
    favourite:'341'
  },
  {
    id:'4894389',
    title:'',
    desc:'',
    img:'/newListing.svg',
    liquidity:'$400K',
    volume:'$13.4M',
    MC:'$100M',
    favourite:'341'
  },
  {
    id:'4898089',
    title:'',
    desc:'',
    img:'/newListing.svg',
    liquidity:'$400K',
    volume:'$13.4M',
    MC:'$100M',
    favourite:'341'
  },
  {
    id:'5879242',
    title:'Created by RemorphAI',
    desc:'ReMorph AI is a cutting-edge Web3 AI platform designed to empower developers, creators, and traders by combining AI-driven tools with on-chain utility.',
    img:'/newListing.svg',
    liquidity:'',
    volume:'',
    MC:'',
    favourite:''
  },
  {
    id:'6930242',
    title:'Created by RemorphAI',
    desc:'ReMorph AI is a cutting-edge Web3 AI platform designed to empower developers, creators, and traders by combining AI-driven tools with on-chain utility.',
    img:'/newListing.svg',
    liquidity:'',
    volume:'',
    MC:'',
    favourite:''
  },
  {
    id:'9879243',
    title:'Created by RemorphAI',
    desc:'ReMorph AI is a cutting-edge Web3 AI platform designed to empower developers, creators, and traders by combining AI-driven tools with on-chain utility.',
    img:'/newListing.svg',
    liquidity:'',
    volume:'',
    MC:'',
    favourite:''
  },
]