
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import finance from '../../assets/bag.svg';
import technology from '../../assets/image2.svg';
import retail from '../../assets/image3.svg';
import education from '../../assets/image4.svg';
import media from '../../assets/image5.svg';
import health from '../../assets/healthcare.png';
import style from './Click.module.css';

const Click = () => {
  const [selectedCategory, setSelectedCategory] = useState("Healthcare");
  const [isMobileView, setIsMobileView] = useState(false);

  const categories = [
    { name: "Healthcare", icon: health },
    { name: "Finance", icon: finance },
    { name: "Technology", icon: technology },
    { name: "Retail and E-commerce", icon: retail },
    { name: "Education", icon: education },
    { name: "Media and Entertainment", icon: media },
  ];

  const content = {
    Healthcare: [
      {
        title: "Virtual Health Assistant",
        description:
          "Chatbots powered by GPT can serve as virtual health assistants, answering patient queries, providing medical advice, and booking appointments 24/7. This significantly improves patient engagement and frees up healthcare staff to focus on more critical tasks.",
      },
      {
        title: "Health Monitoring and Alerts",
        description:
          "AI models can analyze real-time health data from wearable devices to monitor patient health, alerting healthcare providers if any irregularities or concerning trends are detected.",
      },
      {
        title: "Patient Diagnosis Support",
        description:
          "AI can analyze patient symptoms and medical history to suggest potential diagnoses, helping doctors make informed decisions quickly.",
      },
    ],
    Finance: [
      {
        title: "Fraud Detection",
        description:
          "AI can analyze transaction data in real-time to identify and prevent fraudulent activities, ensuring secure financial operations.",
      },
      {
        title: "Personalized Financial Advice",
        description:
          "AI-driven tools provide users with tailored financial advice based on their spending habits, income, and savings goals.",
      },
    ],
    Technology: [
      {
        title: "Predictive Analytics",
        description:
          "AI models predict future trends based on current and historical data, enabling businesses to stay ahead of the curve.",
      },
    ],
    Education: [
      {
        title: "Personalized Learning",
        description:
          "AI tailors educational content to individual student needs, enhancing the learning experience.",
      },
    ],
    "Retail and E-commerce": [
      {
        title: "Recommendation Systems",
        description:
          "AI algorithms suggest products to users based on their preferences, boosting sales and customer satisfaction.",
      },
    ],
    "Media and Entertainment": [
      {
        title: "Content Personalization",
        description:
          "AI curates personalized content recommendations, increasing user engagement on platforms.",
      },
    ],
  };

  // Detect screen width and update `isMobileView`
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={style.aiexamples}>
      <div className={style.sidebar}>
        <h2>Example of AI Implementation</h2>
        <p>Discover how AI can revolutionize various industries:</p>
        <ul>
          {categories.map((category) => (
            <div key={category.name}>
              <li
                className={
                  selectedCategory === category.name
                    ? `${style.listItem} ${style.active}`
                    : style.listItem
                }
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.name ? "" : category.name
                  )
                }
                style={{
                  color: selectedCategory === category.name ? "black" : "grey",
                }}
              >
                <span
                  className={style.icon}
                  style={{
                    filter:
                      selectedCategory === category.name
                        ? "none"
                        : "grayscale(100%)",
                  }}
                >
                  <img src={category.icon} alt={`${category.name} Icon`} />
                </span>{" "}
                {category.name}
              </li>
              {isMobileView && selectedCategory === category.name && (
                <div className={style.accordionContent}>
                  {content[category.name].map((item, index) => (
                    <div className={style.card} key={index}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
      {!isMobileView && (
        <div className={style.content}>
          {content[selectedCategory].map((item, index) => (
            <div className={style.card} key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Click;

