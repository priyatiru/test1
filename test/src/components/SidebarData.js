import React from 'react'
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
export const SidebarData= [
    {
        title:'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Alert',
        path: '/alert',
        icon: <AiIcons.AiFillAlert />,
        cName: 'nav-text'
    },
    {
        title:'Report',
        path: '/report',
        icon: <FiIcons.FiFileText/>,
        cName: 'nav-text'
    }
]