/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Headings.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCircleHalfStroke, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { LuCircleDashed } from "react-icons/lu";
import { BsExclamationSquareFill } from "react-icons/bs";
import { BiSignal3, BiSignal4, BiSignal5 } from "react-icons/bi";
import { utility } from "../../assests/utility";
import UserProfile from "../UserProfile/UserProfile";


const geticonfortitle = (title,available) => {
  if(title==="in progress"){
    return (
      <FaCircleHalfStroke color="#f1ca4b" />
    )
  }
  else if(title==="done"){
    return (
      <FaCircleCheck color="#5e6ad2" />
    )
  }
  else if(title==="todo"){
    return (
      <FaRegCircle color="#bec2c8" />
    )
  }
  else if(title==="canceled"){
    return (
      <FaCircleXmark color="#93a1b2" />
    )
  }
  else if(title==="backlog"){
    return (
      <LuCircleDashed  color="#93a1b2" />
    )
  }
  else if(title==="no priority"){
    return (
      <FontAwesomeIcon icon="fa-solid fa-ellipsis" style={{color: "#6e7279",}} />
    )
  }
  else if(title==="urgent"){
    return (
      <BsExclamationSquareFill color="#fc7840" />
    )
  }
  else if(title==="low"){
    return (
      <BiSignal3 color="#6e7279" />
    )
  }
  else if(title==="medium"){
    return (
      <BiSignal4 color="#6e7279" />
    )
  }
  else if(title==="high"){
    return (
      <BiSignal5 color="#6e7279" />
    )
  }
  return (
      <UserProfile username={title} available={available} size="23px" textSize="11px" color={utility.colorArray[Math.floor(Math.random() * utility.colorArray.length)]}/>
  )
}
const Headings = (props) => {
  const {
    title,
    number,
    available,
    ...restprops
  }=props
  return (
    <div className="container">
        <div className="left">
            {geticonfortitle(title,available)}
            <span className="title">{title}</span>
            <span className="number">{number}</span>
        </div>
        <div className="right">
            <FontAwesomeIcon icon="fa-solid fa-plus" style={{color: "#6e7279",}} />
            <FontAwesomeIcon icon="fa-solid fa-ellipsis" style={{color: "#6e7279",}} />
        </div>
    </div>
  )
}

export default Headings