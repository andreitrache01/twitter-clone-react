import TweetComponent from "../TweetComponent/TweetComponent";
import "./FeedSection.css";

const FeedSection = () => {
  let tweets = [
    {
      index: 1,
      profileImage: "duck.jpeg",
      profileName: "Andrei Trache",
      profileTag: "AndreiTrac25206",
      timeSincePosted: "1d",
      tweetDescription: `Just completed my morning swim. Next up: a relaxing afternoon on the pond. The life of a duck is quack-tacular! #DuckLife #FeathersFly 🦆🌊`,
    },
    {
      index: 2,
      profileImage: "musk.webp",
      profileName: "Elon Musk",
      profileTag: "elonmusk",
      timeSincePosted: "1w",
      tweetDescription: `Thrusters are go for Starship! Next stop, Mars. Stay tuned for a mind-blowing experience as we revolutionize interplanetary travel.
      
#SpaceX #MarsOrBust 🚀🔴👽`,
    },
    {
      index: 3,
      profileImage: "tate.avif",
      profileName: "Andrew Tate",
      profileTag: "Cobratate",
      timeSincePosted: "2h",
      tweetDescription: `Just wrapped up a punishing 5-hour workout and business strategy session - all before noon.

Remember, discipline is just choosing between what you want now and what you want most. Stay focused, take control, and make every moment count. Success isn't stumbled upon, it's constructed with unrelenting determination and a mind of steel. Keep chasing greatness, my friends.

#EmbraceTheGrind #NoExcuses #FourTimesWorldChampion 💪🔥🏆`,
    },
    {
      index: 4,
      profileImage: "goggins.jpeg",
      profileName: "David Goggins",
      profileTag: "davidgoggins",
      timeSincePosted: "1d",
      tweetDescription: `Just got in another 20 miles before sunrise. Pain is just the body's test of your mental fortitude. This is where growth happens. It's not about outrunning others, it's about outrunning who you used to be.
      
Stay hard, embrace suffering, and let it mold you into the strongest version of yourself. Remember, there are no shortcuts in the journey to greatness.

#Canthurtme #Stayhard 💪🏿🌅`,
    },
  ];
  return (
    <div className="feed">
      {/* There we need a loop through posts */}
      {tweets.map((tweet) => (
        <TweetComponent {...tweet} />
      ))}
    </div>
  );
};

export default FeedSection;
