import bitcoin from "../assets/bitcoin.webp";

export const profileUser = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@email.com",
  contactNumber: "+63 123 456 7890",
  gender: "Male",
  birthdate: "1999-05-12",
  country: "Philippines",
  timezone: "Asia/Manila",
  description: "",
};

export const profileStats = [
  {
    id: 1,
    label: "Tokens Earned",
    value: "10,000",
    icon: bitcoin,
    isImg: true,
  },
  {
    id: 2,
    label: "Courses Enrolled",
    value: 5,
    icon: "courses-progress",
    iconBg: "#9225EB",
  },
  {
    id: 3,
    label: "Courses Completed",
    value: 2,
    icon: "courses-progress",
    iconBg: "#16a34a",
  },
];

export const profileBadges = [
  { id: 1, label: "First Quiz", icon: "🏅" },
  { id: 2, label: "Course Finisher", icon: "🎓" },
  { id: 3, label: "Token Earner", icon: "🪙" },
  { id: 4, label: "Web3 Pioneer", icon: "🚀" },
];
