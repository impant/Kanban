/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Headings from '../Headings/Headings'
import Cards from '../Cards/Cards'
import './Section.css'
import {utility} from '../../assests/utility'

export default function Section(props) {
  const {
    name,
    tickets,
    users,
    order,
    group,
    available,
    ...restprops
  }=props
  const [sortedTickets, setSortedTickets] = useState([]);
  useEffect(() => {
    function checkOrder(){
      if(order === 'priority'){
        tickets.sort((a, b) => {
            return b.priority-a.priority;
          });
        }else if(order === 'title'){
          tickets.sort((a, b) => {
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();
    
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
              }
              return 0;
            });
          }
          setSortedTickets(tickets);
        }
        checkOrder();
      }, [tickets, sortedTickets, order]);
      return (
    <div className="container-section">
        <Headings title={name} number={tickets.length} available={available}/>
        {sortedTickets.map((ticket, index) => (
          <Cards key={index} id={ticket.id} title={ticket.title} tags={ticket.tag} priority={utility.priority[ticket.priority].toLowerCase()} status={ticket.status.toLowerCase()} user={users.find(({id}) => id === ticket.userId)} group={group} />
        ))}
    </div>
  )
}
