import {NameInitialsAvatar} from 'react-name-initials-avatar';
import './userProfile.css';

function UserProfile(props) {
  // eslint-disable-next-line react/prop-types
  const { username, available } = props;

  return (
    <div className="user-profile">
      <div className={`online-bubble online-bubble-${available}`}></div>
      <NameInitialsAvatar
        name={username}
        size="30px"
        borderStyle='none'
        borderWidth='0px'
        bgColor='#0930A3'
        textColor='white'
        textWeight="node"
      />
    </div>
  );
}

export default UserProfile;