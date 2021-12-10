import React, { FC, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user/UserContext";

interface Props {}

const UsersList: FC<Props> = () => {
  const { getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>User list</h2>
      <span>count:{count}</span>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        +
      </button>
    </div>
  );
};

export default UsersList;
