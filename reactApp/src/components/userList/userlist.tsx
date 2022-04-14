import React, { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { useAppSelector } from "../../services/store/hooks";
import UserlistHeader from "./userlistHeader";
import UserlistUser from "./userListUser";

export default function Userlist() {
  const { userlist } = useAppSelector((state) => state.userList);
  const [fullSellection, setFullSelection] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number[]>([]);

  function selectId(id: number) {
    return setSelectedId(selectedId.concat([id]));
  }

  function deselectId(id: number) {
    const newSelectedId = selectedId.filter((selId) => selId !== id);
    setSelectedId(newSelectedId);
  }

  useEffect(() => {
    if (fullSellection) {
      const newSelectedId = userlist.map((user) => user.id);
      setSelectedId(newSelectedId);
    } else {
      setSelectedId([]);
    }
  }, [fullSellection]);

  return (
    <Stack className="container-fluid">
      <UserlistHeader
        checked={fullSellection}
        callback={setFullSelection}
        selected={selectedId}
      />
      {userlist.map((user) => (
        <UserlistUser
          key={user.id}
          checked={fullSellection}
          user={user}
          select={selectId}
          deselect={deselectId}
        />
      ))}
    </Stack>
  );
}
