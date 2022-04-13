import React from 'react';

export default function UserlistHeader(props: {
  checked: boolean;
  callback: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { checked, callback } = props;
  return (
    <div className='row align-items-start'>
      <div className='col'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          checked={checked}
          onChange={() => callback(!checked)}
        />
      </div>
      <div className='col'>block</div>
      <div className='col'>unblock</div>
      <div className='col'>delete</div>
    </div>
  );
}
