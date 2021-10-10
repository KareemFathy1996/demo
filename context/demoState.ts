import { createContext } from "react";

interface demoStateContext {
  demoState: {
    active: boolean;
    component: string;
    module: string;
  };
  setDemoState: ({}) => void;
}

const demoStateContext = createContext<demoStateContext>(
  {} as demoStateContext
);
export default demoStateContext;
