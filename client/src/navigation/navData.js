import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Proposals',
    path: '/proposals',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Active Polls',
    path: '/activePolls',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'Log out',
    path: '/login',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
];
