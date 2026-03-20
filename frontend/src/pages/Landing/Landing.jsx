import React from "react";
import "./Landing.css";
import GuestNavbar from "../../components/GuestNavbar/GuestNavbar";
import Icon from "../../components/Icon";

const steps = [
  {
    icon: "explore",
    title: "Explore",
    description:
      "Discover a wide range of interactive learning modules designed for beginners and advanced learners alike. Each course includes lessons, quizzes, and hands-on activities to help you understand concepts in Web3, blockchain, and digital skills. Browse freely and choose the training path that fits your goals.",
  },
  {
    icon: "learn",
    title: "Learn",
    description:
      "Dive into engaging, structured lessons designed to make complex topics easy to understand. Each module includes videos, interactive activities, guides, and real-world examples that help you build knowledge step-by-step. Whether you're a beginner or already experienced, the LMS adapts to your pace, ensuring you learn effectively and stay motivated throughout your training journey.",
  },
  {
    icon: "earn",
    title: "Earn",
    description:
      "Collect rewards as you complete lessons, activities, and courses. Each achievement you make adds to your progress and reflects your dedication to learning. The more you accomplish, the more rewards you accumulate, giving you a clear sense of growth and motivation throughout your training journey.",
  },
];

const features = [
  {
    icon: "dashboard",
    title: "User-Friendly Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "interactive",
    title: "Interactive Courses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "quiz",
    title: "Quiz-Based Activities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "feedback",
    title: "Instant Feedback",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "progress",
    title: "Progress Tracking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "token",
    title: "Tokenized Rewards",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Landing = () => {
  return (
    <div>
      <GuestNavbar />
      <section className="hero-section">
        <div className="introduction-message">
          <h1>New to Web3? Start Your Learning Journey Here.</h1>
          <p>
            Step into the future of the internet with easy-to-follow lessons
            designed for beginners. Discover how blockchain, smart contracts,
            and decentralized technologies are shaping the digital world and how
            you can be part of it.
          </p>
        </div>
        <div className="how-it-works">
          {steps.map((step, i) => (
            <div key={i} className="step-card">
              <Icon name={step.icon} size={50} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="features">
        <h1>Features</h1>
        {features.map((feature, i) => (
          <div key={i} className="feature-card">
            <div className="feature-header">
              <Icon name={feature.icon} size={28} />
              <h3>{feature.title}</h3>
            </div>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Landing;
