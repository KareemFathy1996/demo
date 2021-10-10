import React from "react";

// demo
import demoStateContext from "context/demoState";
import demoPropsContext from "context/demoProps";
import handleDemo from "utils/handleDemo";
import demoData from "./demoData";

import { IUser } from "models/User";

interface IProps {
  user: IUser;
  title?: string;
}

const UserTag = ({ user = {}, title }: IProps) => {
  // props
  const { name, type, age } = user;

  // demo
  const { demoState } = React.useContext(demoStateContext);
  const { setDemoProps } = React.useContext(demoPropsContext);
  React.useEffect(() => {
    handleDemo(demoState, setDemoProps, demoData, "UserTag", "Common");
  }, [demoState, setDemoProps]);

  return (
    <div style={{ border: "1px black solid", display: "block" }}>
      {title && <p>title: {title}</p>}
      <p>name: {name}</p>
      <p>type: {type}</p>
      <p>age: {age}</p>
    </div>
  );
};

export default UserTag;
