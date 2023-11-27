/* eslint-disable no-unused-vars */
import {NameInitialsAvatar} from 'react-name-initials-avatar';
import './UserProfile.css';

function UserProfile(props) {
  // eslint-disable-next-line react/prop-types
  const { username, available, color, size, textSize, ...restProps } = props;

  return (
    <div className="user-profile">
      <div className={`online-bubble online-bubble-${available}`}></div>
      <NameInitialsAvatar
        name={username || "Placeholder"}
        size={size || "30px"}
        borderStyle='none'
        borderWidth='0px'
        bgColor={color || "#000000"}
        textColor='white'
        textWeight="node"
        textSize={textSize || "16px"}
      />
    </div>
  );
}

export default UserProfile;