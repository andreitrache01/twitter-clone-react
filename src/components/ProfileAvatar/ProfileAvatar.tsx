import "./ProfileAvatar.css";

interface Props {
  image: string;
}

const ProfileAvatar = ({ image }: Props) => {
  return (
    <div className="profile-picture">
      <img src={`src/assets/${image}`} alt="" />
    </div>
  );
};

export default ProfileAvatar;
