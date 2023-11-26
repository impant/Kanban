/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Headings.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const geticonfortitle = (title) => {
    return (
        <span className="icon-header">
            <FontAwesomeIcon icon="fa-solid fa-circle" style={{color: "#bec2c8",}} />
        </span>
    )
}
const Headings = (props) => {
  const {
    title,
    number,
    ...restprops
  }=props
  return (
    <div className="container">
        <div className="left">
            {geticonfortitle(title)}
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