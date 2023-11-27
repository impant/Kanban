/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Cards.css'; // Ensure this CSS file exists and contains the styles
import UserProfile from '../UserProfile/UserProfile'; // Assuming UserProfile is in the same directory
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCircleHalfStroke, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { LuCircleDashed } from "react-icons/lu";
import { BsExclamationSquareFill } from "react-icons/bs";
import { BiSignal3, BiSignal4, BiSignal5 } from "react-icons/bi";

const geticon = (parameter) => {
  if(parameter==="in progress"){
    return (
      <FaCircleHalfStroke color="#f1ca4b" />
    )
  }
  else if(parameter==="done"){
    return (
      <FaCircleCheck color="#5e6ad2" />
    )
  }
  else if(parameter==="todo"){
    return (
      <FaRegCircle color="#bec2c8" />
    )
  }
  else if(parameter==="canceled"){
    return (
      <FaCircleXmark color="#93a1b2" />
    )
  }
  else if(parameter==="backlog"){
    return (
      <LuCircleDashed  color="#93a1b2" />
    )
  }
  else if(parameter==="no priority"){
    return (
      <FontAwesomeIcon icon="fa-solid fa-ellipsis" style={{color: "#6b6f76",}} />
    )
  }
  else if(parameter==="urgent"){
    return (
      <BsExclamationSquareFill color="#6b6f76" />
    )
  }
  else if(parameter==="low"){
    return (
      <BiSignal3 color="#6b6f76" />
    )
  }
  else if(parameter==="medium"){
    return (
      <BiSignal4 color="#6b6f76" />
    )
  }
  else if(parameter==="high"){
    return (
      <BiSignal5 color="#6b6f76" />
    )
  }
}

const Cards = (props) => {
  const { id, title, tags, user, group, priority, status, ...restProps } = props;
  return (
    <div className="feature-card">
      <div className="feature-card-header">
        <span className="feature-card-id">{id}</span>
        {group!=="user" && <UserProfile username={user.name} available={user.available} color={user.color} size="30px"/>}
      </div>
      <span className='cards-title'>
        {group!=="status" && <span className='svg-icon'>{geticon(status)}</span>}
        <div className="feature-card-title">{title}</div>
      </span>
      <div className="feature-tags-and-icon">
        <div className="feature-card-tags">
          {group!=="priority" && <span className='priority-icon'>{geticon(priority)}</span>}
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
