import React from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/hooks";
import {
  requestBlocking,
  requestDeleting,
  requestUnblocking,
} from "../../services/store/userList/userListActions";

export default function UserlistHeader(props: {
  checked: boolean;
  callback: React.Dispatch<React.SetStateAction<boolean>>;
  selected: number[];
}) {
  const { checked, callback, selected } = props;
  const { user } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <div className="row align-items-start border">
      <div className="col">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          checked={checked}
          onChange={() => callback(!checked)}
        />
      </div>
      <div
        className="col"
        onClick={() => {
          console.log(selected);
          dispatch(requestBlocking({ selectedId: selected, userId: user.id }));
        }}
      >
        <button type="button" className="btn btn-primary">
          Block
        </button>
      </div>
      <div
        className="col"
        onClick={() => {
          console.log(selected);
          dispatch(
            requestUnblocking({ selectedId: selected, userId: user.id })
          );
        }}
      >
        <button type="button" className="btn btn-primary">
          Unblock
        </button>
      </div>
      <div
        className="col"
        onClick={() =>
          dispatch(requestDeleting({ selectedId: selected, userId: user.id }))
        }
      >
        <button type="button" className="btn btn-primary">
          Delete
        </button>
      </div>
    </div>
  );
}
