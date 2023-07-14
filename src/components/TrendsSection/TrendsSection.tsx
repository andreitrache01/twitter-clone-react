import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import "./TrendsSection.css";

const Trends = () => {
  let trends = [1, 2, 3, 4, 5];
  let follows = [1, 2, 3, 4];

  return (
    <div className="trends">
      <div className="input-group mb-3 trends-search">
        <span className="input-group-text" id="basic-addon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </span>
        <input
          type="text"
          className="input"
          placeholder="Search Twitter"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="get-verified container-style">
        <div className="get-verified-title">
          <p>Get Verified</p>
        </div>
        <div className="get-verified-description">
          <p>Subscribe to unlock new features.</p>
        </div>
        <div className="verified-button">
          <button type="button" className="btn custom-button">
            <span className="text-button">Get Verified</span>
          </button>
        </div>
      </div>
      <div className="trends-for-you container-style">
        <div className="trends-title">Trends for you</div>
        {trends.map((trend) => (
          <div className="trend" key={trend}>
            <div className="trend-category">
              <span>Trending</span>
              <div className="icon-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
            </div>
            <div className="trend-name">Andrew Tate</div>
            <div className="trend-tweets">30.9K Tweets</div>
          </div>
        ))}
      </div>
      <div className="who-to-follow container-style">
        <div className="follow-title">Who to follow</div>
        {follows.map((follow) => (
          <div className="follow-profile" key={follow}>
            <ProfileAvatar image="duck.jpeg" />
            <div className="user-details">
              <p className="username">Andrei Trache</p>
              <p className="user-tag">@AndreiTrac25206</p>
            </div>
            <div className="follow-button">
              <button type="button" className="btn custom-button">
                <span>Follow</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
