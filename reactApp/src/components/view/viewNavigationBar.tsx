import React from 'react';
import { ViewPages } from '../../common/renderData';
import { useAppSelector } from '../../services/store/hooks';
import NavigationLink from '../NavigationLink';

export default function ViewNavigationBar() {
  const { user } = useAppSelector((store) => store);
  return (
    <ul className='nav nav-tabs justify-content-evenly'>
      {ViewPages.map((page) => (
        <NavigationLink page={page} key={page.title} />
      ))}
      <li className='d-flex align-items-center'>{user.login}</li>
    </ul>
  );
}
