import { useState } from "react";
import "./HomePage.css";
import TweetSection from "../../components/TweetSection/TweetSection";
import FeedSection from "../../components/FeedSection/FeedSection";

const HomePage = () => {
  let [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="homepage">
      <p className="title">Home</p>
      <div className="tabs">
        <div className="tab-box" onClick={() => setActiveTabIndex(0)}>
          <div
            className={`tab ${
              activeTabIndex === 0 ? "custom-underline" : "inactive"
            }`}
          >
            For you
          </div>
        </div>
        <div className="tab-box" onClick={() => setActiveTabIndex(1)}>
          <div
            className={`tab ${
              activeTabIndex === 1 ? "custom-underline" : "inactive"
            }`}
          >
            Following
          </div>
        </div>
      </div>
      {/* Tweet section */}
      <TweetSection />
      {/* Feed section */}
      <FeedSection />
    </div>
  );
};

export default HomePage;
