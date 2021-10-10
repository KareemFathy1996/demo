import React from "react";

// demo
import demoStateContext from "context/demoState";
import demoPropsContext from "context/demoProps";
import handleDemo from "utils/handleDemo";
import demoData from "./demoData";

import { IUser } from "models/User";
import { UserTag } from "common/components";

interface IProps {
  users: Array<IUser>;
}

const ListUsers = ({ users = [] }: IProps) => {
  // demo
  const { demoState } = React.useContext(demoStateContext);
  const { setDemoProps } = React.useContext(demoPropsContext);
  React.useEffect(() => {
    handleDemo(demoState, setDemoProps, demoData, "ListUsers", "Common");
  }, [demoState, setDemoProps]);

  return (
    <div style={{ display: "block" }}>
      {(!users || users.length == 0) && <p>List is Empty</p>}
      {users.map((user, index) => {
        return <UserTag key={index} user={user} />;
      })}
    </div>
  );
};

export default ListUsers;
