import React from 'react';
import { NavLink } from 'react-router-dom';
import { Page } from '../common/interfaces';

export default function NavigationLink(props: { page: Page }) {
  const { page } = props;
  return (
    <li className='nav-item'>
      <NavLink className='nav-link' to={page.path}>
        {page.title}
      </NavLink>
    </li>
  );
}
