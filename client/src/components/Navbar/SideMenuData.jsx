import React from 'react';
import { FaBookMedical } from "react-icons/fa";
import { ImStack} from "react-icons/im";
import { ImBook} from "react-icons/im";
import {GiReceiveMoney} from "react-icons/gi";


export const SidebarData = [
  {
    title: 'All Books',
    path: '/',
    icon: <ImStack />,
    cName: 'nav-text'
  },
  {
    title: 'My Books',
    path: '/mybooks',
    icon: <ImBook/>,
    cName: 'nav-text'
  },
  {
    title: 'Add Books',
    path: '/add',
    icon: <FaBookMedical />,
    cName: 'nav-text'
  },
  {
    title: 'Donate',
    path: '/donate',
    icon: <GiReceiveMoney/>,
    cName: 'nav-text'
  },
];
