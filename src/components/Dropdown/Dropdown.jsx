import './Dropdown.css'; // Make sure to import the CSS file
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useComponentVisible from '../../assests/hooks/useComponentVisible';

const Dropdown = ({setOrder, setGroup}) => {
  const group = localStorage.getItem('group');
  const order = localStorage.getItem('order');
  const {ref,parentRef, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);
  const [clicked, setClicked] = useState(isComponentVisible)

  const handleGroupChange = (e) => {
    setGroup(e.target.value.toLowerCase());
    localStorage.setItem('group', e.target.value.toLowerCase());
  }

  const handleOrderChange = (e) => {
    setOrder(e.target.value.toLowerCase());
    localStorage.setItem('order', e.target.value.toLowerCase());
  }
  return (
    <div className="container-dropdown">
      <div role="button" ref = {parentRef} className='dropdown'>
        <div>
          <FontAwesomeIcon icon="fa-solid fa-filter" style={{color: "#000000",}} />
        </div>
        <div className="btn-text">
          <span>
            Display
          </span>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" style={{color: "#6e7279",}} />
          </span>
        </div>
      </div>
      {isComponentVisible && (
        <div className="box" ref = {ref}>
          <div className='box-item'>
            <span className='title-drop-down'>Grouping</span>
            <select className='select-tags' onChange={handleGroupChange}>
              <option selected = {group === 'status'}>Status</option>
              <option selected = {group === 'user'}>User</option>
              <option selected = {group === 'priority'}>Priority</option>
            </select>
          </div>
          <div className='box-item'>
            <span className='title-drop-down'>Ordering</span>
            <select className='select-tags' onChange={handleOrderChange}>
              <option selected = {order === 'priority'}>Priority</option>
              <option selected = {order === 'title'}>Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
