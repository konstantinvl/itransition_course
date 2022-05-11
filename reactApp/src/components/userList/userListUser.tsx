import React, { useEffect, useState } from "react";
import { User } from "../../common/interfaces";

export default function UserlistUser(props: {
  user: User;
  checked: boolean;
  select: (id: number) => void;
  deselect: (id: number) => void;
}) {
  const { user, checked, select, deselect } = props;
  const [selected, setSelected] = useState<boolean>(checked);
  useEffect(() => {
    setSelected(checked);
  }, [checked]);
  return (
    <div className="row align-items-start">
      <div className="col">
        <input
          className="form-check-input"
          type="checkbox"
          value={user.id}
          checked={selected}
          onChange={(ev) => {
            if (ev.target.checked) {
              select(user.id);
            } else {
              deselect(user.id);
            }
            setSelected(!selected);
          }}
        />
      </div>
      <div className={"col"}>{user.login}</div>
    </div>
  );
}
