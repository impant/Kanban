/* eslint-disable no-unused-vars */
import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import './Navbar.css'

export default function Navbar(props) {
  const {setGroup, setOrder, ...restProps} = props;
  return (
    <div id="navbar">
        <Dropdown setGroup={setGroup} setOrder={setOrder} />
    </div>
  )
}
