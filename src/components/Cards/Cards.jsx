/* eslint-disable react/prop-types */
import './Cards.css'; // Ensure this CSS file exists and contains the styles
import UserProfile from '../UserProfile/UserProfile'; // Assuming UserProfile is in the same directory
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cards = (props) => {
  const { id, title, tags, user } = props; // Destructuring props
  return (
    <div className="feature-card">
      <div className="feature-card-header">
        <span className="feature-card-id">{id}</span>
        <UserProfile username={user.name} available={user.available}/> {/* Using UserProfile component */}
      </div>
      <div className="feature-card-title">{title}</div>
      <div className="feature-tags-and-icon">
        <div className="feature-card-tags">
          {tags.map((tag, index) => (
            <div className='feature-request-btn-container' key={index}>
              <FontAwesomeIcon icon="fa-solid fa-circle" style={{color: "#bec2c8",}} />
              <span className="feature-request-btn">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
