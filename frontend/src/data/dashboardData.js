import bitcoin from "../assets/bitcoin.webp";

export const widgets = [
  {
    id: 1,
    icon: "courses-progress",
    title: "Courses in Progress",
    value: 3,
    iconBg: "#9225EB",
  },
  {
    id: 2,
    icon: "token-balance",
    title: "Token Balance",
    valueIcon: bitcoin,
    value: 1250,
    iconBg: "#FFBB0D",
  },
];

export const courses = [
  {
    id: 1,
    title: "Web3 Fundamentals",
    description:
      "Learn the core concepts of Web3, decentralization, and how blockchain technology is reshaping the internet.",
    progress: 75,
  },
  {
    id: 2,
    title: "Smart Contract Development",
    description:
      "Build and deploy smart contracts on Ethereum using Solidity with real-world use cases.",
    progress: 40,
  },
  {
    id: 3,
    title: "DeFi Essentials",
    description:
      "Understand decentralized finance protocols, liquidity pools, and yield farming strategies.",
    progress: 20,
  },
];
