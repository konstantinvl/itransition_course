import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useAppSelector } from '../../services/store/hooks';
import UserlistHeader from './userlistHeader';
import UserlistUser from './userListUser';

export default function Userlist() {
  const { userlist } = useAppSelector((state) => state.userList);
  const [fullSellection, setFullSelection] = useState<boolean>(false);

  return (
    <Stack className='container-fluid'>
      <UserlistHeader checked={fullSellection} callback={setFullSelection} />
      {userlist.map((user) => (
        <UserlistUser checked={fullSellection} user={user} />
      ))}
    </Stack>
  );
}
