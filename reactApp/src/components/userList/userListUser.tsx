import React, { useEffect, useState } from 'react';
import { User } from '../../common/interfaces';

export default function UserlistUser(props: { user: User; checked: boolean }) {
  const { user, checked } = props;
  const [selected, setSelected] = useState<boolean>(checked);
  useEffect(() => {
    setSelected(checked);
  }, [checked]);
  return (
    <div className='row align-items-start'>
      <div className='col'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          checked={selected}
          onChange={() => setSelected(!selected)}
        />
      </div>
      <div className='col'>{user.login}</div>
    </div>
  );
}
