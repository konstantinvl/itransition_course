import React from 'react';
import { AuthPages } from '../../common/renderData';
import NavigationLink from '../NavigationLink';

export default function AuthNavigationBar() {
  return (
    <ul className='nav nav-tabs justify-content-evenly'>
      {AuthPages.map((page) => (
        <NavigationLink page={page} key={page.title} />
      ))}
    </ul>
  );
}
